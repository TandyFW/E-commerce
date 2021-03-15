import { useContext, useEffect } from 'react';
import Context from '../context/index';
import productsAPI from '../services/productsAPI';
import './productCard.css';

function ProductCard() {
  const { products, setProducts } = useContext(Context);
  useEffect(() => {
    setProducts(productsAPI);
  },[setProducts]);

  return (
    <>
      {products.map(({ id, name, tag, price, quantity, url }) => 
        <div key={ id } className="product-card">
          <div className="left-border" />
          <figure className="product-card-image">
            <img src={ url } alt={ name } />
          </figure>
          <div className="product-card-info">
            <span>{ name } </span>
            <span>{ tag } </span>
            <span>R${ price } </span>
            <span>Estoque: { quantity }</span>
          </div>
          <div className="right-border" />
        </div>
      )}
    </>
  );
}

export default ProductCard;
