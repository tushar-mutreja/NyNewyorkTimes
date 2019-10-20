import { REQUEST_API,SUCCESS_API,FAILURE_API } from './Types';
import NetworkOps from './../Network/NetworkOps';

export const request_api = () => {
  return {
    type: REQUEST_API,
    payload: []
  }
}

export const successApi = (data)  => {
    return {
      type: SUCCESS_API,
      payload: data
    }
  }
  
  export const failureApi = (data) => {
    return {
      type: FAILURE_API,
      payload: data
    }
  }

  export const fetchingData = () => {

    return async (dispatch) => {
      try{
        dispatch(request_api());
        const result = await NetworkOps.getFetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=AqbSQ1ZIVGckVlPgiFS8G5bdUGB2rAJC');
              console.log('result is',result);  
              dispatch(successApi(result.data.results));
      }catch(error){
        dispatch(failureApi("something went wrong"));
      }       
    }
  }