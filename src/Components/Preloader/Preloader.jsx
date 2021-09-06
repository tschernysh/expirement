import { useEffect } from 'react'
import s from './Preloader.module.css'
import React from 'react'

export default (props) => {

    useEffect(() => {
        props.offPreloader && setTimeout(() => {
            props.setPreloader(false)
        }, 1000)
    }, [props.offPreloader])

    return(
        <div className={`${s.preloader} ${props.offPreloader && s.off_preloader}`} >
            <div className={s.preloader_image}></div>
            <div data-text='tschernysh' className={s.preloader_text}>
                tschernysh
            </div>
            <div className={s.preloader_line}></div>
        </div>
    )
}