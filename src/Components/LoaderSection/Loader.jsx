import "./loader.css";

export default function Loader() {
  return (
    <div className="loader-container">

      <div className="drop-wrapper">
        <div className="drop-ball"></div>

        {/* splash particles */}
        {/* <div className="splash splash1"></div>
        <div className="splash splash2"></div>
        <div className="splash splash3"></div> */}

        <div className="drop-shadow"></div>
      </div>

    </div>
  );
}