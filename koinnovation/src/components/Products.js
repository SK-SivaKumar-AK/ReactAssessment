import React from 'react';


const Products = ({products , setProducts , setTotalFavorites}) => {

    
    
      const handleFavoriteToggle = (productId) => {
        
        const updatedProducts = products.map((product) => {
          if (product.id === productId) {
            const updatedProduct = { 
              ...product, 
              isFavorite: !product.isFavorite 
            };
            return updatedProduct;
          }
          return product;
        });
    
        
        setProducts(updatedProducts);
    
        
        const newTotalFavorites = updatedProducts.filter((product) => product.isFavorite).length;
        setTotalFavorites(newTotalFavorites);
      };
  return (
    <div>
        <div className="row">
            {products.map((product) => (
            <div className="col-lg-4 col-md-6 col-sm-2" key={product.id}>
                <div className="card mb-3" style={{ width: '100%' }}>
                <img src={product.image} className="card-img-top" alt={product.title} style={{width: '100%' , height: '400px'}}/>
                <div className="card-body">
                    <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <p className="text-secondary">Favourite</p>
                        <i
                        className={`bi ${product.isFavorite ? 'bi-heart-fill text-danger' : 'bi-heart'}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleFavoriteToggle(product.id)}
                        ></i>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <h5 className="card-title">{product.title}</h5>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <p className="text-primary">{product.price}</p>
                        <p className="text-danger">{product.stock}</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>  
    </div>
  )
}

export default Products