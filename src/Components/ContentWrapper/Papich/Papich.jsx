import { useContext, useEffect, useState } from "react"
import Button from "../../../Common/Button/Button"
import { ModalContext } from "../../../Context/ModalContext"
import { PhaseContext } from "../../../Context/PhaseContext"
import { UserDataContext } from "../../../Context/UserDataContext"
import papichLaugh from '../../../audio/papich.mp3'
import React from 'react'

import s from './Papich.module.css'

export default (props) => {
    const phase = useContext(PhaseContext)
    const data = useContext(UserDataContext)
    const modal = useContext(ModalContext)

    const [repeat, setRepeat] = useState(0)

    useEffect(() => {
        if(data.userData.prevPhase !== phase.phase){
            const papich = new Audio(papichLaugh)
            if(data.userData.papich[repeat] === 'трон' ){
                papich.play()
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'roflan', content: '0к птс мусор, ты просто бездарь, удали игру и никогда не заходи в неё больше, даун'})
            }else if (data.userData.papich[repeat] === 'дом'){
                papich.play()
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'roflan', content: 'Сломай себе компьютер сразу'})
            }
        }
    }, [data.userData.papich])

    return(
        <div className="papich">
            <h1>Что бы ты выбрал, что бы тебе вынесли трон или дом твой? При условии, что играешь на жизнь.</h1>
            <div className={s.papich_answers}>
                <Button nextPhase={'QUESTION VIDEO'} name={'papich'} text={'трон'} />
                <Button nextPhase={'QUESTION VIDEO'} name={'papich'} text={'дом'} />
            </div>
        </div>
    )

}