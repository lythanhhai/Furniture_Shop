const initial = {
    value: 0,
    check: 0
}

const showModalReducer = (state= initial, action) => {
    switch(action.type)
    {
        case 'show':
            return {
                value: 1,
                check: 1
            }
        case 'hide':
            return {
                value: 0,
                check: 0
            }
        default:
            return state
    }
}

export default showModalReducer