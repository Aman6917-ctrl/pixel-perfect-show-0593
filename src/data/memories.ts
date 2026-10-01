import elevatorMemory from "@/assets/veduu-elevator-memory.webp";
import closeupMemory from "@/assets/veduu-closeup-memory.webp";

export type Memory = {
  date: string;
  title: string;
  description: string;
  photo?: string;
  /** CSS object-position for the photo crop; defaults to "center" when unset. */
  photoPosition?: string;
};

export const memories: Memory[] = [
  {
    date: "A little moment",
    title: "Just us, for a minute",
    description: "A tiny mirror moment that somehow feels like its own little world.",
    photo: elevatorMemory,
  },
  {
    date: "One to keep close",
    title: "A favorite kind of closeness",
    description: "A close-up memory, kept exactly as sweet and silly as it feels.",
    photo: closeupMemory,
    // Portrait photo in a 4:3 frame — shift the crop down so the faces sit higher
    // in the frame instead of being cut off near the bottom edge.
    photoPosition: "center 72%",
  },
];