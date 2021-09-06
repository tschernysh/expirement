import { useContext, useEffect, useState } from "react"
import { ModalContext } from "../../../Context/ModalContext"
import { PhaseContext } from "../../../Context/PhaseContext"
import { UserDataContext } from "../../../Context/UserDataContext"
import s from './Iknow.module.css'
import React from 'react'


export default (props) => {
    const data = useContext(UserDataContext)
    const modal = useContext(ModalContext)
    const phase = useContext(PhaseContext)
    const [fakeStage, setFakeStage] = useState(false)

    // useEffect(() => {
    //     setTimeout(() => {
    //         modal.setModalVisibility(true)
    //         modal.setModalContent({mood: 'angry', content: 'Так себе у тебя имя, ладно, держи другое'})
    //         setTimeout(() => {
    //             setFakeStage(true)
    //         }, 1000)
    //     }, 2000)
    // }, [])

    useEffect(() => {
        if(setFakeName() !== data.userData.name){
            setTimeout(() => {
                modal.setModalVisibility(true)
                modal.setModalContent({content: 'Какие люди !? Я сам тебе подберу имя, какая честь для нас'})
                setTimeout(() => {
                    setFakeStage(true)
                }, 1000)
            }, 2000)
        }else{
            setTimeout(() => {
                modal.setModalVisibility(true)
                modal.setModalContent({content: 'Видимо хозяин ничего не знает о тебе. Не расстраивайся, быть ноунеймом тоже норма'})
                setTimeout(() => {
                    phase.setPhase('QUESTION PRIEST')
                }, 4000)
            }, 2000)
        }
    }, [])

    const setFakeName = () => {
        switch(data.userData.name){
            case 'ДЕНИС':
            case 'ДИОНИЗИ':
            case 'ДАНЗО':
                return 'ДЕНЯ'
            case 'РОМА':
            case 'РОМАН':
                return 'ГЕНИЙ'
            case 'МИЛИ':
            case 'МИЛФИ':
                return 'ЭМИЛИЯ'
            case 'ВОЛОДЯ':
            case 'ВЛАДИМИР':
            case 'ВОВА':
            case 'ВОВАН':
                return 'ВАЛОДЯ РУДАЙВАЙ'
            case 'НАСТЯ':
            case 'АНАСТАСИЯ':
            case 'НАСТЮША':
                return 'ОНГЛИЧАНКА'
            default:
                return data.userData.name
        }
    }

    return(
        <div className={s.iknow} >
            Приветствую тебя, <span onTransitionEnd={() => {
                data.setUserData({...data.userData, fakeName : setFakeName()})
                setFakeStage(false)
                modal.setModalContent({mood: 'nya', content: 'Вот так то лучше'})
                setTimeout(() => {
                    modal.setModalContent({mood: 'nya', content: `Ладно ${data.userData.fakeName}, можем идти дальше`})
                    setTimeout(() => {
                        phase.setPhase('QUESTION PRIEST')
                    }, 2000)
                }, 4000)
            }}  className={fakeStage ? s.change_anim : null} >{data.userData.fakeName ? data.userData.fakeName : data.userData.name}</span>.
            <br /> Ну что ж, можем начинать тестирование
        </div>
    )
}