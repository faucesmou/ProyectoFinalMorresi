import React, { useContext } from "react";
import Item2 from "./Item2";
import { Link } from "react-router-dom";
import { ThemeContext, themes } from "../ThemeContext";

function ItemListContainer({ /* mensaje, */ products }) {
  console.log(products);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="item-list-container"
      style={{
        background: themes[theme].background,
        color: themes[theme].color,
      }}
    >
      {products.map((product) => (
        <Link to={`/item/${product.id}`} className="text-decoration-none">
          <Item2 key={product.id} product={product} />
        </Link>
      ))}
      
    </div>
  );
}

export default ItemListContainer;
