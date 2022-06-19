const SignInAction = (admin, phone_number) => {
    return {
        type: "login",
        payload: {
            admin: admin,
            phone_number: phone_number, 
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

export { SignInAction, LogoutAction, ChangeAddress }