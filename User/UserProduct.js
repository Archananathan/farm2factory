// Product.js
import '../CSS/Product.css';
import React from 'react';
import { Link } from 'react-router-dom';

import riceStraw from '../components/images/123456.jpg';
import coconutShell from '../components/images/coconut.webp';
import goatPoop from '../components/images/goat.jpg';
import cottonStem from '../components/images/cottonstem.png';
import cowDung from '../components/images/cow.webp';
import sugarcaneStem from '../components/images/sugar.jpg';
import goatHair from '../components/images/hair.jpg';
import dryLeaf from '../components/images/leaf.jpg';
import wasteVegetables from '../components/images/veg.webp';
import wastePlant from '../components/images/corn.webp';
import eggShell from '../components/images/eggshell.jpg';
import cottonFlower from '../components/images/cottonflower.jpeg';

import UserNav from './UserNav';
import Footer from '../components/Footer';

function Product() {
  const products = [
    { name: 'Rice Straw', image: riceStraw, description: 'Wheat straw after the cultivation.' },
    { name: 'Coconut Shell', image: coconutShell, description: 'Coconut shell after the removal of coconut.' },
    { name: 'Goat Poop', image: goatPoop, description: 'Sell your goat waste for the best price.' },
    { name: 'Cotton Stem', image: cottonStem, description: 'Sell your waste cotton stem for the best price.' },
    { name: 'Cow Dung', image: cowDung, description: 'Sell your waste cow dung for the best rate.' },
    { name: 'Sugarcane Stem', image: sugarcaneStem, description: 'Sell your waste sugarcane stem for the best price.' },
    { name: 'Goat Hair', image: goatHair, description: 'Sell goat hair with us for the best price.' },
    { name: 'Dry Leaf', image: dryLeaf, description: 'Sell the dry leaf on our platform for the best price.' },
    { name: 'Waste Vegetables', image: wasteVegetables, description: 'Sell the damaged vegetables for the best price.' },
    { name: 'Waste Plant', image: wastePlant, description: 'Sell the damaged product with us for the best price.' },
    { name: 'Egg Shell', image: eggShell, description: 'Sell the waste egg shell with us for the best price.' },
    { name: 'Cotton Flower', image: cottonFlower, description: 'Sell your cotton flower after the removal of cotton.' }
  ];

  return (
    <>
      <UserNav />
      <div className='product-container'>
        <h2>Products</h2>
        <div className='product-grid'>
          {products.map((product, index) => (
            <div className="card" key={index}>
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <div className="details">
                <p>{product.description}</p>
                <p>Sell the product for the best price.</p>
              </div>
              <Link to={{ pathname: '/Sell', state: { wasteType: product.name } }}>
                <button className="book-now">Sell</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Product;




// import './Product.css';
// import React, { useState } from 'react';
// import {Link} from 'react-router-dom';

// // Sample images
// import riceStraw from './images/123456.jpg';
// import coconutShell from './images/coconut.webp';
// import goatPoop from './images/goat.jpg';
// import cottonStem from './images/stem.jpeg';
// import cowDung from './images/cow.webp';
// import sugarcaneStem from './images/sugar.jpg';
// import goatHair from './images/hair.jpg';
// import dryLeaf from './images/leaf.jpg';
// import wasteVegetables from './images/veg.webp';
// import wastePlant from './images/corn.webp';
// import eggShell from './images/eggshell.jpg';
// import cottonFlower from './images/cottoni.jpeg';
// import UserNav from '../UserNav';

// function Product() {
//   return (
//     <>
//     <UserNav/>
//     <div className='product-container'>
//       <h2>Products</h2>
//       <div className='product-grid'>
//         <div className="card">
//           <h3>Rice Straw</h3>
//           <img src={riceStraw} alt="Rice Straw" />
//           <div className="details">
//             <p>Wheat straw after the cultivation.</p>
//             <p>Sell the product for the best price.</p>
//           </div>
//           <Link to = '/Sell'><button className="book-now">Sell</button></Link>
//         </div>
//         <div className="card">
//           <h3>Coconut Shell</h3>
//           <img src={coconutShell} alt="Coconut Shell" />
//           <div className="details">
//             <p>Coconut shell after the removal of coconut. Sell the product for the best price.</p>
//           </div>
//           <Link to = '/Sell'><button className="book-now">Sell</button></Link>
//         </div>
//         <div className="card">
//           <h3>Goat Poop</h3>
//           <img src={goatPoop} alt="Goat Poop" />
//           <div className="details">
//             <p>Sell your goat waste for the best price.</p>
//           </div>
//           <Link to = '/Sell'><button className="book-now">Sell</button></Link>
//         </div>
//         <div className="card">
//           <h3>Cow Dung</h3>
//           <img src={cowDung} alt="Cotton Stem" />
//           <div className="details">
//             <p>Sell your waste cotton stem for the best price.</p>
//           </div>
//           <Link to = '/Sell'><button className="book-now">Sell</button></Link>
//         </div>
//         <div className="card">
//           <h3>Cotton Stem</h3>
//           <img src={cottonStem} alt="Cow Dung" />
//           <div className="details">
//             <p>Waste cow dung with us for the best rate.</p>
//           </div>
//           <Link to = '/Sell'><button className="book-now">Sell</button></Link>
//         </div>
//         <div className="card">
//           <h3>Sugarcane Stem</h3>
//           <img src={sugarcaneStem} alt="Sugarcane Stem" />
//           <div className="details">
//             <p>Sell your waste sugarcane stem for the best price.</p>
//           </div>
//           <Link to = '/Sell'><button className="book-now">Sell</button></Link>
//         </div>
//         <div className="card">
//           <h3>Goat Hair</h3>
//           <img src={goatHair} alt="Goat Hair" />
//           <div className="details">
//             <p>Sell goat hair with us for the best price.</p>
//           </div>
//           <Link to = '/Sell'><button className="book-now">Sell</button></Link>
//         </div>
//         <div className="card">
//           <h3>Cotton Flower</h3>
//           <img src={cottonFlower} alt="Cotton Flower" />
//           <div className="details">
//             <p>Sell your cotton shell after the removal of cotton.</p>
//           </div>
//           <Link to = '/Sell'><button className="book-now">Sell</button></Link>
//         </div>
//         <div className="card">
//           <h3>Dry Leaf</h3>
//           <img src={dryLeaf} alt="Dry Leaf" />
//           <div className="details">
//             <p>Sell the dry leaf on our platform for the best price.</p>
//           </div>
//           <Link to = '/Sell'><button className="book-now">Sell</button></Link>
//         </div>
//         <div className="card">
//           <h3>Waste Vegetables</h3>
//           <img src={wasteVegetables} alt="Waste Vegetables" />
//           <div className="details">
//             <p>Sell the damaged vegetables for the best price.</p>
//           </div>
//           <Link to = '/Sell'><button className="book-now">Sell</button></Link>
//         </div>
//         <div className="card">
//           <h3>Waste Plant</h3>
//           <img src={wastePlant} alt="Waste Plant" />
//           <div className="details">
//             <p>Sell the damaged product with us for the best price.</p>
//           </div>
//           <Link to = '/Sell'><button className="book-now">Sell</button></Link>
//         </div>
//         <div className="card">
//           <h3>Egg Shell</h3>
//           <img src={eggShell} alt="Egg Shell" />
//           <div className="details">
//             <p>Sell the waste egg shell with us for the best price.</p>
//           </div>
//           <Link to = '/Sell'><button className="book-now">Sell</button></Link>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Product;
