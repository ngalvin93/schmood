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
  name: 'Honda',
  modules: [{
    type: 1,
    imageLink: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDTBr5hV7kZwopmh0A3M74m_gCuqirc9Y5f2hLj7NSA8mjDYw&s',
      'https://www.jdmaster.net/wp-content/uploads/2015/04/ek-99-00.jpg',
      'https://www.rhdperformance.co.uk/ekmps/shops/6ba62d/images/aerodynamics-carbon-type-r-style-rear-spoiler-for-honda-civic-ej-ek-ek9-96-00-13939-1-p.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_NrTABkz-7gx-s6FInjaH05VbDoqzlW9JiLa8ETPLp2jPNPqXnQ&s'
    ],
    writeString: null,
    webLink: null
  }, {
    type: 2,
    imageLink: null,
    writeString: 'When you give power to an executive you do not know who will be filling that position when the time of crisis comes.',
    webLink: null
  }]
}

const reducer = (state = initialState, action) => {
  const newState = makeDeepCopy(state)

  switch (action.type) {
    case 'ADD_IMAGE':
      newState.modules.push(addImage())
      console.log('added image module. new state: ', newState)
      return newState
    case 'ADD_WRITE':
      newState.modules.push(addWrite())
      console.log('added write module. new state: ', newState)
      return newState
    case 'ADD_LINK':
      newState.modules.push(addLink())
      console.log('added link module. new state: ', newState)
      return newState
    default:
      return newState
  }
}

export default reducer
