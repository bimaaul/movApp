const imageUrl = 'https://image.tmdb.org/t/p/original'

const list = () => {
    const getList = () => {
        fetch(`https://api.themoviedb.org/3/list/7055666?api_key=cd58160308b8ac5f362e091de1eb09dd`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.success) {
                showResponseMessage(responseJson.status_message);
            } else {
                renderMovies(responseJson.items);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        })
    };

    const showResponseMessage = status_message => {
        alert(status_message);
    };

    const renderMovies = (movies) => {
        const listMovieElement = document.querySelector("#movieList");
        listMovieElement.innerHTML = "";

        movies.forEach(movie => {
            listMovieElement.innerHTML += `
                <style>
                .movieItem {
                    border-radius: 24px;
                    box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
                    padding: 18px 36px;
                }
                .movieImg {
                    height: 450px;
                    border-radius: 16px;
                }
                
                @media (max-width: 575.98px) {
                    .movieImg {
                        height: 250px;
                        margin-left: 16px;  
                    }
                    .movieItem {
                        max-height: 286.4px;
                        padding-right: 4px;
                    }
                    .overview {
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical; 
                        overflow: hidden;
                    }
                }

                @media (min-width: 576px) and (max-width: 767.98px) { 
                    .movieImg {
                        height: 250px;
                    }
                    .overview {
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical; 
                        overflow: hidden;
                    }
                }

                @media (min-width: 768px) and (max-width: 991.98px) { 
                    .movieImg {
                        height: 300px;
                    }
                }

                @media (min-width: 992px) and (max-width: 1199.98px) { 
                    .movieImg {
                        height: 400px;
                    }
                 }
                </style>
                <div class="d-flex my-3">
                    <div class="row movieItem">
                        <div class="d-flex justify-content-center col-3 col-md-3 containerImg">
                            <img src="${imageUrl + movie.poster_path}" alt="poster path" class="movieImg">
                        </div>
                        <div class="col-9 col-md-9 pl-5">
                            <h2 class="font-weight-bold">${movie.name} (${movie.first_air_date.substring(0,4)})</h2>
                            <p class="overview">${movie.overview}</p>
                            <a href="https://www.netflix.com" target="_blank" class="btn btn-success">Continue Watching</a>
                        </div>
                    </div>
                </div>
            `;
        });
    };
    
    getList();
}

export default list;