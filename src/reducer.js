const initialState = {
    a: 1
}

const makeDeepCopy = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

const reducer = (state = initialState, action) => {
    const newState = makeDeepCopy(state)
    console.log('NEW STATE:', newState)
}

export default reducer