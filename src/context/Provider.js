import { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './index';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [productID, setProductID] = useState(2);

  const context = { products, setProducts, productID, setProductID };
  return(
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
