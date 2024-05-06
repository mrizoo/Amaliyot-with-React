import PagesHeader from "../components/PagesHeader";

function Hero() {
  return (
    <div className="">
      <div className="card card-side ml-20 mt-28 bg-base-100 shadow-xl w-5/12 ">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
