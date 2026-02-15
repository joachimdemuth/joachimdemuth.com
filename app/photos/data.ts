// -------------------------------------------------------
// Add your photos here.
//
// 1. Drop images into public/photos/
// 2. Add an entry below. The `src` is relative to public/.
// 3. Set `aspect` to help the masonry grid: "landscape" (3:2),
//    "portrait" (2:3), or "square" (1:1). Defaults to landscape.
//
// Optional: camera and film fields show in the lightbox.
// -------------------------------------------------------
export type Photo = {
  src: string;
  alt: string;
  aspect?: "landscape" | "portrait" | "square";
  camera?: string;
  film?: string;
  year?: number;
  latlon?: [number, number];
};

const MJU = "Olympus Mju I";
const OM1 = "Olympus OM-1";
const iPhone11Pro = "iPhone 11 Pro";
const iPhone14Pro = "iPhone 14 Pro";
const DSX1000 = "Mamiya DSX 1000";
const OLYMPUSAF100 = "Olympus AF 10";
const SONYRX = "Sony RX100 VII"

export const photos: Photo[] = [
  // {
  //   src: "/photos/copenhagen-sunset.jpg",
  //   alt: "Sunset over the lakes, Copenhagen",
  //   aspect: "landscape",
  //   camera: "Minolta X-700",
  //   film: "Portra 400",
  // },
  {
    src: "/photos/R1-00803-0025.jpg",
    alt: "Cakes at Slaatto Morsbøl exhibition",
    aspect: "landscape",
    camera: OM1,
    film: "Kodak Gold 400",
    year: 2025,
    latlon: [55.669427, 12.554486],
  },
  {
    src: "/photos/kaktus.jpg",
    alt: "Cactus plant at the local graveyard",
    aspect: "portrait",
    camera: SONYRX,
    year: 2025,
    latlon: [55.712604, 12.527334],
  },
  {
    src: "/photos/IMG_1201.jpg",
    alt: "Old Citroen",
    aspect: "portrait",
    camera: iPhone11Pro,
    year: 2022,
    latlon: [55.712604, 12.527334],
  },
  {
    src: "/photos/IMG_3386.jpg",
    alt: "Car in front of a house",
    aspect: "landscape",
    camera: iPhone11Pro,
    year: 2023,
    latlon: [55.712604, 12.527334],
  },
  {
    src: "/photos/R1-00291-0014.jpg",
    alt: "Colored steel rods with graffitt",
    aspect: "landscape",
    camera: MJU,
    year: 2023,
    latlon: [55.712604, 12.527334],
  },
];
