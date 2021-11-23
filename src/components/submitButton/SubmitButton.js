import React from 'react';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

import "./SubmitButton.css";

function SubmitButton() {
    const navigate = useNavigate();

    return (
        <div className='submit-button__wrapper'>
            <div onClick={() => navigate('/create')} className='submit-button__left'> <PlusSquareOutlined /></div>
            <div className='submit-button__right'> SUBMIT A LINK </div>
        </div>
    );
}

export default SubmitButton;