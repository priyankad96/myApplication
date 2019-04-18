import {SET_USER_LIST} from "./types";

export const getUser=()=>{
    //debugger;
    return(dispatch,getState)=>{
      //debugger;
     return fetch('https://facebook.github.io/react-native/movies.json')
         .then((response) => response.json())
         .then((responseJson) => {
             return dispatch({
                 type:SET_USER_LIST,
                 payload:responseJson.movies

             });
             return Promise.resolve(true);
         })
         .catch((error) => {
             console.error(error);
             alert(error);
         });
    };

};