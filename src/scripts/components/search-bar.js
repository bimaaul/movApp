class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }
    
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .search-container {
                display: flex;
                justify-content: center;
                margin: auto;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 14px;
                border-radius: 8px;
                background-color: white;
            }

            .search-container > input {
                width: 75%;
                padding: 14px;
                border: 0;
                border-bottom: 1px solid #00AA13;
                font-weight: bold;
                font-family: 'Montserrat', sans-serif;
            }
            
            .search-container > input:focus {
                outline: 0;
                border-bottom: 2px solid #00AA13;
            }
            
            .search-container > input:focus::placeholder {
                font-weight: bold;
            }
            
            .search-container >  input::placeholder {
                color: #00AA13;
                font-weight: normal;
            }
            
            .search-container > button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 14px;
                background-color: #00AA13;
                color: white;
                border: 0;
                font-family: 'Montserrat', sans-serif;
                font-weight: bold;
                text-transform: uppercase;
                border-radius: 24px;
                letter-spacing: 2px;
                outline: none;
            }  

            .search-container > button:active {
                background-color: #3e8e41;
                transform: translateY(1px);
            }

            
            @media screen and (max-width: 550px){
                .search-container {
                    flex-direction: column;
                    position: static;
                    padding: 10px;
                }
            
                .search-container > input {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 12px;
                }
            
                .search-container > button {
                    width: 100%;
                    padding: 10px;
                }
            }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search movie" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent) ;
    }
}

customElements.define("search-bar", SearchBar)