import React from 'react';
import { useDispatch } from 'react-redux';

import Strings from "../../constants/string";
import { changeSortFilter } from "../../redux/actions";
import "./Filter.css";

function Filter() {
    const dispatch = useDispatch()


    const handleChange = (e) => {
        dispatch(changeSortFilter({ type: e.target.value }))
    }

    return (
        <select className='filter__select' defaultValue='most' onChange={handleChange}>
            <option value="most">{Strings.mostVoted}</option>
            <option value="less">{Strings.lessVoted}</option>
        </select>

    );
}

export default Filter;