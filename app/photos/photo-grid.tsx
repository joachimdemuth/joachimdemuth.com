"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { Photo } from "./data";



function Lightbox({
  photo,
  onClose,
}: {
  photo: Photo;
  onClose: () => void;
}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={1600}
          height={1200}
          sizes="90vw"
          quality={90}
          className="max-h-[85vh] w-auto rounded-sm object-contain"
          priority
        />
        {(photo.camera || photo.film) && (
          <p className="mt-3 text-center text-xs text-muted/70">
            {[photo.camera, photo.film].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>
    </div>
  );
}

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [selected, setSelected] = useState<Photo | null>(null);

  const close = useCallback(() => setSelected(null), []);

  if (photos.length === 0) {
    return (
      <p className="mt-8 text-[15px] text-muted">
        Photos coming soon.
      </p>
    );
  }

  return (
    <>
      <div className="mt-8 columns-2 gap-3 sm:columns-3">
        {photos.map((photo) => (
          <button
            key={photo.src}
            onClick={() => setSelected(photo)}
            className="group mb-3 block w-full cursor-zoom-in overflow-hidden rounded-sm"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={photo.aspect === "portrait" ? 600 : photo.aspect === "square" ? 400 : 267}
              sizes="(min-width: 640px) 205px, 50vw"
              quality={80}
              className="w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
          </button>
        ))}
      </div>

      {selected && <Lightbox photo={selected} onClose={close} />}
    </>
  );
}
