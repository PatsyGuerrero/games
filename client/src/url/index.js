import axios from 'axios';

const url = 'http://localhost:3001';

export const gamesAll = () => axios.get(`${url}/videogames`);
export const gamesAlldb = () => axios.get(`${url}/videogames/data`);
export const next = (page) => axios.get(`${url}/videogames?page=${page}`);
export const createPost = (newPost) => axios.post(`${url}/videogame`, newPost);
export const genresAll = () => axios.get(`${url}/genres`);
export const search = (name) => axios.get(`${url}/videogames?name=${name}`);
export const detalle = (idVideogame) => axios.get(`${url}/videogame/${idVideogame}`);
