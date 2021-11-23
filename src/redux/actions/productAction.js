import { ActionTypes } from "../../constants/actionTypes";


export const changeProductPoint = ({ id, change }) => async (dispatch, getState) => {
    let { productList } = getState().product
    const productIndex = productList.findIndex(product => product.id === id)
    productList[productIndex].point += change
    dispatch({
        type: ActionTypes.VOTE_POINT_CHANGE,
        payload: productList
    })
}

export const deleteItemFromList = ({ id, callback }) => async (dispatch, getState) => {
    let { productList } = getState().product
    const newList = productList.filter(product => product.id !== id)
    await dispatch({
        type: ActionTypes.VOTE_POINT_CHANGE,
        payload: newList
    })
    callback();
}

export const changeSortFilter = ({ type }) => async (dispatch, getState) => {
    dispatch({
        type: ActionTypes.CHANGE_SORT_FILTER,
        payload: type
    })
}

export const changePageIndex = ({ index }) => async (dispatch, getState) => {
    dispatch({
        type: ActionTypes.CHANGE_PAGE_INDEX_FILTER,
        payload: index
    })

}

export const changePageSize = ({ size }) => async (dispatch, getState) => {
    dispatch({
        type: ActionTypes.CHANGE_PAGE_SIZE_FILTER,
        payload: size
    })
}


export const createNewLink = ({ name, url, callback }) => async (dispatch, getState) => {
    const newLink = { id: name, point: 0, name: name, url: url }
    await dispatch({
        type: ActionTypes.CREATE_PRODUCT,
        payload: newLink
    })
    callback();
}

