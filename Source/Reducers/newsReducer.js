import { REQUEST_API,SUCCESS_API,FAILURE_API } from './../Actions/Types';

const initialState = {
    isFetching:false,
    data:[],
    error:null
};

export const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_API:
            return {
                ...state,
                isFetching:true
                
            };
            case SUCCESS_API:
            return {
                ...state,
                isFetching:false,
                data:action.payload
                
            };
            case FAILURE_API:
            return {
                ...state,
                error:action.payload,
                isFetching:false,
            };
        default:
            return state;
    }
}