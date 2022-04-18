import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {

    const { user } = useFirebase();

    return (
        <div>
            <h3>PRODUCTS overview</h3>
            <p>{user ? user.displayName : "Unknown voooot"}</p>
        </div>
    );
};

export default Products;