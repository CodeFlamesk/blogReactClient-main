
import useMediaQuery from "hooks/useMediaQuery";
import "./title-main-block.scss";
import Container from "components/Container/Container";

const TitleMainBlock = ({title, labelSpan, text}) => {
    
    const query = useMediaQuery('(max-width:767.98px)');

    return (
        <section className="main__news main-news">
            
                <Container>
                    <div className="main-news__body">
                        <div className="main-news__title title-80">
                            <h1 >{title} {query && <span id="mobile">{labelSpan}</span>} </h1>
                            <div className="main-news__sub-title title-80">
                                {
                                    !query &&  <h2 id="desctop"><span>{labelSpan}</span></h2>
                                }
                                <p className="title-80-text">{text}</p>
                            </div>
                        </div>
                    </div>

                </Container>
               
            
        </section>
    )
}

export default TitleMainBlock