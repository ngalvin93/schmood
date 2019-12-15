import React from 'react'
import RenderImage from './RenderImage'
import RenderWrite from './RenderWrite'
import RenderLink from './RenderLink'

export default function Modules (props) {
  if (props.type === 1) {
    return <RenderImage {...props} />
  } else if (props.type === 2) {
    return <RenderWrite {...props} />
  } else {
    return <RenderLink {...props} />
  }
}
