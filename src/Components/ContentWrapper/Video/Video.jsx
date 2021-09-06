import { useContext, useEffect, useState } from "react"
import Button from "../../../Common/Button/Button"
import { ModalContext } from "../../../Context/ModalContext"
import { PhaseContext } from "../../../Context/PhaseContext"
import { UserDataContext } from "../../../Context/UserDataContext"
import React from 'react'


import Dzhisus from '../../../video/DZHIZUS.webm'
import Pm from '../../../video/PM.webm'

import s from './Video.module.css'

export default () => {
    const data = useContext(UserDataContext)
    const modal = useContext(ModalContext)
    const phase = useContext(PhaseContext)

    const [hoverVideo, setHoverVideo] = useState(false)

    
    const [repeat, setRepeat] = useState(0)

    useEffect(() => {
        if(data.userData.prevPhase !== phase.phase){
            if(data.userData.video[repeat] === 'да' ){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'nya', content: 'Ладно, первый вопрос был слишком изи'})
            }else if (data.userData.video[repeat] === 'нет'){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'angry', content: 'Походу ты глубоко верующий человек'})
            }
        }else{
            setRepeat(1)
            if(data.userData.video[0] === 'да' && data.userData.video[repeat] === 'нет' ){
                modal.setModalVisibility(true)
                modal.setModalContent({content: 'Замучала совесть ?'})
            }else if (data.userData.video[0] === 'нет' && data.userData.video[repeat] === 'да' ){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'angry', content: 'Ладно хоть дошло...'})
            }else if (data.userData.video[0] === data.userData.video[repeat] ){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'angry', content: 'Зачем было переигрывать...'})
            }
        }
    }, [data.userData.video])
    
    useEffect(() => {
        if(data.userData.prevPhase === phase.phase){
            modal.setModalVisibility(true)
            modal.setModalContent({content: `${data.userData.fakeName}, что-то забыл здесь ?`})
        }
    }, [phase.phase])


    return(
        <div className={s.video}>
            {(hoverVideo && !data.userData.video[repeat]) && <video autoPlay src={hoverVideo === 'Джизус' ? Dzhisus : Pm}></video>}
            <h1>
                {data.userData.fakeName}, выбери клип по нраву
            </h1>
            <small>
                ( Наведи на вариант ответа )
            </small>
            <div className={s.video_answers}>
                <span className={(hoverVideo && !data.userData.video[repeat]) ? s.opacity_span : null} onMouseOver={() => setHoverVideo('Джизус')}  onMouseOut={() => setHoverVideo(null)} >
                    <Button nextPhase={'QUESTION PORN'} name={'video'} text={'Джизус'} />
                </span>
                <span className={(hoverVideo && !data.userData.video[repeat]) ? s.opacity_span : null} onMouseOver={() => setHoverVideo('Пошлая Молли')} onMouseOut={() => setHoverVideo(null)}>
                    <Button nextPhase={'QUESTION PORN'} name={'video'} text={'Пошлая Молли'} />
                </span>
            </div>
        </div>
    )
}