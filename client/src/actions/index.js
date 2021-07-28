import * as url from '../url';

// export function getVideogames(page) {
//     return function(dispatch) {
//       return fetch("http://localhost:3001/videogames")
//         .then(response => response.json())
//         .then(json => {
//           dispatch({ type: "GET_GAMES", payload: json });
//         });
//     };
// }

export const getAll = (page) => async (dispatch) => {

    try{
        const {data} = await url.gamesAll();
        dispatch({type:'GAMES_ALL', payload: {data, page}});

    }catch(error){
        console.log(error.message);
    }
};

export const getAlldb = () => async (dispatch) => {
    try{
        const {data} = await url.gamesAlldb();
        dispatch({type:'GAMES_ALL_DB', payload: data});

    }catch(error){
        console.log(error.message);
    }
};

export const getAllGenres = () => async (dispatch) => {

    try{
        
        const {data} = await url.genresAll();
        dispatch({type:'GENRES_ALL', payload: data});

    }catch(error){
        console.log(error.message);
    }
};

export const createGame = (post) => async (dispatch) => {

    try{
        const {data} = await url.createPost(post);
        dispatch({type:'CREATE_GAME', payload: data});

    }catch(error){
        console.log(error);
    }
};

export const nextP = (page) => async (dispatch) => {
    try{
        const {data} = await url.next(page);
        dispatch({type:'GAMES_ALL', payload:{data, page}});
    }catch(error){
        console.log(error.message);
    }
};

// export const botonNext = (next, results, previous) => {
    
//    return {
//     type:'NEXT', payload: {next, previous, results}
//    }
// }

// export const botonPrev = (next,  previous,results) => {
    
//     return {
//      type:'PREVIOUS', payload: {next, previous ,results}
//     }
//  }

 export const filter = (value) => {
  
    return {
     type:'FILTER', payload:value
    }
 }

 export const buscar = (name) => async (dispatch) => {
    try{   
        const {data} = await url.search(name);
        dispatch({type:'BUSCAR', payload: data});

    }catch(error){
        console.log(error.message);
    }
};

// export const all = (value) => async (dispatch) => {
// //   console.log('all', value);
//     // return {
//     //  type:'ALL', payload:value
//     // }
//     try{
//         const {data} = await url.next(value);
//         dispatch({type:'ALL', payload:{data, value}});
//     }catch(error){
//         console.log(error.message);
//     }
//  };

export const all = (value)  => {
//   console.log('all', value);
    return {
     type:'ALL', payload:value
    }
  
 };

 export const orden = (value) => {
    // console.log('estoy en action', value);
    return {
     type:'ORDEN', payload: value
    }
 };

 export const user = (value) => {
  
    return {
     type:'USER', payload:value
    }
 };

 export const rate = (value) => {
//   console.log('estoy en action',value);
    return {
     type:'RATING', payload:value
    }
 };

//  export const gameDetalle = (idVideogame) => async (dispatch) => {

//     try{
//         const {data} = await url.detalle(idVideogame);
//         dispatch({type:'DETALLE_JUEGO', payload: data});

//     }catch(error){
//         console.log(error);
//     }

    
    export const gameDetalle = (idVideogame) => {

        console.log('estoy en action', idVideogame)
        return {
            type:'DETALLE_JUEGO', payload:idVideogame
           }
};