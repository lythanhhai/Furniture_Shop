const SignInAction = (admin, phone_number) => {
    return {
        type: "login",
        payload: {
            admin: admin,
            phone_number: phone_number
        }
    }
}
const LogoutAction = () => {
    return {
        type: "logout",
    }
}

export { SignInAction, LogoutAction }