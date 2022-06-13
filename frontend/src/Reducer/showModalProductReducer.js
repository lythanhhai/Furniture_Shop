const initial = {
    value: 0,
    value_edit: 0
}

const showModalProductReducer = (state= initial, action) => {
    switch(action.type)
    {
        case 'show':
            return {
                ...initial,
                value: 1
            }
        case 'hide':
            return {
                ...initial,
                value: 0
            }
        case 'show_edit':
            return {
                ...initial,
                value_edit: 1
            }
        case 'hide_edit':
            return {
                ...initial,
                value_edit: 0
            }
        default:
            return state
    }
}

export default showModalProductReducer