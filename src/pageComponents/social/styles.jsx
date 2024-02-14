
import styled from 'styled-components';



export const Container = styled.section`
background-color: #007dff;
text-align: center;
padding: 15rem 0;

.container{
    margin: 5rem auto;
    display: flex;
    justify-content: center;
    gap: 5rem;
    height: max-content;
    flex-wrap: wrap;
}

.icon{
display: flex;
justify-content: center;
}
`
export const Image = styled.div`
padding: 20rem;
width: 40rem;
border-radius: 3rem;
display: flex;
align-items: center;
justify-content: center;
transition: all.6s;
    &:hover{
        scale: 1.03;
    }
    @media (max-width: 990px){
    padding: 12rem;
        img{
            height: 20rem;
        }
}


`

export const Section = styled.section`
display: flex;
flex-direction: column;
color: #fff;
align-items: center;
gap: 2rem;

h1{
    font-size: 5.8rem;
    width: max-content;
}
h2{
    width: max-content;
    font-size: 3.8rem;
    background-color: #f14477;
    padding: 0 3rem;
    
}

@media (max-width: 990px){
    h2{
        width: 85%;

    }
}
`

