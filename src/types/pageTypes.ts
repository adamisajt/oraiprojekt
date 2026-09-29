export type ListGroup = {
  id: string;
  title: string;
  items: string[];
  numbered: boolean;
};

//talaltam imgre 
//mindegyiknek string kell legyen
export type ImageItem = {
  id: string;
  name: string;
  image: string;
  alt: string;
  description: string;
};