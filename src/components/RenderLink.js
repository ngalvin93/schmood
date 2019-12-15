import React from 'react'
import Microlink from '@microlink/react'

export default function RenderLink (props) {
    console.log('link props', props)
    return (
        <Microlink url={props.link} size='large' media='image'/>
    )
}
