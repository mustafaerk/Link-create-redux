import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, message } from 'antd';

import ListItem from "../components/list/ListItem";
import SubmitButton from "../components/submitButton/SubmitButton";
import Filter from "../components/filter/Filter";

import { changeProductPoint, changePageIndex, changePageSize, deleteItemFromList } from "../redux/actions";

import "./List.css";

const List = () => {
    const dispatch = useDispatch()
    const { productList, filters } = useSelector(state => state.product);

    const [list, setList] = useState(productList || [])
    const handleSortList = () => {
        let newList = [...productList]
        if (filters.sortType === 'most') {
            newList = newList.sort(function (a, b) {
                return b.point - a.point;
            })
        }
        if (filters.sortType === 'less') {
            newList = newList.sort(function (a, b) {
                return a.point - b.point;
            })
        }
        const startIndex = (filters.pageIndex - 1) * filters.pageSize
        newList = newList.slice(startIndex, startIndex + filters.pageSize)
        setList(newList)
    }
    useEffect(() => {
        handleSortList();
    }, [filters, productList])


    const success = () => {
        message.success('Link deleted successfully', 10);
    };

    const handleDelete = (id) => {
        dispatch(deleteItemFromList({ id, callback: () => success() }))
    }


    const handleVoting = ({ id, change }) => {
        dispatch(changeProductPoint({ id, change }))
    }

    const handlePageIndexChange = pageIndex => {
        dispatch(changePageIndex({ index: pageIndex }))

    };
    const handlePageSizeChange = (_, size) => {
        dispatch(changePageSize({ size: size }))

    };

    const renderList = list.map(product =>
        <ListItem
            key={`product_${product.name}_${product.id}`}
            point={product.point}
            name={product.name}
            url={product.url}
            onDecreaseClick={() => handleVoting({ id: product.id, change: -1 })}
            onIncreaseClick={() => handleVoting({ id: product.id, change: 1 })}
            handleDelete={() => handleDelete(product.id)}
        />)
    return (
        <div className='list__wrapper'>
            <SubmitButton />
            <Filter />
            {renderList}
            {productList.length > 4 && < Pagination onChange={handlePageIndexChange} onShowSizeChange={handlePageSizeChange} showSizeChanger defaultCurrent={1} total={productList.length} pageSizeOptions={[5, 10, 15, 20]} />}
        </div>
    );
}

export default List;