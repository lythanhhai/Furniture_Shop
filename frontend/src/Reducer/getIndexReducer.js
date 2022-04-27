const initial = {
    index: -1
}

const getIndexReducer = (state= initial, action) => {
    switch(action.type)
    {
        case "get":
            return{
                ...state,
                index: action.payload
            }
        default:
            return state
    }
}

export default getIndexReducer