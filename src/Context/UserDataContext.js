import { createContext } from "react";


function noop(){}

export const UserDataContext = createContext({
    userData: null,
    setUserData: noop,
    userSex: null
})