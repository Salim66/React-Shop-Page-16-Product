
import React from 'react';

const Product = (data) => {
    return (
        <div className="col-md-3">
            <div className="card my-5">
                <img className="product_img" src={data.product.image} alt="" />
                <div className="card-body">
                    <h2>{data.product.name}</h2>
                    <p>{data.product.description.substring(0, 50) + "...."}</p>
                    <small>Price: {data.product.price}TK</small>
                </div>
            </div>
        </div>
    )
};

export default Product;
