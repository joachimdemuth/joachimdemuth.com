export type Note = {
  date: string; // YYYY-MM-DD
  content: string; // Plain text or simple markdown-ish text
  link?: {
    label: string;
    href: string;
  };
};

// -------------------------------------------------------
// Add notes here. Newest first.
//
// Keep them short — a sentence or two. These aren't blog
// posts. Think of them as things you'd say to a friend.
// -------------------------------------------------------

export const notes: Note[] = [
  // {
  //   date: "2026-02-15",
  //   content:
  //     "Experimenting with agentic workflows for code review. The results are surprisingly good when you give the model enough context.",
  // },
  {
    date: "2026-02-15",
    content:
      "Still experiencing a lot of firsts, which is always nice.",
  },
];
