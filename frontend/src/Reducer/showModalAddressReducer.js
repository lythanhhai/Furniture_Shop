const initial = {
    value: 0
}

const showModalAddressReducer = (state= initial, action) => {
    switch(action.type)
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

export default showModalAddressReducer