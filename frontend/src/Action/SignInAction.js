const SignInAction = (admin, phone_number, number_product) => {
    return {
        type: "login",
        payload: {
            admin: admin,
            phone_number: phone_number, 
            number_product: number_product
        }
    }
}
const LogoutAction = () => {
    return {
        type: "logout",
    }
}

const ChangeAddress = (address) => {
    return {
        type: "changeAddress",
        payload: {
            address: address
        }
    }
}

const NumberInCart = (number_product) => {
    return {
        type: "getNumberInCart",
        payload: {
            number_product: number_product
        }
    }
}

export { SignInAction, LogoutAction, ChangeAddress, NumberInCart}