const initial = {
    id: -1
};

const getIdProductReducer = (state= initial, action) => {
    switch(action.type)
    {
        case "get":
            return {
                id: action.payload
            }
        default:
            return state
    }
}

export default getIdProductReducer