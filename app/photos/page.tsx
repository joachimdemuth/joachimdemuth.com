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
      <h1 className="text-2xl font-medium tracking-tight">Photos</h1>
      <p className="mt-3 text-[15px] text-muted">
        Shot on film, mostly around Copenhagen.
      </p>

      <PhotoGrid photos={photos} />
    </main>
  );
}
