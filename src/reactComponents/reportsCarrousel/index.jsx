import React from "react";
import slides from "../../services/reports";
import { ArrowLeft, ArrowRight, Carrousel, Container, Data, Star } from "./styles";

export const ReportsCarrousel = () => {
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {

    }, [])


    const handleNext = () => {
        if (index === slides.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const handlePrevious = () => {
        if (index < 1) {
            setIndex(7)
        } else {
            setIndex(index - 1)
        }
    }
    return (
        <Container id='carousel'>

            <h1>Nossos alunos</h1>

            <Carrousel className="container">
                <button onClick={() => handlePrevious()}>  <ArrowLeft /> </button>


                <Data
                    key={slides[index]?.name}
                >

                    <div className="profile">

                        <div className="sub-profile">
                            <img
                                src={slides[index]?.image}
                                alt={slides[index].alt}
                                loading='lazy'

                            />
                            <h2>{slides[index].name}</h2>
                        </div>

                        <span>
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </span>
                    </div>

                    <p>{slides[index].text}</p>

                </Data>


                <button onClick={() => handleNext()}> <ArrowRight /> </button>
            </Carrousel>

            <a href="/" className="know-more">
                Quero saber mais
            </a>

        </Container>
    );
}
