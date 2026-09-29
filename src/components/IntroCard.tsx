type IntroCardProps = {
  paragraphs: string[];
};

function IntroCard({ paragraphs }: IntroCardProps) {
  return (
    <section className="row mb-2">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">Mit érdemes tudni a pálinkáról?</div>

          <div className="card-body">
            {paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === paragraphs.length - 1 ? 'mb-0' : undefined}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroCard;