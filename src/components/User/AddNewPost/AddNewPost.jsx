import RightButton from "components/RightButton/RightButton";
import Input from "components/forms/Input/Input"
import CustomSelect from "pages/Dashboard/DashboardItems/DashboardItemElements/CustomSelect/CustomSelect";

import "./add-new-post.scss"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import InputFile from "components/forms/InputFile/InputFile";
import dashboardAction from "action/dashboardAction";
import postAction from "action/postAction";



const AddNewPost = () => {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(dashboardAction.getCategory())
    }, [])

    const {id} = useSelector(store => store.user.user)
    const categoryId = useSelector(store => store.dashboard.categoryId);

    const [file, setFile] = useState([]);
    const [introduction, setIntroduction] = useState("");
    const [mainTitle, setMainTitle] = useState("")

    const [description, setDescription] = useState("");
    const [descriptionTag, setDescriptionTag] = useState("")

    const onSetDescription = (e) => setDescription(e.target.innerText);

    const contentEditableRef = useRef(null);

    const getContent = () => {
        if(contentEditableRef.current) {
            const contentText = contentEditableRef.current.innerText;
            const contentHtml = contentEditableRef.current.innerHTML;
            setDescription(contentHtml);
            setDescriptionTag(contentText)
        }
    }



    useEffect(() => {
        getContent();
    }, [description]);

    const uploadFile = (e) => setFile(e.target.files[0]);

    const onAddPost = () => {
        dispatch(postAction.addNewPosts(introduction, file, description, categoryId, mainTitle, descriptionTag, id))
    }

    const wrapSelectionWithTagStrong = (tag) => {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const selectedText = range.toString();
            const newElement = document.createElement(tag);
            newElement.textContent = selectedText;
            range.deleteContents();
            range.insertNode(newElement);
        }
    };
    
    return (
        
            <div className="form-upload-post">
                <Input holder={"Main title page"} value={mainTitle} setValue={setMainTitle} type={"text"}/>
                <Input holder={"Short description"} value={introduction} setValue={setIntroduction} type={"text"}/>

                <InputFile  setValue={uploadFile} text={"Upload file"} type={"file"} />

                <div  
                    id="contentEditable"
                    ref={contentEditableRef}
                    
                    onInput={onSetDescription} 
                    contentEditable 
                    className="textarea-news">

                </div>

                <RightButton type={"button"} text={"h3"} cb={e => wrapSelectionWithTagStrong("h3")}/>

                <CustomSelect/>

                <RightButton cb={() => onAddPost()} type={"submit"} text={"Add news"}/>
            </div>
    
    )
}

export default AddNewPost