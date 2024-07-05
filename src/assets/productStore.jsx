import bundle1 from "./images/bundle1.jpg";
import cats1 from "./images/cats1.jpg";
import cats2 from "./images/cats2.jpg";
import furniture1 from "./images/furniture1.jpg";
import furniture2 from "./images/furniture2.jpg";
import hands1 from "./images/hands1.jpg";
import kids1 from "./images/kids1.jpg";
import nofacepeople1 from "./images/nofacepeople1.jpg";
import nofacepeople2 from "./images/nofacepeople2.jpg";
import peopledog1 from "./images/peopledog1.jpg";
import peoplesitting1 from "./images/peoplesitting1.jpg";
import peoplesitting2 from "./images/peoplesitting2.jpg";
import peoplesitting3 from "./images/peoplesitting3.jpg";
import peoplestanding1 from "./images/peoplestanding1.jpg";
import peoplestanding3 from "./images/peoplestanding3.jpg";
import peoplestanding4 from "./images/peoplestanding4.jpg";
import peoplestanding5 from "./images/peoplestanding5.jpg";
import peoplestanding6 from "./images/peoplestanding6.jpg";
const productsArray = [
  {
    id: "price_1PQTR0P0LAsJX8hKTPTUFdBm",
    title: "Kids 1 Flat Vector",
    category: "Flat Vector",
    price: 12.99,
    isNew: true,
    img: kids1,
    img2: kids1,
  },
  {
    id: "price_1PIcASP0LAsJX8hK0pv60JD7",
    title: "No Face People 1 Cutout",
    category: "Cutout",
    price: 12.99,
    isNew: true,
    img: nofacepeople1,
    img2: nofacepeople2,
  },
  {
    id: "price_1PIc9sP0LAsJX8hKAv4qYSax",
    title: "People and Dogs 1 Cutout",
    category: "Cutout",
    price: 9.99,
    isNew: true,
    img: peopledog1,
    img2: peopledog1,
  },
  {
    id: "price_1PIc8XP0LAsJX8hKggD6tqbn",
    title: "Standing People 1 Cutout",
    category: "Flat Vector",
    price: 4.99,
    isNew: true,
    img: peoplestanding1,
    img2: peoplestanding4,
  },
  {
    id: "price_1PQTUGP0LAsJX8hKNMDg8P2l",
    title: "Cutout Cats 1",
    category: "Cutout",
    price: 5.99,
    isNew: false,
    img: cats1,
    img2: cats2,
  },
  {
    id: "price_1PQTUbP0LAsJX8hKW7yp7Tka",
    title: "Cats 2 Flat Vector",
    price: 5.99,
    category: "Flat Vector",
    isNew: false,
    img: cats2,
    img2: cats1,
  },
  {
    id: "price_1PQTUqP0LAsJX8hKp5naHdvC",
    title: "Standing People 3 Flat Vector",
    price: 2.99,
    category: "Mega Packs",
    isNew: false,
    img: peoplestanding3,
    img2: peoplestanding4,
  },
  {
    id: "price_1PQTV2P0LAsJX8hKqZYDjHY3",
    title: "Cutout Standing People 4 ",
    category: "Cutout",
    price: 5.99,
    isNew: false,
    img: peoplestanding4,
    img2: peoplestanding3,
  },
  {
    id: "price_1PQTVKP0LAsJX8hK9fIgbiXX",
    title: "Standing People 5 Flat Vector",
    price: 5.99,
    category: "Flat Vector",
    isNew: false,
    img: peoplestanding5,
    img2: peoplestanding6,
  },

  {
    id: "price_1PQTVUP0LAsJX8hKqBO4ci4D",
    title: "Standing People 6 Cutout",
    price: 2.99,
    category: "Mega Packs",
    isNew: false,
    img: peoplestanding6,
    img2: peoplestanding5,
  },

  {
    id: "price_1PQTVlP0LAsJX8hKdzBPLzCj",
    title: "Hands 1 Cutout",
    category: "Mega Packs",
    price: 15.99,
    isNew: false,
    img: hands1,
    img2: hands1,
  },

  {
    id: "price_1PQTVyP0LAsJX8hK78TcMvVA",
    title: "Furniture 1 Cutout",
    category: "Mega Packs",
    price: 4.99,
    isNew: false,
    img: furniture1,
    img2: furniture2,
  },
  {
    id: "price_1PQTW9P0LAsJX8hKl80bd2T0",
    title: "Mega Pack 1",
    category: "Mega Packs",
    price: 15.99,
    isNew: false,
    img: bundle1,
    img2: bundle1,
  },
  {
    id: "price_1PQTWIP0LAsJX8hKO7LnST53",
    title: "People Sitting 1 Cutout",
    category: "Cutout",
    price: 4.99,
    isNew: false,
    img: peoplesitting1,
    img2: peoplesitting2,
  },
  {
    id: "price_1PRXo1P0LAsJX8hK50jPjUfA",
    title: "People Sitting 2 Cutout",
    category: "Cutout",
    price: 4.99,
    isNew: false,
    img: peoplesitting2,
    img2: peoplesitting1,
  },
  {
    id: "price_1PRXoiP0LAsJX8hKg3ifNlGa",
    title: "People Sitting 3 Cutout",
    category: "Cutout",
    price: 4.99,
    isNew: false,
    img: peoplesitting3,
    img2: peoplesitting2,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
