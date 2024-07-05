import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import "./Footer.scss";

function Footer() {
  return (
    <div className="container-fluid p-0">
      <footer className="justify-content-between w-100">
        <section className="footer-top px-5 mt-5">
          <div className="row">
            <div className="col-4 col-md-2 mb-3">
              <h5>Helpful Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-primary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-primary">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-primary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-primary">
                    Terms &amp; Policy
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-primary">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4 col-md-2 mb-3">
              <h5>Categories</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/megapacks" className="nav-link p-0 text-primary">
                    Mega Packs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/cutous" className="nav-link p-0 text-primary">
                    Cutouts
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/flatvector" className="nav-link p-0 text-primary">
                    Flat Vector
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/collections" className="nav-link p-0 text-primary">
                    By Category
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/about" className="nav-link p-0 text-primary">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-primary">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-primary">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-primary">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-primary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-primary">About</a></li>
                        </ul>
                        </div> */}

            <div className="col-md-5 offset-md-3 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="footer-bottom p-5">
          <div className="d-flex justify-content-between mb-2 ">
            <div className="mb-4 social-network">
              <span>Get connected with us on social networks:</span>
            </div>
            <div className="d-flex row justify-content-between">
              <a href="#" className="col">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="col">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="col">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="payment">
            <div>
              <div className=" gap-3 d-flex flex-column flex-sm-row justify-content-start mb-4">
                <div className="visa-card payment">
                  <FaCcVisa />
                </div>
                <div className="master-card payment">
                  <FaCcMastercard />
                </div>
                <div className="paypal payment">
                  <FaCcPaypal />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between">
            <p>&copy; 2024 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlink:href="#twitter" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlink:href="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlink:href="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;

{
  /* <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 footer-bottom"> */
}
