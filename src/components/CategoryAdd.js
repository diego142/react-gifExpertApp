import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const CategoryAdd = ({ setCategories }) => {


    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target: { value } }) => {
        setInputValue(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories((catgrs) => [inputValue, ...catgrs]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
};