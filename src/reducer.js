function addImage (url) {
  return {
    type: 1,
    url: url
  }
}

function addText (text) {
  return {
    type: 2,
    text: text
  }
}

function addLink (link) {
  return {
    type: 3,
    link: link
  }
}

const makeDeepCopy = (state) => {
  return JSON.parse(JSON.stringify(state))
}

const initialState = {
  name: '',
  modules: []
}

const reducer = (state = initialState, action) => {
  const newState = makeDeepCopy(state)

  switch (action.type) {
    case 'ADD_IMAGE':
      newState.modules.push(addImage(action.link))
      // console.log('NEW GLOBAL STATE:', newState)
      return newState
    case 'ADD_TEXT':
      newState.modules.push(addText(action.text))
      // console.log('NEW GLOBAL STATE:', newState)
      return newState
    case 'ADD_LINK':
      newState.modules.push(addLink(action.link))
      // console.log('NEW GLOBAL STATE:', newState)
      return newState
    case 'UPDATE_NAME':
      newState.name = action.name
      // console.log('NEW GLOBAL STATE:', newState)
      return newState
    default:
      // console.log('DEFAULT GLOBAL STATE:', newState)
      return newState
  }
}

export default reducer
