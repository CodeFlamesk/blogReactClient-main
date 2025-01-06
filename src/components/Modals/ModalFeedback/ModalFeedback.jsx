import React from 'react'
import ModalsParent from '../ModalsParent/ModalsParent'
import Title24 from 'components/Title24/Title24';

const ModalFeedback = ({text, mainTitle, cb}) => {
    
    return (
        <ModalsParent cb={cb}>
            <div className="modals-thank-body">
                <Title24 text={mainTitle}/>
                <p>{text}</p> 
            </div>
        </ModalsParent>
    )
}

export default ModalFeedback