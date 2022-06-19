const initial = {
    access: 1,
    isAdmin: 0,
    phone_number: 0,
    address: ""
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
    
        default:
            return state
    }
}

export default SignInReducer