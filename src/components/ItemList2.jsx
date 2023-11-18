/* import React from "react";
import Item2 from "./Item2";
import { Link } from "react-router-dom";

const ItemList2 = ({ products }) => {
  return (
    <div className="container">
      <h2 className="products-title">Todos los productos</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <Link
              to={`/item/${product.id}`}
              className="text-decoration-none"
            >
              <Item2 key={product.id} product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList2;
 */