type InfoCardProps = {
  facts: string[];
};

function InfoCard({ facts }: InfoCardProps) {
  return (
    <section className="row">
      <div className="col-sm-12 kartya mb-3">
        <div className="card">
          <div className="card-header">Amit érdemes megjegyezni</div>

          <div className="card-body">
            <ul>
              {facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoCard;