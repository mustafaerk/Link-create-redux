import { ActionTypes } from "../../constants/actionTypes";

const intialState = {
    filters: {
        sortType: 'most',
        pageIndex: 1,
        pageSize: 10,
    },
    productList: [
        { id: 0, point: 5, name: "HACKER RANK", url: 'www.hackerrank.com' },
        { id: 1, point: 3, name: "github RANK", url: 'www.github.com' },
        { id: 2, point: 4, name: "github RANK", url: 'www.github.com' },
        { id: 3, point: 3, name: "github RANK", url: 'www.github.com' },
        { id: 4, point: 3, name: "github RANK", url: 'www.github.com' },
        { id: 5, point: 3, name: "github RANK", url: 'www.github.com' },
        { id: 6, point: 3, name: "github RANK", url: 'www.github.com' },
        { id: 7, point: 10, name: "Stackoverflow", url: 'www.stackoverflow.com' }],
};

export const productReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.VOTE_POINT_CHANGE:
            return { ...state, productList: payload };
        case ActionTypes.CHANGE_SORT_FILTER:
            return { ...state, filters: { ...state.filters, sortType: payload } };
        case ActionTypes.CHANGE_PAGE_SIZE_FILTER:
            return { ...state, filters: { ...state.filters, pageSize: payload } };
        case ActionTypes.CHANGE_PAGE_INDEX_FILTER:
            return { ...state, filters: { ...state.filters, pageIndex: payload } };
        case ActionTypes.CREATE_PRODUCT:
            return { ...state, productList: [...state.productList, payload] };
        default:
            return state;
    }
};

