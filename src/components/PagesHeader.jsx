import { Link } from "react-router-dom";
function PagesHeader() {
  return (
    <div className="">
      <div className="navBar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <ul>
          <li>
            <button className="btn btn-primary">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PagesHeader;
