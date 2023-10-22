import React, { useContext } from "react";
/* import BotonContador from "./ItemCount"; */
import { ThemeContext } from "../ThemeContext";

const Item2 = ({ product }) => {
  const { themesCards } = useContext(ThemeContext);

  return (
    <div
      className="card"
      style={{
        background: themesCards ? "#96a2b8" : "white",
      }}
    >
      <div className="card-content">
        <h4 className="cart-subtitle">{product.title}</h4>
        <a href={`/item/detail/${product.description}`} className="card-link">
          {/*  <figure className="card-img-top"> */}
          <div className="card-img-container">
            <img
              src={`/images/products/${product.image}`}
              alt="imagen de producto"
              /* className="img-fluid" */
              className="card-img"
            />
          </div>
          {/*  </figure> */}
          <div className="card-body">
            <div className="card-info">
              <h4 className="cart-subtitle">Stock: {product.stock}</h4>
              <p className="card-text-precio">${product.price}</p>
            </div>
          </div>
        </a>
        {/*       <BotonContador producto={product} /> */}
      </div>
    </div>
  );
};

export default Item2;

/* const Item2 = ({ product }) => {
    return (
      <div className="card align-items-start">
        <section className="card-body">
          <a href={`/products/detail/${product.description}`}>
            <figure className="product-box_image">
              <img src={`/images/products/${product.image}`} alt="imagen de producto" />
            </figure>
            <article className="product-box_data">
              <p className="card-title">{product.name}</p>
              <p className="precio">${product.price}</p>
            </article>
          </a>
        </section>
        <BotonContador/>
      </div>
    );
  }; */
