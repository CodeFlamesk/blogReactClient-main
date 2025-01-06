
import { useAutoAnimate } from "@formkit/auto-animate/react"
import "./custom-select.scss"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import ButtonRight from "components/Buttons/buttonRight/ButtonRight";
import { changeCategoryIdNews } from "store/DashboardReducer";

const CustomSelect = () => {

    const [block] = useAutoAnimate();
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const category = useSelector(store => store.dashboard.category) || [];
    const [state, setState] = useState("Quantum Computing");

    const onChangeState = (title, id) => {
        setState(title)
        setShow(false)
        dispatch(changeCategoryIdNews(id))
        
    }



    return (
        <div ref={block} className="select">
            <ButtonRight text={state} cb={() => setShow(prev => !prev)} />
            {
                show && <ul  className="select-content">
                                {
                                    category.map(({title, _id}) => {
                                        return (
                                            <li>
                                                <ButtonRight cb={() => onChangeState(title, _id)} text={title}/>
                                            </li>
                                        )
                                    })
                                }

                        </ul>
            }
        </div>
    )
}

export default CustomSelect