import React from "react";

const Home = () => {
  return (
    <div
      className="p-5 text-center bg-image d-flex justify-content-center align-items-center"
      style={{ backgroundImage: "", height: 400 }}
    >
      <div
        className="mask p-5"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", width: "100%" }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white"  style={{ backgroundImage: "", width: 400 }}>
            <h1 className="mb-3">FoodRoulette</h1>
            <h4 className="mb-3">
              Is it a soup? Is it a sub?<br></br> Your fridge decides!
            </h4>
            <a
              className="btn btn-outline-light btn-lg"
              href="/recipe-list"
              role="button"
            >
              Let's get cooking!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
