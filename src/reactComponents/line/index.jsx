import React from "react";
import slides from "../../services/reports";
import { ArrowLeft, ArrowRight, Container, Date, Star } from "./styles";

export const UncontrolledExample = () => {
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {

    }, [])

    console.log(slides.length)

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
        <Container>
            <div className="container">
                <button onClick={() => handlePrevious()}> <span> <ArrowLeft /></span> </button>


                <Date key={slides[index]?.name} slide={slides[index]}>

                    <div className="profile">

                        <div className="sub-profile">
                            <img src={slides[index]?.image} alt="" />
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

                </Date>


                <button onClick={() => handleNext()}> <span><ArrowRight /> </span></button>

            </div>
        </Container>
    );
}
