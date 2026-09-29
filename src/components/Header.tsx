type HeaderProps = {
  title: string;
  subtitle: string;
};

function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="row">
      <div className="col-sm-12 kartya mb-3">
        <header className="mt-2 mb-1 p-5 bg-primary text-white rounded">
          <h1 id="focim">{title}</h1>
          <p className="mb-0">{subtitle}</p>
        </header>
      </div>
    </div>
  );
}
 
export default Header;