
import styled from 'styled-components';



export const Container = styled.section`
background-color: #007dff;
text-align: center;
padding: 15rem 0;

.container{
    padding: 0 15rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    height: max-content;
    flex-wrap: wrap;
}

.icon{
display: flex;
justify-content: center;
}
`
export const Image = styled.img`
height: max-content;
border-radius:  2.3rem;
width: max(20rem, 40rem);
border-radius: 3rem;

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

