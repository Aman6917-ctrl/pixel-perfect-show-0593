import elevatorMemory from "@/assets/veduu-elevator-memory.png.asset.json";
import closeupMemory from "@/assets/veduu-closeup-memory.png.asset.json";

export type Memory = {
  date: string;
  title: string;
  description: string;
  photo?: string;
};

export const memories: Memory[] = [
  {
    date: "A little moment",
    title: "Just us, for a minute",
    description: "A tiny mirror moment that somehow feels like its own little world.",
    photo: elevatorMemory.url,
  },
  {
    date: "One to keep close",
    title: "A favorite kind of closeness",
    description: "A close-up memory, kept exactly as sweet and silly as it feels.",
    photo: closeupMemory.url,
  },
];