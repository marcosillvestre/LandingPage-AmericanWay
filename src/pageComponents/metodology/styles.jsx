import styled from 'styled-components'

export const Container = styled.main`
background-color: #007dff;
padding: 10rem 0;

display: flex;
flex-direction: column;
justify-content: center; 
align-items: center; 

.nav-boxes{
width: 100vw;
padding: 10rem 85rem;
display: grid;
gap: 4rem;
grid-template-columns: 
repeat(auto-fit, minmax(200px, 3fr));

    span{
font-size: .8em;
background-color: #f5f5f5;
padding: 5rem 3rem;
text-align: center;
border-radius: 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
font-size: 1.1rem;
hr{
    width: 80%;
}
    }

}
@media (max-width: 750px) {
.nav-boxes{
gap: 1rem;
    width: unset;
    padding: 0 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(147px, 3fr));
span{
padding: 2rem 1rem;
img{
    width: 18em;
    height: 15em;
}
}
}
}


`
export const Image = styled.img`
z-index: 100;
translate: 0rem -7rem;
height: auto;
`
export const Hearths = styled.img`
z-index: 100;
height: 100vh;
position: absolute;
translate: 8rem 0;
`

export const Main = styled.main`
justify-content: center;

div{
    display: grid;
    text-align: center;
    gap: 4rem;
    z-index: 1000;
    border-radius: 2rem;
    padding: 5rem 60rem;
    color: #fff;
    font-size: 3rem;
}
div span h1 {
    font-size: 3em;
}
div span h2 {
    font-size: 1.8em;
    text-align: center;

}

@media (max-width: 750px) {
div{
    text-align: justify;
    font-size: 2.4rem;
}

}

`