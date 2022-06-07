const getIdProductAction = (id) => {
    return(
        {
            type: "get",
            payload: id
        }
    );
}

export default getIdProductAction