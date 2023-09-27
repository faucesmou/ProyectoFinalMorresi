import React from 'react';
import BotonContador from "./ItemCount";

const Item2 = ({ product }) => {
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
};

export default Item2;
