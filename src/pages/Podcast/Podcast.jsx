import BlockHeaderItem from "components/BlockHeaderItem/BlockHeaderItem"

import PodcastEpizodes from "components/PodcastEpizodes/PodcastEpizodes"
import TitleMainBlock from "components/TitleMainBlock/TitleMainBlock"
import UnlockPodcast from "components/UnlockBlock/UnlockPodcast/UnlockPodcast"



const Podcast = () => {
    return (
        <>

            <TitleMainBlock title={"Unlock the World of Artificial Intelligence "} labelSpan={"through Podcasts"} text={"Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."}/>

            <UnlockPodcast/>
            <BlockHeaderItem title={"Latest Podcast Episodes"} label={"Stay Informed with Fresh Content"}/>

            <PodcastEpizodes/>
        
        </>
    )
}

export default Podcast