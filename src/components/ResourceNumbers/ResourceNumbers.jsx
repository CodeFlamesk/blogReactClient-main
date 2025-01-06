
import Container from "components/Container/Container"
import "./resource-numbers.scss"
const ResourceNumbers = () => {
    return (
        <div className="main__states states">
       
            <Container>
            <div className="states__items">
                <div className="states__item block-number">
                    <div className="block-number__title text-anim _anim-items">
                        <p data-splitting="chars" >300 <span className="yellow">+</span></p>
                    </div>
                    <div className="block-number__text">
                        <p>Resources available</p>
                    </div>
                </div>
                <div className="states__item block-number ">
                    <div className="block-number__title text-anim _anim-items">
                        <p data-splitting="chars">12k<span className="yellow">+</span></p>
                    </div>
                    <div className="block-number__text">
                        <p>Total Downloads</p>
                    </div>
                </div>
                <div className="states__item block-number">
                    <div className="block-number__title text-anim _anim-items">
                        <p data-splitting="chars">10k<span className="yellow">+</span></p>
                    </div>
                    <div className="block-number__text">
                        <p>Active Users</p>
                    </div>
                </div>
                <div className="states__item block-number">
                    <div className="block-number__title text-anim _anim-items">
                        <p data-splitting="chars">100<span className="yellow">+</span></p>
                    </div>
                    <div className="block-number__text">
                        <p>Countries Accesses Our Content </p>
                    </div>
                </div>
            </div>

            </Container>
            
        
    </div>
    )
}

export default ResourceNumbers