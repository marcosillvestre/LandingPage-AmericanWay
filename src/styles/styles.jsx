import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

html{
    font-size: 52.5%;
     @media (max-width: 1255px){
        /* font-size: 52.5%; */
        font-size: 40.5%;
    } 
    @media (max-width: 750px){
        font-size: 30.5%;
    }
    @media (max-width: 375px){
        font-size: 20%;
    } 
}

`


