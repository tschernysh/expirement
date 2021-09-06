import { useContext, useEffect, useState } from "react"
import PictureButton from "../../../Common/PictureButton/PictureButton"
import { UserDataContext } from "../../../Context/UserDataContext"
import React from 'react'


import Cena from '../../../img/cena.jpg'
import Sins from '../../../img/sins.jpeg'
import Lana from '../../../img/lana.jpg'
import Bitch from '../../../img/bitch.jpeg'

import s from './Porn.module.css'
import { PhaseContext } from "../../../Context/PhaseContext"
import { ModalContext } from "../../../Context/ModalContext"

export default () => {
    const data = useContext(UserDataContext)
    const phase = useContext(PhaseContext)
    const modal = useContext(ModalContext)


    const [repeat, setRepeat] = useState(0)

    useEffect(() => {
        if(data.userData.prevPhase !== phase.phase){
            if(data.userData.porn[repeat] === 'Purple Bitch' ){
                return
            }else if (data.userData.porn[repeat] === 'Lana Rhoades'){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'frustrated', content: 'Выбирать беременных не красиво'})
            }else if(data.userData.porn[repeat] === 'Johny Sins' ){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'frustrated', content: 'Всеми любимый доктор, сантехник, учитель, тренер, астронавт, юрист...'})
            }else if (data.userData.porn[repeat] === 'John Cena'){
                modal.setModalVisibility(true)
                modal.setModalContent({content: 'Порнуха порнухой, а рестлинг по расписанию'})
            }
        }else{
            setRepeat(1)
            if (data.userData.porn[0] === data.userData.porn[1] ){
                modal.setModalVisibility(true)
                modal.setModalContent({content: `На пасхалку не хватило деняк`})
            }
        }
    }, [data.userData.porn])


    return(
        <div className={s.porn}>
            <h1>Выбери {data.userSex === 'Работяга' ? 'любимую "актрису"' : 'любимого "актёра"'}</h1>
            <div className={s.porn_answers}>
                {data.userSex === 'Работяга' 
                    ? <div>
                        <PictureButton nextPhase={'QUESTION SMOKE'} image={Bitch} name={'porn'} text={'Purple Bitch'} />
                        <PictureButton nextPhase={'QUESTION SMOKE'} image={Lana} name={'porn'} text={'Lana Rhoades'} />    
                    </div>
                    : <div>
                        <PictureButton nextPhase={'QUESTION SMOKE'} image={Sins} name={'porn'} text={'Johny Sins'} />
                        <PictureButton nextPhase={'QUESTION SMOKE'} image={Cena} name={'porn'} text={'John Cena'} />    
                    </div>}
                
            </div>
        </div>
    )
}