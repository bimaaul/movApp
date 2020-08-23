import "../components/search-bar.js"
import "../components/movie-list.js"
import DataSource from "../data/data-source.js"

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");

    const getName = () => {
        fetch(`https://api.themoviedb.org/3/list/7055666?api_key=cd58160308b8ac5f362e091de1eb09dd`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            renderName(responseJson.created_by);
        })
    };

    const renderName = (name) => {
        const welcome = document.querySelector("h1");
        welcome.innerText = `Welcome, ${name}!`
    }

    const onButtonSearchClicked = () => {
        if(searchElement.value) {
            DataSource.searchMovie(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
        }
    }

    const renderResult = results => {
        console.log(results);
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    }

    searchElement.clickEvent = onButtonSearchClicked;
    getName();
}

export default main;