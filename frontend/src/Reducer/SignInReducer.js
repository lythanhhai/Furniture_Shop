const initial = {
    access: 1,
    isAdmin: 0,
    phone_number: 0,
    address: "",
    number_product: 0
}

const SignInReducer = (state= initial, action) => {
    switch(action.type)
    {
        case "login":
            if(action.payload.admin === 1)
            {
                return{
                    ...state,
                    access: 1,
                    isAdmin: 1,
                    phone_number: action.payload.phone_number,
                    
                }
            }
            else 
            {
                return{
                    ...state,
                    access: 1,
                    isAdmin: 0,
                    phone_number: action.payload.phone_number,
                    number_product: action.payload.number_product,
                }
            }
        case "logout":

            return{
                ...state,
                access: 0,
                isAdmin: 0,
                phone_number: 0,
                address: ""
            }

        case "changeAddress":

                return{
                    ...state,
                    address: action.payload.address
                }
    
        case "getNumberInCart":
             return{
                 ...state,
                number_product: action.payload.number_product
            }
    
        default:
            return state
    }
}

export default SignInReducer