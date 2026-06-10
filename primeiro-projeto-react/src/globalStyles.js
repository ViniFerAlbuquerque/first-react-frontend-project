import { createGlobalStyle } from 'styled-components' 

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

@media (max-width: 539px) {
    body {
        background-color: #5b609e;
        background-color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
    }
}

* {
    font-family: 'Roboto', sans-serif;
    font-size: 29px;
}

h3 {
    color: #FFFFFF;
}
`
export default GlobalStyles