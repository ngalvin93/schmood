import React from 'react'

export default function RenderImage (props) {
    console.log('image props', props)
    return (
        <div>
            <img className='image' src={props.url} width='100%' alt='blah'/>
        </div>
    )
}
