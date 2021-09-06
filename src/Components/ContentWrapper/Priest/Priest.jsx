import s from './Priest.module.css'

import priest from '../../../img/priest.jpg'
import child from '../../../img/child.jpg'
import Button from '../../../Common/Button/Button'
import { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../../../Context/UserDataContext'
import { ModalContext } from '../../../Context/ModalContext'
import { PhaseContext } from '../../../Context/PhaseContext'
import React from 'react'


export default () => {
    const data = useContext(UserDataContext)
    const modal = useContext(ModalContext)
    const phase = useContext(PhaseContext)

    const [repeat, setRepeat] = useState(0)

    useEffect(() => {
        if(data.userData.prevPhase !== phase.phase){
            if(data.userData.priest[repeat] === 'да' ){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'nya', content: 'Ладно, первый вопрос был слишком изи'})
            }else if (data.userData.priest[repeat] === 'нет'){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'angry', content: 'Походу ты глубоко верующий человек'})
            }
        }else{
            setRepeat(1)
            if(data.userData.priest[0] === 'да' && data.userData.priest[repeat] === 'нет' ){
                modal.setModalVisibility(true)
                modal.setModalContent({content: 'Замучала совесть ?'})
            }else if (data.userData.priest[0] === 'нет' && data.userData.priest[repeat] === 'да' ){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'angry', content: 'Ладно хоть дошло...'})
            }else if (data.userData.priest[0] === data.userData.priest[1] ){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'angry', content: 'Зачем было переигрывать...'})
            }
        }
    }, [data.userData.priest])
    
    useEffect(() => {
        if(data.userData.prevPhase === phase.phase){
            modal.setModalVisibility(true)
            modal.setModalContent({content: `${data.userData.fakeName}, что-то забыл здесь ?`})
        }
    }, [phase.phase])

    return(
        <div className={s.priest}>
            <h1>Есть ли прямая связь между этими персонажами ?</h1>
            <div className={s.priest_img}>
                <img src={priest} alt="" />
                <img src={child} alt="" />
            </div>
            <div className={s.priest_answer}>
                <Button nextPhase={'QUESTION TOASTER'} name={'priest'} text={'да'} />
                <Button nextPhase={'QUESTION TOASTER'} name={'priest'} text={'нет'} />
            </div>
        </div>
    )
}