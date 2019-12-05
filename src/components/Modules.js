import React from 'react'
import Image from './Image'
import Write from './Write'
import Link from './Link'

// use the spread operator to pass in props to avoid props.props in child components
function Modules (props) {
  if (props.type === 1) {
    return <Image props={props} />
  } else if (props.type === 2) {
    return <Write props={props} />
  } else {
    return <Link props={props} />
  }
}

export default Modules
