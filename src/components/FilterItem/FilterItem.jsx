import React from 'react'
import "./filter-item.scss";

import DataItem from 'components/DataItem/DataItem';
import { useDispatch } from 'react-redux';
import { changeActivePostId } from 'store/DashboardReducer';
import RightButtonLink from 'components/RightButton/RightButtonLink';



const FilterItem = ({
    _id,
    img,
    author,
    categoryId,
    mainTitle,
    introductionText,
    date, 
    share, 
    comments, 
    likes 
}) => {
    const dispatch = useDispatch();

    const dates = new Date(date);
    
    function getMonthName(month) {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[month];
    }

    
    const modifiedDateString = `${getMonthName(dates.getMonth())} ${dates.getDate()}, ${dates.getFullYear()}`;

    return (
        <div className="filter__item item-event">
            <div className="item-event__content">
                <div className="item-event__person person">
                    <div className="person__image">
                        <img loading="lazy" width="80" height="80" src={img} alt="user"/>
                    </div>
                    <div className="person__info text-anim _anim-items">
                        <div className="person__title">
                            <h3 data-splitting="chars">{author}</h3>
                        </div>
                        <div className="person__text">
                            <p data-splitting="chars">{categoryId}</p>
                        </div>
                    </div>
                </div>
                <div className="item-event__button">
                    <RightButtonLink text={"View Blog"}/>
                </div>
            </div>
            <div className="item-event__body">
                <div className="item-event__data text-anim _anim-items">
                    <p data-splitting="chars">{modifiedDateString}</p>
                </div>
                <div className="item-event__info info-block">
                    <div className="info-block__body">
                        <div className="info-block__title">
                            <h3>{mainTitle}</h3>
                        </div>
                        <div className="info-block__text">
                            <p>{introductionText}</p>
                        </div>
                    </div>
                    <div className="info-block__button">
                        <RightButtonLink link={true} to={"/blog"} cb={() => dispatch(changeActivePostId(_id))} text={"View Blog"}/>
                    </div>
                </div>
                <div className="item-event__data data-items">
                    <DataItem link={share} likes={likes} comment={Object.keys(comments).length}/> 
                </div>
            </div>
        </div>
)
}

export default FilterItem