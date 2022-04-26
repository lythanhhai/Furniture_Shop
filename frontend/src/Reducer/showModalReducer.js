const initial = {
    value: 0
}

const showModalReducer = (state= initial, action) => {
    switch(action.name)
    {
        case 'show':
            return {
                value: 1
            }
        case 'hide':
            return {
                value: 0
            }
        default:
            return state
    }
}

export default showModalReducer