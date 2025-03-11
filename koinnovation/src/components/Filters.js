import React, { useState } from 'react';

const Filters = () => {
    const [price, setPrice] = useState({ start: 100, end: 500 });
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    
  const handleStartChange = (event) => {
    const newStartPrice = Number(event.target.value);
    if (newStartPrice <= price.end) {
      setPrice({ ...price, start: newStartPrice });
    }
  };

  
  const handleEndChange = (event) => {
    const newEndPrice = Number(event.target.value);
    if (newEndPrice >= price.start) {
      setPrice({ ...price, end: newEndPrice });
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  return (
    <div>
        
            <div className="d-flex justify-content-between">
                <h5>Filters</h5>
                <a href="#">Advance</a>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Prize
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <ul className="list-unstyled">
                        <li className="d-flex justify-content-between align-items-center mb-2">
                        <span>Nike</span>
                        <span><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></span>
                        </li>
                        <li className="d-flex justify-content-between align-items-center mb-2">
                        <span>Adidas</span>
                        <span><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></span>
                        </li>
                        <li className="d-flex justify-content-between align-items-center mb-2">
                        <span>Apple</span>
                        <span><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></span>
                        </li>
                        <li className="d-flex justify-content-between align-items-center mb-2">
                        <span>New Balance</span>
                        <span><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></span>
                        </li>
                        <li className="d-flex justify-content-between align-items-center mb-2">
                        <span>Puma</span>
                        <span><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></span>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwo" aria-expanded="true" aria-controls="collapseOne">
                    Brand
                    </button>
                </h2>
                <div id="collapsetwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="d-flex justify-content-between">
                            <input type="range" className="form-range" min="0"  max="1000" step="10" value={price.start} onChange={handleStartChange} style={{ zIndex: 2, position: 'relative' }} />
                            <input type="range" className="form-range" min="0" max="1000" step="10" value={price.end} onChange={handleEndChange} style={{ zIndex: 1, position: 'relative' }} />
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <input type="text" className="form-control" id="startPrice" value={price.start} readOnly />
                            <span className="mx-3">to</span>
                            <input type="text" className="form-control" id="endPrice" value={price.end} readOnly />
                        </div>
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree" aria-expanded="true" aria-controls="collapseOne">
                    Size
                    </button>
                </h2>
                <div id="collapsethree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <div className="btn" role="group" aria-label="Size selection">
                        {['XXS' , 'XS' , 'S', 'M', 'L' , 'XL' , 'XXL'].map((size) => (
                            <button key={size} type="button" className={`btn btn-outline-primary ms-4 mb-3 ${selectedSize === size ? 'active' : ''}`} onClick={() => handleSizeSelect(size)}> {size} </button>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapseOne">
                        Color
                        </button>
                    </h2>
                    <div id="collapsefour" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="d-flex gap-3">
                                {['Black', 'Blue', 'Green', 'Red', 'White'].map((color) => (
                                    <button
                                        key={color}
                                        type="button"
                                        className={`btn rounded-circle border-0 ${selectedColor === color ? 'shadow' : ''}`}
                                        onClick={() => handleColorSelect(color)}
                                        style={{
                                            backgroundColor: color.toLowerCase(),
                                            width: '10px',
                                            height: '20px',
                                            boxShadow: selectedColor === color ? '0 0 10px rgba(0,0,0,0.2)' : '',
                                        }} >
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Filters