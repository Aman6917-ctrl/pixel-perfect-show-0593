import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";
import path from "node:path";
import app from "../dist/server/server.js";

const clientRoot = fileURLToPath(new URL("../dist/client/", import.meta.url));
const port = Number(process.env.PORT ?? 3000);
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

function staticFile(pathname) {
  const filename = path.resolve(clientRoot, `.${pathname}`);
  return filename.startsWith(clientRoot) && existsSync(filename) ? filename : null;
}

createServer(async (request, response) => {
  const origin = `http://${request.headers.host ?? "localhost"}`;
  const url = new URL(request.url ?? "/", origin);
  const filename = staticFile(decodeURIComponent(url.pathname));

  if (filename && (await stat(filename)).isFile()) {
    response.writeHead(200, {
      "content-type": mimeTypes[path.extname(filename)] ?? "application/octet-stream",
      "cache-control": "public, max-age=31536000, immutable",
    });
    if (request.method === "HEAD") return response.end();
    return createReadStream(filename).pipe(response);
  }

  try {
    const headers = new Headers();
    for (const [key, value] of Object.entries(request.headers)) {
      if (value) headers.set(key, Array.isArray(value) ? value.join(", ") : value);
    }
    const appRequest = new Request(url, {
      method: request.method,
      headers,
      body: request.method === "GET" || request.method === "HEAD" ? undefined : Readable.toWeb(request),
      duplex: "half",
    });
    const appResponse = await app.fetch(appRequest, process.env, { waitUntil() {} });
    response.writeHead(appResponse.status, Object.fromEntries(appResponse.headers));
    if (!appResponse.body || request.method === "HEAD") return response.end();
    Readable.fromWeb(appResponse.body).pipe(response);
  } catch (error) {
    console.error(error);
    response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    response.end("Server error");
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
