import React from 'react';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { useNavigate } from "react-router-dom";


import { createNewLink } from "../redux/actions";

import CreateForm from "../components/createForm/CreateForm";

import "./CreateLink.css";

function CreateLink() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const success = () => {
        message.success('Link deleted successfully', 5);
        setTimeout(() => {
            navigate('/')
        }, 2000);
    };

    const handleSubmitNewLink = ({ name, url }) => {
        dispatch(createNewLink({ name, url, callback: () => success() }))
    }
    return (
        <div className='create-form__wrapper'>
            <CreateForm onSuccess={handleSubmitNewLink} />
        </div>
    );
}

export default CreateLink;