import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div className="ml-auto">
        </div>
        <Link to="/agenda">
          <button type="button" className="btn btn-danger">
            Go to Agenda
          </button>
        </Link>
        <div>
          <Link to="/new-contact">
            <button type="button" className="btn btn-success">
              Create new contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
