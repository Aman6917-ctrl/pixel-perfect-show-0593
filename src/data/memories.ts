export type Memory = {
  date: string;
  title: string;
  description: string;
  photo?: string;
};

// Replace these starter entries with your own dates, words, and photo paths.
// Add images under public/images and use paths such as /images/memory-1.jpg.
export const memories: Memory[] = [
  {
    date: "A little moment",
    title: "That one conversation",
    description: "Nothing extraordinary happened. But for some reason, I remember it.",
  },
  {
    date: "An ordinary day",
    title: "A random day",
    description: "One of those completely normal days that became memorable simply because you were part of it.",
  },
];