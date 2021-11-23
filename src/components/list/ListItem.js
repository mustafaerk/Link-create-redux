import React, { useState } from 'react';
import { Card, Row, Col } from 'antd';
import { UpCircleOutlined, DownCircleOutlined, DeleteOutlined } from '@ant-design/icons'

import Strings from "../../constants/string";
import "./ListItem.css";

const ListItem = ({ point, name, url, onDecreaseClick, onIncreaseClick, handleDelete }) => {
    const [showDeleteButton, setShowDeleteButton] = useState(false)


    return (
        <Card onMouseEnter={() => setShowDeleteButton(true)} onMouseLeave={() => setShowDeleteButton(false)} className='card-wrapper' bodyStyle={{
            display: 'flex',
            width: '100%',
            position: 'relative',
            padding: 0
        }}>
            {showDeleteButton && <DeleteOutlined onClick={handleDelete} className='card__delete-button' />}
            <Row className='card-left'>
                <Col className='card-point'>{point}</Col>
                <Col>{Strings.point} </Col>
            </Row>
            <Row className='card-right'>
                <Row className='card-right__title'> {name}</Row>
                <Row className='card-right__subTitle'> {url} </Row>
                <Row className='card-right-vote__wrapper'>
                    <Col className='card-right__subTitle card-right-vote__button' onClick={onIncreaseClick}><UpCircleOutlined /> {Strings.upVote} </Col>
                    <Col className='card-right__subTitle card-right-vote__button' onClick={onDecreaseClick}><DownCircleOutlined /> {Strings.downVote}</Col>
                </Row>

            </Row>
        </Card>
    );
}

export default ListItem;