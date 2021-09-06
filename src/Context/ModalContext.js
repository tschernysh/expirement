import { createContext } from "react";


function noop(){}

export const ModalContext = createContext({
    setModalVisibility: noop,
    modalVisibility: false,
    modalContent: null
})