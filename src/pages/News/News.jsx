import BlockHeaderItem from "components/BlockHeaderItem/BlockHeaderItem"

import Explore from "components/Explore/Explore"
import NewsBlock from "components/NewsBlock/NewsBlock"
import RightButton from "components/RightButton/RightButton"
import TitleMainBlock from "components/TitleMainBlock/TitleMainBlock"
import Visual from "components/Visual/Visual"


const News = () => {
    return (
        <>

            <TitleMainBlock title={"Today's Headlines: Stay"} labelSpan={"Informed"} text={"Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage."}/>
            <NewsBlock/>
            <BlockHeaderItem title={"Discover the World of Headlines"} label={"Welcome to Our News Hub"}>
                <RightButton text={"View All News"}/>
            </BlockHeaderItem>
            <Explore/>


            <BlockHeaderItem title={"Visual Insights for the Modern Viewer"} label={"Featured Videos"}>
                <RightButton text={"View All"}/>
            </BlockHeaderItem>

            <Visual/>


            
        </>
    )
}

export default News