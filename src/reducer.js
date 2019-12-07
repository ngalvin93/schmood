// will be able to refactor the adding new item functions by passing in an argument in the reducer
function addImage () {
  return {
    type: 1,
    imageLink: null
    // writeString: null,
    // webLink: null
  }
}

function addWrite () {
  return {
    type: 2,
    // imageLink: null,
    writeString: null
    // webLink: null
  }
}

function addLink () {
  return {
    type: 3,
    // imageLink: null,
    // writeString: null,
    webLink: null
  }
}

const makeDeepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

const initialState = {
  name: 'Mood name',
  modules: [{
    type: 1,
    imageLink: [
      'https://luna1.co/8ff405.jpg',
      'https://www.jdmaster.net/wp-content/uploads/2015/04/ek-99-00.jpg',
      'https://newyork.doverstreetmarket.com/media/cache/stream/rc/LQGjgbBY/uploads/2019-11/dsmny-salefw19-nowon-1.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_NrTABkz-7gx-s6FInjaH05VbDoqzlW9JiLa8ETPLp2jPNPqXnQ&s'
    ]
  }, {
    type: 2,
    writeString: 'When you give power to an executive you do not know who will be filling that position when the time of crisis comes.'
  }]
}

const reducer = (state = initialState, action) => {
  const newState = makeDeepCopy(state)

  switch (action.type) {
    case 'ADD_IMAGE':
      newState.modules.push(addImage())
      console.log('adding this img link to the state: ', action.link)
      return newState
    case 'ADD_WRITE':
      newState.modules.push(addWrite())
      console.log('added write module. new state: ', newState)
      return newState
    case 'ADD_LINK':
      newState.modules.push(addLink())
      console.log('added link module. new state: ', newState)
      return newState
    case 'UPDATE_NAME':
      newState.name = action.name
      return newState
    default:
      return newState
  }
}

export default reducer
