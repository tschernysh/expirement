import { useContext, useEffect, useRef, useState } from 'react'
import { PhaseContext } from '../../Context/PhaseContext'
import { UserDataContext } from '../../Context/UserDataContext'
import s from './Button.module.css'
import React from 'react'


export default (props) => {
    const data = useContext(UserDataContext)
    const phase = useContext(PhaseContext)

    const [repeat, setRepeat] = useState(0)

    useEffect(() => {
        if(data.userData.prevPhase === phase.phase){
            data.setUserData({...data.userData, [props.name]: [data.userData[props.name][0], null ] })
            setRepeat(1)
        }
    }, [])

    return(
        <div className={`${s.answer_item} ${data.userData[props.name][repeat] === null 
                ? null 
                : data.userData[props.name][repeat] === props.text 
                    ? s.active_choose 
                    : s.not_active_choose}`}>
            <input checked={data.userData[props.name][repeat] === props.text} 
                    disabled={data.userData[props.name][repeat]} type="radio" name={props.name} id={props.text} />
            <label  onClick={() => !data.userData[props.name][repeat] && (
                data.setUserData({...data.userData, [props.name]: !repeat ? [props.text, null ] : [data.userData[props.name][0], props.text ] }),
                phase.setPhaseFetch(true),
                setTimeout(() => {
                    phase.setPhase(props.nextPhase)
                }, 3000)
            )} name={props.name} htmlFor={props.text}>{props.text}</label>
        </div>
    )
}