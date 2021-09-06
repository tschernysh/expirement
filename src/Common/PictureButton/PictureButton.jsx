import { useContext, useEffect, useState } from 'react'
import { PhaseContext } from '../../Context/PhaseContext'
import { UserDataContext } from '../../Context/UserDataContext'
import s from './PictureButton.module.css'
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
        <div onClick={() => {
            !data.userData[props.name][repeat] && data.setUserData({...data.userData, [props.name]: !repeat 
                                                                                                        ? [props.text, null ] 
                                                                                                        : [data.userData[props.name][0], props.text ]})
            phase.setPhaseFetch(true)
            setTimeout(() => {
                phase.setPhase(props.nextPhase)
            }, 3000)
        }} className={`${s.answer_picture} ${data.userData[props.name][repeat] === null
                                                ? null 
                                                : data.userData[props.name][repeat] === props.text 
                                                    ? s.active_choose 
                                                    : s.not_active_choose}`}>
            <div>{props.text}</div>
            <img draggable={false} src={props.image} alt="" />
        </div>
    )
}