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
      return newState
    case 'ADD_TEXT':
      newState.modules.push(addText(action.text))
      return newState
    case 'ADD_LINK':
      newState.modules.push(addLink(action.link))
      return newState
    case 'UPDATE_NAME':
      newState.name = action.name
      return newState
    default:
      return newState
  }
}

export default reducer
