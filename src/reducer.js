// will be able to refactor the adding new item functions by passing in an argument in the reducer
const addImage = () => {
  return {
    type: 1,
    imageLink: null,
    writeString: null,
    webLink: null
  }
}

const addWrite = () => {
  return {
    type: 2,
    imageLink: null,
    writeString: null,
    webLink: null
  }
}

const addLink = () => {
  return {
    type: 3,
    imageLink: null,
    writeString: null,
    webLink: null
  }
}

const makeDeepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

const initialState = {
  modules: [{
    type: 1,
    imageLink: [
      'link1',
      'link2',
      'link3',
      'link4',
    ],
    writeString: null,
    webLink: null
  }, {
    type: 2,
    imageLink: null,
    writeString: 'I wrote a sentence.',
    webLink: null
  }]
}

const reducer = (state = initialState, action) => {
  const newState = makeDeepCopy(state)
  console.log('made a copy of the initial state in the reducer', newState)

  switch (action.type) {
    case 'ADD_IMAGE':
      console.log('Added image module')
      // set the new state equal to the amended current state
      console.log('The resulting new state after reducer', newState)
      return newState
    case 'ADD_WRITE':
      console.log('Added write module')
      console.log('The resulting new state after reducer', newState)
      return newState
    case 'ADD_LINK':
      console.log('Added link module')
      console.log('The resulting new state after reducer', newState)
      return newState
    default:
      return newState
  }
}

export default reducer
