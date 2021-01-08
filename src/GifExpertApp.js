import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku']);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <CategoryAdd setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((category) => 
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>
        </>
    );
};

export default GifExpertApp;