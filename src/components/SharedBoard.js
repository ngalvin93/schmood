import React from 'react'
import { useParams } from 'react-router-dom'
import { findShareKey } from '../firebase-service'

export default function SharedBoard () {
    let { id } = useParams()
    console.log('result of finding the id',findShareKey(id))
    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}
