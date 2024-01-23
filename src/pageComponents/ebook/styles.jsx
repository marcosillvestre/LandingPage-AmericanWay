import styled from 'styled-components'

export const Container = styled.main`

background-color: #007dff;
padding: 5rem  0;
height: 110vh;
background-repeat: no-repeat;
background-size: cover;
@media (max-width: 990px) {
    background-position: left;
}


`


export const Section = styled.section`
text-align: center;
color: #fff;
font-size: 3rem;

h1 {
    font-size: 2em;
}
h4{
    font-size: 1em;
}

.container-article{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    font-size: 3.4rem;
    width: fit-content;
    margin: 15rem 0 0 10rem;

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
    
    .container-article{
        display: flex;
        flex-direction: column;
        align-items: center;

        position: initial;
        margin: auto;


    article{
        padding: 5rem 7rem  ;
        text-align: justify;
    }
}
    img{
        display: block;
    }

}


`
export const DownloadEbook = styled.div`
background-color: #efab00;
font-size: 2em;
padding: 4rem 5rem;
border-radius: 2rem;
a{
color: #fff;
line-height: 100%;
width: 100%;
text-decoration: none;
font-weight: bolder;
}

&:visited{
    color: #fff;
}

@media (max-width: 750px) {
    font-size: 2.4rem;
    .know-more{
        padding: 3rem 6rem ;
    }
}

`