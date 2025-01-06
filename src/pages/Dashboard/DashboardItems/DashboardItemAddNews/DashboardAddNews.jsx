import React, { useEffect, useRef, useState } from 'react'
import Title from '../DashboardItemElements/Title/Title'
import { useDispatch, useSelector } from 'react-redux'
import dashboardAction from 'action/dashboardAction'


import "./news.scss"
import InputItem from '../DashboardItemElements/Input/InputItem'
import RightButton from 'components/RightButton/RightButton'
import CustomSelect from '../DashboardItemElements/CustomSelect/CustomSelect'

const DashboardAddNews = () => {

    const dispatch = useDispatch()

    const [description, setDescription] = useState("");
    const [files, setFiles] = useState([]);
    const [introduction, setIntroduction] = useState("");
    const [author, setAuthor] = useState("");
    const [mainTitle, setMainTitle] = useState("")
    const [descriptionTag, setDescriptionTag] = useState("")

    const onChangeMainTitle = (text) => setMainTitle(text);
    const onSetDescription = (e) => setDescription(e.target.innerText);
    const onChangeIntroduction = (text) => setIntroduction(text);
    const onChangeAuthor = (text) => setAuthor(text);

    useEffect(() => {
        dispatch(dashboardAction.getCategory())
    }, [])


    function onAddFiles(e) {
        e.preventDefault();
        const files =  [...e.target.files];
        setFiles(files);
    }

    const contentEditableRef = useRef(null);

    const getContent = () => {
        if(contentEditableRef.current) {
            const contentText = contentEditableRef.current.innerText;
            const contentHtml = contentEditableRef.current.innerHTML;
            setDescription(contentHtml);
            setDescriptionTag(contentText)
        }
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

    useEffect(() => {
        getContent();
    }, [description]);

    const categoryId = useSelector(store => store.dashboard.categoryId);

    const addPostsToSite = async  (intro, files, description, author, category, mainTitle, descriptionTag) => {
        await dashboardAction.addNewPosts(intro, files, description, author, category, mainTitle, descriptionTag)
    }


    //const [text, settext] = useState("")
    /*
    function speakText(text) {
        var utterance = new SpeechSynthesisUtterance(text);
        
        window.speechSynthesis.speak(utterance);
        const voices = speechSynthesis.getVoices()
        utterance.voice  = voices[1]
        console.log(voices)
    }
    */
    return (
        <div className=''>
            <Title title={"News "}/>

            <div className="category-form">
                <InputItem placeholder={"Main title page"} value={mainTitle} onChange={onChangeMainTitle} type={"text"}/>
                <InputItem placeholder={"Short description"} value={introduction} onChange={onChangeIntroduction} type={"text"}/>
                
                <InputItem placeholder={"Author news name"} value={author} onChange={onChangeAuthor} type={"text"}/>

                <input className='input-item' onChange={e => onAddFiles(e)} type="file" />

                <div  
                    id="contentEditable"
                    ref={contentEditableRef}
                    
                    onInput={onSetDescription} 
                    contentEditable 
                    className="textarea-news ">

                </div>
                <RightButton type={"button"} text={"h3"} cb={e => wrapSelectionWithTagStrong("h3")}/>
                <CustomSelect/>
               
                <RightButton cb={() => addPostsToSite(introduction, files, description, author, categoryId, mainTitle, descriptionTag)} type={"submit"} text={"Add news"}/>
               
            </div>

            
        </div>
    )
}

// <textarea value={text}  onChange={e => settext(e.target.value)} rows="4" cols="50"></textarea>
export default DashboardAddNews