import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

function ProductCard({imageSrc,title, price , onClick}: any) {
    return (
        <div>
            <div className="product" onClick={onClick}>
                <img src={imageSrc} alt="" title={title} />
                <div className="product-title">
                    <h1>{title}</h1>
                </div>
                <div className="price">{price}</div>
                <button type="button" className="add-to-cart"><FaShoppingCart size={20} color="white"/> Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard;
