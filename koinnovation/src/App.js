
import banner from './images/banner.jpg'
import card_1 from './images/card_1.jpg'
import card_2 from './images/card_2.jpg'
import card_4 from './images/card_4.jpg'
import card_5 from './images/card_5.jpg'
import card_6 from './images/card_6.jpg'

import Products from './components/Products'
import Filters from './components/Filters'
import Header from './components/Header'
import './App.css';
import React, { useState } from 'react';


function App() {

  
  const [totalFavorites, setTotalFavorites] = useState(0);

  const product = [
    {
      id: 1,
      image: card_1,
      title: "Shirt Soft Cotton",
      price: "SAR 40.00",
      stock: "12 Left",
      isFavorite: false,
      favoritesCount: 0,
    },
    {
      id: 2,
      image: card_2,
      title: "Jeans Slim Fit",
      price: "SAR 60.00",
      stock: "8 Left",
      isFavorite: false,
      favoritesCount: 0,
    },
    {
      id: 3,
      image: card_1,
      title: "Jacket Warm Fleece",
      price: "SAR 120.00",
      stock: "5 Left",
      isFavorite: false,
      favoritesCount: 0,
    },
    {
      id: 4,
      image: card_4,
      title: "Jacket Warm",
      price: "SAR 180.00",
      stock: "12 Left",
      isFavorite: false,
      favoritesCount: 0,
    },
    {
      id: 5,
      image: card_5,
      title: "Warm dress",
      price: "SAR 250.00",
      stock: "15 Left",
      isFavorite: false,
      favoritesCount: 0,
    },
    {
      id: 6,
      image: card_6,
      title: "Jeans Slim",
      price: "SAR 330.00",
      stock: "20 Left",
      isFavorite: false,
      favoritesCount: 0,
    }
    
  ];
  const [products, setProducts] = useState(product);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text)
    if (text === '') {
      setProducts(product);
    } else {
      const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(text.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  };
  
 

  return (
    <div className='p-1'>
      
      <Header searchQuery={searchQuery} handleSearch={handleSearch} totalFavorites={totalFavorites}/>
      <main>
        <section className="row">
          <div className="col-12">
            <img src={banner} alt="banner image" className="banner_image"/>
          </div>
        </section>
        <section className="row ps-5 pt-5">
            <div className="col-12 d-none d-md-block">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Clothes</li>
                </ol>
              </nav>
              <h4>64 Result for clothes</h4>
            </div>
            <div className="col-12 d-md-none">
              <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                  Filters
                </button>
              </p>
              <div>
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                  <div className="card card-body" style={{width: '300px'}}>
                    <Filters />
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className="row ps-5 pt-3">
              <div className="col-md-4 col-lg-3 d-none d-md-block"> 
                <Filters />
              </div>
            <div className="col-md-7 col-lg-8 col-10 ms-4">
              <Products products={products} setProducts={setProducts} setTotalFavorites={setTotalFavorites} />
            </div>

        </section>
      </main>

    </div>
  );
}

export default App;
