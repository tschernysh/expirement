import { useContext, useEffect, useState } from 'react'
import Button from '../../../Common/Button/Button'
import { ModalContext } from '../../../Context/ModalContext'
import { PhaseContext } from '../../../Context/PhaseContext'
import { UserDataContext } from '../../../Context/UserDataContext'
import s from './Sex.module.css'
import React from 'react'


export default (props) => {

    const data = useContext(UserDataContext)
    const phase = useContext(PhaseContext)
    const modal = useContext(ModalContext)

    const [repeat, setRepeat] = useState(0)


    useEffect(() => {
        if(data.userData.prevPhase !== phase.phase){
            if(data.userData.sex[repeat] === 'Работяга' ){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'angry', content: 'Мужик, зачем ты еще дышишь !?'})
            }else if (data.userData.sex[repeat] === 'Посудомойка'){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'nya', content: 'Автор не хотел таким образом обидеть женщин, так как сам та еще тёлка'})
            }
        }else{
            setRepeat(1)
            if(data.userData.sex[0] === 'Работяга' && data.userData.sex[repeat] === 'Посудомойка' ){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'meme', content: 'Тебя военком ищет ? Нахуя ты сменил пол ?'})
            }else if (data.userData.sex[0] === 'Посудомойка' && data.userData.sex[repeat] === 'Работяга' ){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'meme', content: 'Да не стесняйся ты так, я бы не стал тебя булить, останься ты женщиной'})
            }else if (data.userData.sex[0] === data.userData.sex[1] ){
                modal.setModalVisibility(true)
                modal.setModalContent({content: `Хорошо что ты не страдаешь новомодной сменой полов`})
            }
        }
    }, [data.userData.sex])

    useEffect(() => {
        if(data.userData.prevPhase === phase.phase){
            modal.setModalVisibility(true)
            modal.setModalContent({mood: 'meme', content: `Больше гендеров тут не прибавиться, будь ${data.userSex === 'Работяга' ? 'уверен' : 'уверена' }`})
        }
    }, [phase.phase])

    return(
        <div className={s.sex}>
            <h1>Какого ты пола ?</h1>
            <div className={s.sex_answers}>
                <Button nextPhase={'QUESTION PAPICH'} name={'sex'} text={'Работяга'} />
                <Button nextPhase={'QUESTION PAPICH'} name={'sex'} text={'Посудомойка'} />
            </div>
        </div>
    )
}