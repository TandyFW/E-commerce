import React, { useContext, useState } from 'react';
import Context from '../context';
import products from '../services/productsAPI';

function ProductForm() {
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [url, setUrl] = useState('');
  const {setProducts, productID, setProductID} = useContext(Context);
  const addProduct = () => {
    const newProduct = {id: productID, name, tag, price, quantity, url};
    setProductID(productID + 1);
    setProducts([...products, newProduct]);
  }

  return(
    <form>
      <label htmlFor="name">Nome: 
        <input type="text" id="name" value={name} onChange={ (e) => setName(e.target.value)} />
      </label>
      <label htmlFor="tag">Categoria: 
        <select id="tag" value={tag} onChange={ (e) => setTag(e.target.value)} >
          <option>Clothes</option>
          <option>Food</option>
        </select>
      </label>
      <label htmlFor="price">Preço: 
        <input id="price" type="number" value={price} onChange={ (e) => setPrice(e.target.value)} />
      </label>
      <label htmlFor="quantity">Quantidade: 
        <input id="quantity" type="number" value={quantity} onChange={ (e) => setQuantity(e.target.value)} />
      </label>
      <label htmlFor="url">Imagem: 
        <input id="url" type="text" value={url} onChange={ (e) => setUrl(e.target.value)} />
      </label>
      <button type="button" onClick={ addProduct }>Adicionar</button>
    </form>
  );
}

export default ProductForm;
