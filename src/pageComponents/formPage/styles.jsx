import styled from 'styled-components'


export const Container = styled.section`
width: 100vw;
background-repeat: no-repeat;
background-size: cover;

display: flex;
justify-content: center;
align-items: center;
z-index: 2;

.container-text{
z-index: 1;
color: #fff;
font-size: 5rem;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;


.text-2{
    font-size: 4.4rem;
}
@media (max-width: 1300px) {
translate: 0 18%;
margin: 5rem 0;
font-size: 4.3rem;
}

}

@media (max-width: 990px) { 
flex-direction: column;
justify-content: space-between;
picture{
    order: 3;
}
}


`

export const Image = styled.img`
    width: max-content;
    height: 90vh;
    translate: -5% 0.44%;
    
    @media (max-width: 1075px) {
    height: auto;
    width: 85vw;
    }

`