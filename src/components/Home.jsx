import React from "react";

const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: "₹2,999",
    img: "https://rukminim2.flixcart.com/image/612/612/l5ld8y80/smartwatch/s/b/g/-original-imagg8dtgf9neabt.jpeg?q=70",
  },
  {
    id: 2,
    name: "Headphones",
    price: "₹1,499",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/e/j/1/-original-imahg6wkgxsbzhsm.jpeg?q=70",
  },
  {
    id: 3,
    name: "Shoes",
    price: "₹3,499",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/k/i/l/10-rng-eva-740-wht-blk-10-bruton-white-black-original-imahjn6cmwhphfaw.jpeg?q=70",
  },
  {
    id: 4,
    name: "Mobile",
    price: "₹15,999",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/i/v/-original-imahhhfvqhmf7fgg.jpeg?q=70",
  },
];

const Home = () => {
  return (
    <div className="bg-light min-vh-100">
      <div className="bg-dark text-white py-4 text-center">
        <h2 className="fw-bold">My Store</h2>
        <p className="mb-0">Best Products Just For You 🛍️</p>
      </div>
      <div className="container mt-5">
        <div className="row g-4">
          {products.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="card shadow-sm h-100 border-0 rounded-4">
                <img
                  src={item.img}
                  className="card-img-top p-3 product-img"
                  alt={item.name}
                />
                <div className="card-body text-center">
                  <h5 className="fw-semibold">{item.name}</h5>
                  <p className="text-success fw-bold">{item.price}</p>
                  <button className="btn btn-dark w-100 rounded-pill">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
