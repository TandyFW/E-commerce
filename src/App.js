import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Clients from './pages/Clients';
import NewProduct from './pages/NewProducts';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width" />
        <meta charset="utf-8" />
        <title>Fenix</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossorigin="anonymous"
        />
      </Helmet>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/products" component={ Products } />
        <Route path="/addProdutcs" component={ NewProduct } />
        <Route path="/services" component={ Services } />
        <Route path="/clients" component={ Clients } />
      </Switch>
    </>
  );
}

export default App;
