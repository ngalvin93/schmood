// will be able to refactor the adding new item functions by passing in an argument in the reducer
function addImage () {
  return {
    type: 1,
    imageLink: null,
    writeString: null,
    webLink: null
  }
}

function addWrite () {
  return {
    type: 2,
    imageLink: null,
    writeString: null,
    webLink: null
  }
}

function addLink () {
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

  switch (action.type) {
    case 'ADD_IMAGE':
      newState.modules.push(addImage())
      console.log('added new image module: ', newState)
      return newState
    case 'ADD_WRITE':
      newState.modules.push(addWrite())
      console.log('added new write module: ', newState)
      return newState
    case 'ADD_LINK':
      newState.modules.push(addLink())
      console.log('added new link module: ', newState)
      return newState
    default:
      return newState
  }
}

export default reducer
