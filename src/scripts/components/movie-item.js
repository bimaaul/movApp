import 'bootstrap/js/dist/modal';

const imageUrl = 'https://image.tmdb.org/t/p/original'

class MovieItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
      this.classList = "d-flex col-9 col-sm-3 p-3";
      this.innerHTML = `
        <style>
        a, a:hover {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
        .card {
            border-radius: 8px;
            box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
        }
        .card-img-top {
            height: 320px;
            border-radius: 8px 8px 0 0;
        }
        .card-img-top:hover {
            cursor: pointer;
        }
        </style>
        <div class="card">
            <a 
                data-toggle="tooltip"
                title="View detail"
                href="https://www.themoviedb.org/movie/${this._movie.id}"
                target="_blank"> 
                <img src="${imageUrl + this._movie.poster_path}" class="card-img-top" alt="Movie Image"></a
            >
            <div class="card-body pt-2">
                <a 
                    data-toggle="tooltip" 
                    title="View detail" 
                    class="font-weight-bold"
                    href="https://www.themoviedb.org/movie/${this._movie.id}"
                    target="_blank"
                    >${this._movie.title}</a
                > 
                <br/> <small class="text-muted">${this._movie.release_date}</small>
            </div>
        </div>`;
    }
}

customElements.define("movie-item", MovieItem)