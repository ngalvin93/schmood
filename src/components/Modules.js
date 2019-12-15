import React from 'react'
import Image from './Image'
import Write from './Write'
import Link from './Link'

// use the spread operator to pass in props to avoid props.props in child components
// the components should be functional
export default function Modules (props) {
  console.log('Modules props: ', props)
  if (props.type === 1) {
    return <Image {...props} />
  } else if (props.type === 2) {
    return <Write {...props} />
  } else {
    return <Link {...props} />
  }
}
