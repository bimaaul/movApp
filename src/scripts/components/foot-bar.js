import tmdbLogo from "../../image/tmdb.svg"

class FootBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container pb-1">
            <div class="row justify-content-center justify-content-sm-between align-items-sm-center">
                <a href="https://www.themoviedb.org/">
                    <img src="${tmdbLogo}" alt="tmdb tribute" height="18.08px" width="216px"/>
                </a>
                <p class="text-muted text-center my-2">© 2020 Bima Aulia, your future engineer</p>
            </div>
        </div>
        `;
    }
}

customElements.define("foot-bar", FootBar)