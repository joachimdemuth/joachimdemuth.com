"use client";

const COLORS = ["#818cf8", "#60a5fa", "#34d399", "#a78bfa", "#22d3ee"];

export function GradientText({ children }: { children: string }) {
  return (
    <span className="gradient-text">
      {children.split("").map((char, i) => (
        <span
          key={i}
          style={
            {
              "--color": COLORS[i % COLORS.length],
              "--delay": `${i * 40}ms`,
            } as React.CSSProperties
          }
        >
          {char}
        </span>
      ))}
    </span>
  );
}
