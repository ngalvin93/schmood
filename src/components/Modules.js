import React from 'react'
import AddImages from './Image'
import Write from './Write'
import Link from './Link'

// use the spread operator to pass in props to avoid props.props in child components
// the components should be functional
function Modules (props) {
  if (props.type === 1) {
    return <AddImages {...props} />
  } else if (props.type === 2) {
    return <Write {...props} />
  } else {
    return <Link {...props} />
  }
}

export default Modules
