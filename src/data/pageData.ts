import type { ImageItem, ListGroup } from '../types/pageTypes';

//szovegek bekuldott html-be ha kene meg
export const mainTitle = 'REACT gyakorlás: Komponensekre bontás';
export const subtitle = 'Téma: Pálinkák és gyümölcspárlatok';

export const introduction: string[] = [
  'A pálinka a magyar gasztronómiai és kulturális hagyományok egyik ismert itala. Készítése során erjesztett gyümölcsből lepárlással állítanak elő gyümölcspárlatot.',
  'A pálinka készítésének egyik fontos alapanyaga a megfelelő minőségű, érett gyümölcs. Gyakori alapanyag például az alma, a szilva, a körte, a meggy és a kajszibarack.',
  'A jó minőségű pálinka készítésénél az alapanyag minősége és a megfelelő technológia egyaránt fontos.',
];

export const listGroups: ListGroup[] = [
  {
    id: 'alapanyagok',
    title: 'Gyakori alapanyagok',
    numbered: false,
    items: ['Alma', 'Körte', 'Szilva', 'Meggy', 'Kajszibarack'],
  },
  {
    id: 'nepszeru-palinkak',
    title: 'Népszerű pálinkák',
    numbered: true,
    items: [
      'Szilvapálinka',
      'Barackpálinka',
      'Körtepálinka',
      'Almapálinka',
      'Birsalmapálinka',
    ],
  },
  {
    id: 'iz-es-illatjegyek',
    title: 'Íz- és illatjegyek',
    numbered: true,
    items: [
      'Gyümölcsös',
      'Illatos',
      'Érett gyümölcsre jellemző',
      'Harmonikus',
      'Tiszta lecsengésű',
    ],
  },
];

//to learn
//string[][] is a TypeScript type for an array of string arrays. The outer array contains inner arrays, and each value in an inner array must be a string.
//For example, it can represent rows of text, such as a table. The type doesn’t specify how many rows or how many strings each row must contain.
export const fruitTable: string[][] = [
  ['Alma', 'Szilva', 'Körte'],
  ['Meggy', 'Kajszi', 'Birsalma'],
  ['Cseresznye', 'Őszibarack', 'Szőlő'],
];

export const imageItems: ImageItem[] = [
  {
    id: 'banan',
    name: 'Banán',
    image: '/images/Banán.jpg',
    alt: 'Banán',
    description:
      'A banán trópusi gyümölcs, amely Magyarországon nem jellemző pálinkaalapanyag.',
  },
  {
    id: 'birsalma',
    name: 'Birsalma',
    image: '/images/birsalma.jpg',
    alt: 'Birsalma',
    description:
      'A birsalma jellegzetes illatú gyümölcs, amelyből gyümölcspárlat is készíthető.',
  },
  {
    id: 'mogyoro',
    name: 'Mogyoró',
    image: '/images/mogyoro.jpg',
    alt: 'Mogyoró',
    description:
      'A mogyoró olajos mag, ezért nem a hagyományos gyümölcspárlatok alapanyagai közé tartozik.',
  },
  {
    id: 'granatalma',
    name: 'Gránátalma',
    image: '/images/granatalma.jpg',
    alt: 'Gránátalma',
    description:
      'A gránátalma gyümölcs, jellegzetes édes-savanykás ízzel és sok apró maggal.',
  },
];

export const importantFacts: string[] = [
  'A pálinka gyümölcsből készített párlat.',
  'Az alapanyag minősége jelentősen befolyásolja a késztermék tulajdonságait.',
  'A gyümölcsöt először elő kell készíteni és erjeszteni kell.',
  'Az erjesztett gyümölcscefréből lepárlással készül a párlat.',
  'A pálinka megnevezés használatát jogszabály szabályozza.',
];

export const author = 'Aczel Adam';
export const creationDate = '2026.09.29.';




