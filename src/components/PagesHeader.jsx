import { Link } from "react-router-dom";
function PagesHeader() {
  return (
    <div className="">
      <div className="navbar flex items-center  justify-around">
        <nav>
          <ul className="flex">
            <li>
              <Link>
                <img
                  src="https://img.freepik.com/premium-photo/colorful-bird-with-multicolored-wings-is-shown_795524-1290.jpg"
                  alt=""
                  width="100"
                  height="100"
                />
              </Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
          </ul>
        </nav>

        <div className="navbar-end flex gap-5 ms-80">
          <p>Name</p>
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="" />
            </div>
          </div>
        </div>
        <ul>
          <li>
            <button className="btn btn-primary w-28 ">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PagesHeader;
