import type { Metadata } from "next";
import { PhotoGrid } from "./photo-grid";
import { photos } from "./data";

export const metadata: Metadata = {
  title: "Photos - Joachim Demuth",
  description: "Film photography by Joachim Demuth.",
};

export default function Photos() {
  return (
    <main>
      <div className="animate-in">
        <h1 className="text-2xl font-medium tracking-tight">Photos</h1>
        <p className="mt-3 text-[15px] text-muted">
          A collection of photos shot on analog, digital and a range of iPhone cameras.
        </p>
      </div>

      <div className="animate-in" style={{ "--delay": "150ms" } as React.CSSProperties}>
        <PhotoGrid photos={photos} />
      </div>
    </main>
  );
}
