type FooterProps = {
  author: string;
  creationDate: string;
};

function Footer({ author, creationDate }: FooterProps) {
  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-sm-12 kartya mb-3">
          <p className="text-center">
            <b>Az oldalt készítette: </b>
            <i>{author}</i>
          </p>

          <p className="text-center">
            <span className="fw-bold"> Készítés dátuma: </span>
            <span className="dolt"> {creationDate} </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;