import React from 'react'
// import Microlink from '@microlink/react'
import { ReactTinyLink } from 'react-tiny-link'

export default function RenderLink (props) {
  return (
    <ReactTinyLink
      cardSize='small'
      showGraphic='true'
      maxLine='2'
      minLine='1'
      url={props.link}
    />
  )
}
