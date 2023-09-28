import React from 'react';
import BotonContador from "./ItemCount";

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
const Item2 = ({ product }) => {
  return (
    <div className="card">
      <a href={`/item/detail/${product.description}`} className="card-link">
        <figure className="card-img-top">
          <img src={`/images/products/${product.image}`} alt="imagen de producto" className="img-fluid" />
        </figure>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text precio">${product.price}</p>
        </div>
      </a>
      <BotonContador />
    </div>
  );
};


export default Item2;
