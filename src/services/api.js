import axios from 'axios'

//base da URL: https://api.themoviedb.org/3
// URL da API : /movie/now_playing?api_key=f33873317b34c843e1dff55f674ca510&language=pt-br 

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;