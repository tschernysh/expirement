import { createContext } from "react";


function noop(){}

export const PhaseContext = createContext({
    setPhase: noop,
    phase: null,
    phaseFetch: null,
    setPhaseFetch: noop
})