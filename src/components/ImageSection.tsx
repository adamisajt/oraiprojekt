import type { ImageItem } from '../types/pageTypes';

type ImageSectionProps = {
  items: ImageItem[];
};

function ImageSection({ items }: ImageSectionProps) {
  return (
    <section className="row mb-1">
      {items.map((item) => (
        <article
          className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100"
          key={item.id}
        >
          <h2>{item.name}</h2>
          <img src={item.image} className="img-fluid" alt={item.alt} />
          <p className="mt-2">{item.description}</p>
        </article>
      ))}
    </section>
  );
}

export default ImageSection;