import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Clients from './pages/Clients';
import NewProduct from './pages/NewProducts';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/products" component={ Products } />
      <Route path="/addProdutcs" component={ NewProduct } />
      <Route path="/services" component={ Services } />
      <Route path="/clients" component={ Clients } />
    </Switch>
  );
}

export default App;
