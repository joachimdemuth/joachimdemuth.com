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
    latlon: [55.666865, 12.549764],
  },
  {
    src: "/photos/IMG_3386.jpg",
    alt: "Car in front of a house",
    aspect: "landscape",
    camera: iPhone11Pro,
    year: 2023,
    latlon: [64.1261116,-21.9350209],
  },
  {
    src: "/photos/R1-00291-0014.jpg",
    alt: "Colored steel rods with graffitt",
    aspect: "landscape",
    camera: MJU,
    year: 2023,
    latlon: [55.710371, 12.528240],
  },
  {
    src: "/photos/000001570022.jpg",
    alt: "Corporate building",
    aspect: "portrait",
    camera: OM1,
    year: 2024,
    latlon: [55.686828, 12.597733],
  },
  {
    src: "/photos/000008170029.jpg",
    alt: "Sunkissed building",
    aspect: "portrait",
    camera: MJU,
    year: 2023,
    latlon: [55.6712398,12.5114243],
  },
  {
    src: "/photos/000017040012.jpg",
    alt: "The Copenhagen Opera House",
    aspect: "landscape",
    camera: OM1,
    year: 2023,
    latlon: [55.6821758,12.5975183],
  },
  {
    src: "/photos/000029700038.jpg",
    alt: "Sunkissed church",
    aspect: "landscape",
    camera: MJU,
    year: 2024,
    latlon: [55.6663766,12.5214802],
  },
  {
    src: "/photos/000039930004.jpg",
    alt: "Lonely at sea",
    aspect: "portrait",
    camera: MJU,
    year: 2024,
    latlon: [43.9582392,12.7475762],
  },
  {
    src: "/photos/000039930014.jpg",
    alt: "Entrance staircase",
    aspect: "portrait",
    camera: OM1,
    year: 2024,
    latlon: [43.9582392,12.7475762],
  },
  {
    src: "/photos/000039930016.jpg",
    alt: "Color split",
    aspect: "portrait",
    camera: OM1,
    year: 2024,
    latlon: [43.9582392,12.7475762],
  },
  {
    src: "/photos/000039930027.jpg",
    alt: "Farm shop in the mountains",
    aspect: "landscape",
    camera: OM1,
    year: 2024,
    latlon: [46.5323868,12.0643728],
  },
  {
    src: "/photos/000039950013.jpg",
    alt: "Orange in the sky",
    aspect: "portrait",
    camera: OM1,
    year: 2024,
    latlon: [41.9099533,12.3711916],
  },
  {
    src: "/photos/000039950018.jpg",
    alt: "Holy bird",
    aspect: "portrait",
    camera: OM1,
    year: 2024,
    latlon: [41.9038113,12.4325728],
  },
  {
    src: "/photos/000039960026.jpg",
    alt: "Fashionable old man walking the streets of Rome",
    aspect: "portrait",
    camera: OM1,
    year: 2024,
    latlon: [41.9099533,12.3711916],
  },
  {
    src: "/photos/000039970006.jpg",
    alt: "Clear moon over looking over the mountain top",
    aspect: "portrait",
    camera: OM1,
    year: 2024,
    latlon: [46.6181889,12.2889871],
  },
  {
    src: "/photos/000039970028.jpg",
    alt: "Darkness' worst enemy",
    aspect: "portrait",
    camera: OM1,
    year: 2024,
    latlon: [55.6673604,12.5432921],
  },
  {
    src: "/photos/000052890014-2.jpg",
    alt: "4 birds and a view",
    aspect: "landscape",
    camera: MJU,
    year: 2024,
    latlon: [46.5323868,12.0643728],
  },
  {
    src: "/photos/000052890016-2.jpg",
    alt: "Tofana, Cortina d'Ampezzo",
    aspect: "landscape",
    camera: MJU,
    year: 2024,
    latlon: [46.5323868,12.0643728],
  },
  {
    src: "/photos/000084240026.jpg",
    alt: "Glass panes going round and round",
    aspect: "portrait",
    camera: DSX1000,
    year: 2024,
    latlon: [55.6603685,12.5679574],
  },
  {
    src: "/photos/000146340032.jpg",
    alt: "Walking New York City",
    aspect: "landscape",
    camera: OM1,
    year: 2022,
    latlon: [40.6970243,-74.1443125],
  },
  {
    src: "/photos/000146340039-3.jpg",
    alt: "Emil throwing signs",
    aspect: "portrait",
    camera: OM1,
    year: 2022,
    latlon: [40.6970243,-74.1443125],
  },
  {
    src: "/photos/000176870017.jpg",
    alt: "Tacoooooooo",
    aspect: "portrait",
    camera: OM1,
    year: 2022,
    latlon: [40.6970243,-74.1443125],
  },
  {
    src: "/photos/000176870021.jpg",
    alt: "Weeeeeell",
    aspect: "portrait",
    camera: OM1,
    year: 2022,
    latlon: [36.7181936,-4.5316674],
  },
  {
    src: "/photos/006860500008.jpg",
    alt: "Sheep in the wild",
    aspect: "landscape",
    camera: OM1,
    year: 2022,
    latlon: [55.6347697,12.530532],
  },
  {
    src: "/photos/F10000020.jpg",
    alt: "Corporate way to heaven",
    aspect: "portrait",
    camera: OM1,
    year: 2022,
    latlon: [40.6970243,-74.1443125],
  },
  {
    src: "/photos/farvehus6.jpg",
    alt: "Colors is a tourist paradise",
    aspect: "landscape",
    camera: OM1,
    year: 2022,
    latlon: [36.7181936,-4.5316674],
  },
  {
    src: "/photos/italy-03.jpg",
    alt: "Mountain top",
    aspect: "landscape",
    camera: OM1,
    year: 2023,
    latlon: [46.5323868,12.0643728],
  },
  {
    src: "/photos/italy-06.jpg",
    alt: "Climber caught climbing",
    aspect: "portrait",
    camera: OM1,
    year: 2023,
    latlon: [46.51044,12.0190688],
  },
  {
    src: "/photos/italy-25.jpg",
    alt: "The face says it all",
    aspect: "landscape",
    camera: OM1,
    year: 2023,
    latlon: [46.1584309,12.9847187],
  },
  {
    src: "/photos/italy-35.jpg",
    alt: "Mountain top",
    aspect: "landscape",
    camera: OM1,
    year: 2023,
    latlon: [46.5323868,12.0643728],
  },
  {
    src: "/photos/lusepiller.jpg",
    alt: "Reminder to help each other out in life",
    aspect: "landscape",
    camera: OM1,
    year: 2022,
    latlon: [36.124125, -5.343188],
  },
  {
    src: "/photos/Runner.jpg",
    alt: "First in the race",
    aspect: "landscape",
    camera: OM1,
    year: 2022,
    latlon: [40.750923, -74.010237],
  },
  {
    src: "/photos/ten.jpg",
    alt: "Chinese orders",
    aspect: "portrait",
    camera: SONYRX,
    year: 2025,
    latlon: [63.4757834,-19.4315622],
  },

];
