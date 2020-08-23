class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            .navbar {
                box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
            }
            .playlist:active {
                transform: translateY(2px);
            }
        </style>
        <nav class="navbar fixed-top navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="/">MovApp</a>
                <a class="text-success playlist" href="/playlist.html">
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-bookmarks-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12l-5-3-5 3V4z"/>
                        <path d="M14 14l-1-.6V2a1 1 0 0 0-1-1H4.268A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v12z"/>
                    </svg>
                </a>
            </div>
        </nav>
        `;
    }
}

customElements.define("app-bar", AppBar)