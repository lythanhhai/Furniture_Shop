const showModalProduct = () =>
{
    return(
        {
            type: 'show'
        }
    )
}
const hideModalProduct = () =>
{
    return(
        {
            type: 'hide'
        }
    )
}

const showModalUpdate = () =>
{
    return(
        {
            type: 'show_edit'
        }
    )
}

const hideModalUpdate = () =>
{
    return(
        {
            type: 'hide_edit'
        }
    )
}


export { showModalProduct, hideModalProduct, showModalUpdate, hideModalUpdate }