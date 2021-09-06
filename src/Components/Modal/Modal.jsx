import s from './Modal.module.css'
import meme from '../../img/meme.png'
import angryMeme from '../../img/angry-meme.png'
import frustradedMeme from '../../img/frustrated-meme.png'
import nyaMeme from '../../img/nya-meme.png'
import roflan from '../../img/roflan.png'
import { useCallback, useEffect, useState } from 'react'
import React from 'react'


export default (props) => {

    const moodImage = () => {
        switch(props.modalContent.mood){
            case 'angry':
                return angryMeme
            case 'frustrated':
                return frustradedMeme
            case 'nya':
                return nyaMeme
            case 'roflan':
                return roflan
            default:
                return meme
        }
    }

    

    useEffect( () => {
        let timer = setTimeout(() => {
            props.setModalVisibility(false)
        }, 4000)
        

        return () => clearTimeout(timer)
    },[props.modalContent])



    return(
        <div className={s.modal_wrapper}>
            <div className={s.modal}>
                <div className={s.modal_text}>
                    <span>{props.modalContent.content}</span>
                </div>
                <img draggable={false} src={moodImage()} className={s.modal_img} />
            </div>
        </div>
    )
}