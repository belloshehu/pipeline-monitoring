import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande";
    background-color:black;
    padding: 0rem;
    width: 100%;
    overflow-x: hidden;
    margin: auto;
}
.btn{
    background-color: green;
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    color: white;
    transition: all 200ms ease-in-out;
}
.btn:hover{
    transform: scale(1.1)
}

#root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

`;
export default GlobalStyles;
