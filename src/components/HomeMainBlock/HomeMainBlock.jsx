
import BlockNumber from "../BlockNumber/BlockNumber";
import "./home-main-block.scss";
import TitleMain from "../TitleMain/TitleMain"


import mobileImg from  "./img/abstract-mobile.webp";
import mobileTablet from  "./img/abstract-small.webp";
import mobileDs from  "./img/abstract.webp";
import Users from "../Users/Users";
import RightButton from "../RightButton/RightButton";
import Title24 from "../Title24/Title24";


const data = [
	{
		clazz: "main-block__item",
		title: "300",
		text:"Resources available"
	},
	{
		clazz: " main-block__item",
		title: "12k",
		text:"Total Download"
	},
	{
		clazz: " main-block__item",
		title: "10k",
		text:"Active Users"
	},
]


const HomeMainBlock = () => {
    return (
            <section className="main__block main-block">
				<div className="main-block__container">
					<div className="main-block__left ">
						<div className="main-block__body" >
							<div className="main-block__header">
								<div className="main-block__label">
									<p>Your Journey to Tomorrow Begins Here</p>
								</div>
								<div className="main-block__title title-main ">
									<TitleMain title={"Explore the Frontiers of Artificial Intelligence"}/>
								</div>
							</div>
							<div className="main-block__text">
								<p>Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
							</div>
						</div>
						<div className="main-block__items">
							{
								data.map(item => {
									return (
										<BlockNumber key={item.title} {...item}/>
									)
								})
							}
						</div>
					</div>
					<div className="main-block__right main-right">
						<div className="main-right__image">
							<picture>
								<source media="(min-width:1300px )" srcSet={mobileDs} type="image/webp"/>
								<source media="(min-width:991.98px )" srcSet={mobileTablet} type="image/webp"/>
								<img src={mobileImg} alt="abstract"/>
							</picture>
						</div>
						<div className="main-right__body">
							<div className="main-right__users users">
								<Users/>
							</div>
							<div className="main-right__title">
								<Title24 text={"Explore 1000+ resources"}/> 
							</div>
							<div className="main-right__text">
								<p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
							</div>
							<div className="main-right__button">
								<RightButton text={"Explore Resources"}/>
							</div>
						</div>
					</div>
				</div>
			</section>
    )
}

export default HomeMainBlock