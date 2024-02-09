import styled from 'styled-components'

export const Container = styled.main`

background-color: #007dff;
padding: 15rem  0;
background-repeat: no-repeat;
background-size: cover;
@media (max-width: 990px) {
    background-position: left;
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
    width: max-content;
    article{
        width: 70rem;
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

    width: 100%;
    padding: 5rem 7rem ;
    
    .container-article{
        display: flex;
        align-items: center;

        margin: 10rem auto;

    article{
        text-align: justify;
    }
}
    img{
        display: block;
        width: 80vw;
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
width: 80%;
margin: auto;

text-decoration: none;
font-weight: bolder;

&:visited{
    color: #fff;
}

&:hover{
    transition: .1s ease-in-out ;
    border: .6rem solid #f5f5f5;
    font-size: 3.4rem;
    background-color: #efab00;
}

@media (max-width: 750px) {
    font-size: 2.4rem;
    .know-more{
        padding: 3rem 5rem ;
    }
}

`