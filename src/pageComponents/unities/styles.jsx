import styled from 'styled-components';


export const Container = styled.main`
text-align: center;
padding: 10rem;
h1 {
    font-size: 8vh;
}
span{
display: grid;
grid-template-columns: 
repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;

}

@media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;

}
`
export const MapContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;

background-color: #dfdfdf;
gap: 6.5rem;

padding: 5rem;
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

padding: 1rem 2rem;
height: 10rem;
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

