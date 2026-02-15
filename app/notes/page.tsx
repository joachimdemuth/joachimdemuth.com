import type { Metadata } from "next";
import { notes } from "./data";

export const metadata: Metadata = {
  title: "Notes - Joachim Demuth",
  description: "Short thoughts and observations.",
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-DK", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Notes() {
  return (
    <main>
      <div className="animate-in">
        <h1 className="text-2xl font-medium tracking-tight">Notes</h1>
        <p className="mt-3 text-[15px] text-muted">
          Short thoughts and observations.
        </p>
      </div>

      {notes.length === 0 ? (
        <p
          className="animate-in mt-8 text-[15px] text-muted"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          Nothing here yet.
        </p>
      ) : (
        <ul className="mt-10 space-y-10">
          {notes.map((note, i) => (
            <li
              key={note.date + i}
              className="animate-in"
              style={
                {
                  "--delay": `${100 + i * 80}ms`,
                } as React.CSSProperties
              }
            >
              <time className="text-xs tabular-nums text-muted/70">
                {formatDate(note.date)}
              </time>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {note.content}
              </p>
              {note.link && (
                <a
                  href={note.link.href}
                  className="mt-2 inline-block text-sm text-foreground underline decoration-muted/50 underline-offset-[3px] transition-colors hover:decoration-foreground"
                >
                  {note.link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
