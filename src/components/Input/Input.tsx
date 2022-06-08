import React, {FC} from 'react'
import s from './Input.module.css'

type PropsType = {
    title: string
}

const Input:FC<PropsType> = ({title}) => {
    return (
        <div className={s.inputWrapper}>
            <div>{title}</div>
            <input/>
        </div>
    )
}

export default Input
