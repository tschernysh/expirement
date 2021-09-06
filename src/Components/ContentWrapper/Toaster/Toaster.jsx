import PictureButton from '../../../Common/PictureButton/PictureButton'
import s from './Toaster.module.css'
import Aska from '../../../img/aska.jpg'
import Ray from '../../../img/ray.png'
import { useContext, useEffect, useState } from 'react'
import { PhaseContext } from '../../../Context/PhaseContext'
import { UserDataContext } from '../../../Context/UserDataContext'
import { ModalContext } from '../../../Context/ModalContext'
import React from 'react'



export default (props) => {
    const phase = useContext(PhaseContext)
    const data = useContext(UserDataContext)
    const modal = useContext(ModalContext)

    const [repeat, setRepeat] = useState(0)

    useEffect(() => {
        if(data.userData.prevPhase !== phase.phase){
            if(data.userData.toaster[repeat] === 'Аска Лэнгли' ){
                modal.setModalVisibility(true)
                modal.setModalContent({content: 'Тут соглы, рыжие девочки прекрасны'})
            }else if (data.userData.toaster[repeat] === 'Рэй Аянами'){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'frustrated', content: 'Так то она очень привлекательный чар, несмотря на свою интровертность'})
            }
        }else{
            setRepeat(1)
            if(data.userData.toaster[0] === 'Аска Лэнгли' && data.userData.toaster[repeat] === 'Рэй Аянами' ){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'frustrated', content: 'А зря, Аска пизже...'})
            }else if (data.userData.toaster[0] === 'Рэй Аянами' && data.userData.toaster[repeat] === 'Аска Лэнгли' ){
                modal.setModalVisibility(true)
                modal.setModalContent({mood: 'frustrated', content: 'Рэй хоть и пассивна, но такой измены бы не простила...'})
            }else if (data.userData.toaster[0] === data.userData.toaster[1] ){
                modal.setModalVisibility(true)
                modal.setModalContent({content: `Мб выбрать ${data.userData.toaster[1]} на верочку не такая уж и плохая идея`})
            }
        }
    }, [data.userData.toaster])



    return(
        <div className={s.toaster}>
            <h1>Choose toaster to die with  &lt;3 </h1>
            <div className={s.toaster_answers}>
                <PictureButton nextPhase={'QUESTION SEX'} name={'toaster'} text={'Аска Лэнгли'} image={Aska} />
                <PictureButton nextPhase={'QUESTION SEX'} name={'toaster'} text={'Рэй Аянами'} image={Ray} />
            </div>
        </div>
    )
} 