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
font-size: 4.4rem;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;

h1{
  width  : max-content;
}
@media (max-width: 1300px) {
translate: 0 18%;
margin: 5rem 0;
font-size: 3rem;

}

 @media (max-width: 768px) {
        margin: 10rem 0;
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
    width: 80rem;
    height: auto;
    translate: -10% 1.48%;
    @media (max-width: 990px) {
        translate: 4% 1.48%;
    max-height: 72rem;
    width: 80vw;
    }


`