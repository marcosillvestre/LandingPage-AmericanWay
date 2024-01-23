import styled from 'styled-components';


export const Container = styled.main`
text-align: center;
padding: 5rem 10rem;
font-size: 4rem;

h1 {
    font-size: 2.8em;
}
span{
display: grid;
grid-template-columns: 
repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
margin: 5rem 0;
}

@media (max-width: 750px) {
    font-size: 2.4rem;
span{
    justify-content: center;
}
}
`
export const MapContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;

background-color: #dfdfdf;
gap: 3.5rem;

padding: 3rem 1.5rem;
border-radius: 2rem;
div{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    iframe {
    width: 100%;
    height: 45rem;
    border-radius: 2rem;
    border: none;
    }
}
p{
    font-size: 3rem;
}

`

export const ButtonLink = styled.a`
border: none;
background: none;
border-radius: 2rem;

font-weight: bold;
font-size: 3rem;
margin: auto;
padding: 1rem 0;
width: 80%;
height: 7.5rem;
color: #fff;
background-color: #1c33cf;
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;

&:visited{
    color: #fff;
}
`

