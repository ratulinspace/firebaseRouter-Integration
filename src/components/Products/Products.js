import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {

    const { user } = useFirebase();

    return (
        <div>
            <h3>PRODUCTS overview</h3>
            <h4>Knock, knock ! Who is there?</h4>
            <h4>This is - {user ? user.displayName : "Unknown voooot"}</h4>
        </div>
    );
};

export default Products;