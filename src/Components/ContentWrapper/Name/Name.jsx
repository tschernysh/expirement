import { useContext, useEffect } from 'react'
import { ModalContext } from '../../../Context/ModalContext'
import { PhaseContext } from '../../../Context/PhaseContext'
import { UserDataContext } from '../../../Context/UserDataContext'
import s from './Name.module.css'
import React from 'react'


export default (props) => {
    const data = useContext(UserDataContext)
    const phase = useContext(PhaseContext)
    const modal = useContext(ModalContext)

    const formHandler = (e) => {
        phase.setPhase('IKNOW')
    }


    useEffect(() => {
        modal.setModalVisibility(true)
        modal.setModalContent({content: 'Давай я сделаю вид что мне интересно как тебя зовут, впиши имя в поле'})
    }, [])
    return(
        <div className={s.name}>
            <h1>Пиши на русском, плез</h1>
            <form onSubmit={e => {
                e.preventDefault()
                formHandler(e)
            }} >
                <input value={data.userData.name} onChange={e =>  data.setUserData({...data.userData, name: e.target.value.toUpperCase()})} type="text" />
                <button disabled={!data.userData.name} >Продолжить</button>
            </form>
        </div>
    )
}