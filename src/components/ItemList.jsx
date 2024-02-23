import React from 'react';
import { Item } from './Item';

export const ItemList = ({ products }) => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 gx-8">
                {products.map(prod => (
                    <div className="col" key={prod.id}>
                        <Item product={prod} />
                    </div>
                ))}
            </div>
        </div>
    );
};
