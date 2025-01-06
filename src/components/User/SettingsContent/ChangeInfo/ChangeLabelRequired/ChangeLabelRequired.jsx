import Title24 from 'components/Title24/Title24'
import React from 'react'

import "./label-required.scss"

const ChangeLabelRequired = () => {
    return (
        <div className='required-verify'>
            <Title24 text={"You have not verified your email address"}/>
            <p>Go to your email address to follow the link and verify your account. After completing registration, you will be able to use all functions of the site.</p>
        </div>
    )
}

export default ChangeLabelRequired