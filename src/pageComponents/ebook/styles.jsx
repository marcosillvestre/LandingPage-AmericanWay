import styled from 'styled-components'

export const Container = styled.main`

background-color: #007dff;
padding: 10rem 0 33rem  0rem;
background-repeat: no-repeat;
background-size: cover;

@media (max-width: 990px) {
    background-position: left;
    padding: 15rem  5rem;

}

`


export const Section = styled.section`
text-align: center;
color: #fff;

h1 {
    font-size: 5.8rem;
}
h4{
    font-size: 3.8rem;
}
p{
    font-size: 3rem;
}

.container-article{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    font-size: 3.4rem;
    width: 100%;
    margin: 15rem 0 0 10rem;
    width: 80rem;
    article{
        text-align: justify;
    }
}
img{
    display: none;
}

@media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    
    .container-article{
        width: 100%;
        display: flex;
        align-items: center;
        margin: 0 auto;
        padding: 10rem 0;

    article{

        text-align: center;
        text-align: justify;
        width: 100%;
    }
}
    img{
        display: block;
        width: 70vw;
    }

}


`
export const DownloadEbook = styled.a`
border-radius: 2rem;
border: .7rem solid #efab00;

font-size: 3rem;

background-color: #efab00;
padding: 2rem 0 ;

color: #fff;
line-height: 100%;
width: 100%;
margin: auto;

text-decoration: none;
font-weight: bolder;

&:visited{
    color: #fff;
}

&:hover{
    transition: .1s ease-in-out ;
    font-size: 3.4rem;
}

@media (max-width: 990px) {
    font-size: 2.4rem;
    .know-more{
        padding: 3rem 5rem ;
    }
}

`