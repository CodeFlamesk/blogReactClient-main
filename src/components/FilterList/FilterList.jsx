
import "./filter-list.scss";




import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import useMediaQuery from "hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { changeCategoryIdNews } from "store/DashboardReducer";




const FilterList = () => {

    const category = useSelector(store => store.dashboard.category);
    const categoryId = useSelector(store => store.dashboard.categoryId);

    const query = useMediaQuery('(max-width:767.98px)');
    const dispatch = useDispatch();

    return (
        <div className="filter__body">
            <Swiper
                spaceBetween={18}
                slidesPerView={"auto"}
                speed={1000}
                >
                    <>
                        <SwiperSlide onClick={() => dispatch(changeCategoryIdNews(""))} style={{"width": query ? "161.66px" : "249.33px"}} className={`filter__trigger ${categoryId === "" && "_active"}`}>
                            All
                        </SwiperSlide>
                        {
                            category.map(({title, _id}, i) => {
                                return (
                                    <SwiperSlide onClick={() => dispatch(changeCategoryIdNews(_id))} key={i} style={{"width": query ? "161.66px" : "249.33px"}} className={`filter__trigger ${categoryId === _id && "_active"}`}>
                                        {title}
                                    </SwiperSlide>
                                )
                            })
                        }
                    </>
            </Swiper>
        </div>
    )
}

export default FilterList