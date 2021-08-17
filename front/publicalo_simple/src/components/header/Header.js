import Nav from "../nav/Nav";

function Header() {
    return (
      <div className="container">
        <header className="row">
            <Nav />
            <p className="text-end">Hola, <strong>Luciano Perez</strong></p>
            
        </header>
      </div>
    );
  }
  
  export default Header;
  