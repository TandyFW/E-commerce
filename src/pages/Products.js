import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';

function Products() {
  return(
    <main>
      <Header />
      {/* <nav>
        <button type="button"><Link to="/addProdutcs">Adicionar Produto</Link></button>
      </nav> */}
      <ProductForm />
      <section className="product-cards">
        <ProductCard />
      </section>
    </main>
  );
}

export default Products;
