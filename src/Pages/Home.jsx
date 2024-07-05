import Slider from "../components/Slider/Slider";
import "./CSS/Home.scss";
import Item from "../components/Item/Item";
import { productsArray } from "../assets/productStore";


function Home() {
  return (
    <>
      <div className="container-fluid p-0">
        <Slider />

        <h1 align="center" className="mt-3">
          Let`s discover!
        </h1>

        <section className=" list row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mt-5 px-5">
          <div className="category-content">
            <div className="category-content-inner">
              <h2>Our Newest Products</h2>
              <div className="category-button ">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          {productsArray.slice(0, 20).map((item) => {
            if (item.isNew === true) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  img2={item.img2}
                  price={item.price}
                  title={item.title}
                />
              );
            } else {
              return null;
            }
          })}
        </section>

        <section className=" list row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mt-5 px-5">
          <div className="category-content">
            <div className="category-content-inner">
              <h2>Mega Packs</h2>
              <div className="category-button ">
                <button>
                <a href="/megapacks" className="nav-link">
                SEE MORE
                  </a>
                </button>
              </div>
            </div>
          </div>
          {productsArray.slice(0, 15).map((item, i) => {
            if (item.category === "Mega Packs") {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  img2={item.img2}
                  price={item.price}
                  title={item.title}
                />
              );
            } else {
              return null;
            }
          })}
        </section>
      </div>
    </>
  );
}

export default Home;

/* <Row xs={1} md={3} xl={4} className='g-4'>
        {productsArray.map((product, index) => (
            <Col align="center" key={index}>
                <ProductCard product={product}/>
            </Col>
        ))}
        
    </Row> */
