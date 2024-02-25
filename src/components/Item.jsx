import React from 'react';
import { ItemCount } from './ItemCount';
import '../styles/styles.css';

export const Item = ({ product }) => {
    return (
        <div className="max-w-xs mx-auto bg-gray-200 p-3 rounded-md shadow-md border-4 my-4 card">
            <img src={`../img/${product.img}`} alt={`Imagen de ${product.title}`} className='product-image' />
            <h2 className="text-xs font-bold mb-2">{product.title} </h2>
            <p className="text-xs font-bold xs-1">{product.description}</p>
            <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
            <span className="text-xl mb-2">Precio: ${product.price}</span>
            <ItemCount stock={product.stock} />
        </div>
    );
};
