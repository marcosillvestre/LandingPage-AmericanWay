
import styled from 'styled-components';



export const Container = styled.main`
background-color: #007dff;
text-align: center;
padding: 15rem;

.container{
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
width: max(25rem, 50rem);

`

export const Main = styled.main`
display: flex;
flex-direction: column;
gap: 2rem;
color: #fff;
align-items: center;

h1{
    font-size: 5.8rem;
}
h2{
    font-size: 3.8rem;
    background-color: #f14477;
    padding: 0 3rem;

}
`

export const Icon = styled.div`

`