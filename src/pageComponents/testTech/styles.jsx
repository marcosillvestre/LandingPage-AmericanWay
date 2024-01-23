import styled from 'styled-components'

export const Container = styled.main`
`

export const DivButton = styled.div`
color: #fff;
font-weight: 600;
background-color:#8c52ff;

height: 6rem;
width: 50%;
font-size: 2rem;
display: flex;
border-radius: .8rem;
justify-content: center;
align-items: center;
@media (max-width: 750px) {
    height: ${props => props.button ? "6rem" : "3rem"};
    width: ${props => props.button ? "35%" : "50%"};
    font-size: ${props => props.button ? "1.9rem" : "2rem"};
    
        }
`

export const Main = styled.main`
display: flex;
justify-content: space-between;


article{
    margin: 8rem 0 auto 7rem;
    display: grid;
    gap: 2rem;
    font-size: 3.2rem;
    width: 70rem;
}
article > span {
    display: flex;
    gap: 1rem;
}
article > p {
    width: 100%;
}
article > h1 {
    font-size: 3.8rem;
}

.tech{
    z-index: 10;
    height: 90vh;
}


 @media (max-width: 750px) {
    flex-direction: column;
    article{
    margin: initial;
    width: 100vw;
    padding: 5rem 7rem  ;
    justify-content: center;
    font-size: 2.9rem;
        text-align: justify;


h1{
    text-align: center;
}
    }
article > span {
justify-content: center;
text-align: center;
}
.tech{
    z-index: 10;
    height: initial;
    }
        }




`