const API_KEY = 'cd58160308b8ac5f362e091de1eb09dd';
const baseURL = 'https://api.themoviedb.org/3';

class DataSource {
    static searchMovie(keyword) {
        return fetch(`${baseURL}/search/movie?api_key=${API_KEY}&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.total_results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} not found`);
            }
        })
    }
}

export default DataSource