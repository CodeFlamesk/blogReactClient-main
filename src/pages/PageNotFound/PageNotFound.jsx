
import RightButtonLink from "components/RightButton/RightButtonLink"
import "./page-not-found.scss"
import image from "assets/404/404.png"
import TitleMain from "components/TitleMain/TitleMain"

import Container from "components/Container/Container"

import Title40 from "components/Title40/Title40"

const PageNotFound = () => {
    return (
        <Container>
            <div className="not-found__body">
                <div className="not-found__content">
                    <TitleMain title={"Page Not Found"}/> 
                    <div className="">
                        <RightButtonLink to="/" text={"Go to Home page"}/>
                    </div>
                </div>
                <span className="not-found-404">404</span>
                
                <Title40 title={"Oops... page not found"}/>
                
                <div className="button-page-not">
                    <RightButtonLink to="/" text={"Go to Home page"}/>
                </div>
            </div>
        </Container>
    )
}

export default PageNotFound