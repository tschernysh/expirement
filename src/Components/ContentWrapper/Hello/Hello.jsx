import { useCallback, useContext, useEffect, useState } from "react"
import { ModalContext } from "../../../Context/ModalContext"
import { PhaseContext } from "../../../Context/PhaseContext"
import s from './Hello.module.css'
import React from 'react'


export default (props) => {

    const [queue, setQueue] = useState(0)
    const phase = useContext(PhaseContext)
    const modal = useContext(ModalContext)

    const [wrongPress, setWrongPress] = useState(0)

    const textChanger = () => {
        switch(queue){
            case 0:
                return 'Создал на коленке приложение'
            case 1:
                return 'Суть в том что типа ну как его короче будут вопросы ответь пожалуйста'
            case 2:
                return 'Вопросов по типу "кто нравица" не будет :('
            case 3:
                return 'Нажми Х чтобы продолжить'
        }
    }

    
    const keyHandler = (e) => {
        if(queue === 3 && e.code === 'KeyX'){
            if(wrongPress !== 3){
                modal.setModalContent({mood: 'angry', content: 'Это буква "Ч", дурила'})
                modal.setModalVisibility(true)
                setWrongPress(wrongPress+1)
            }else{
                modal.setModalContent({mood: 'angry', content: 'Не ну ты реально необучаемый даун, нажми русскую букву "Х"'})
                modal.setModalVisibility(true)
            }
        }else if(queue === 3 && e.code === 'BracketLeft'){
            phase.setPhase('NAME')
            
        }
    }



    useEffect(() => {
        if(queue === 3){
            document.addEventListener('keydown', keyHandler)
        }
        return () => document.removeEventListener('keydown', keyHandler)
    }, [queue])
    
    
    useEffect(() => {
        if(queue !== 3 && !props.preloader){
            setTimeout(() => {
                setQueue(queue+1)
            }, 5000);
        }
    }, [queue, props.preloader])
    
    return(
        <div className={s.hello}>
            {textChanger()}   
        </div>
    )
}