import React, {FC} from 'react'
import s from './Input.module.css'

type PropsType = {
    title: string
    changeValue: (value: number | '') => void
}

const Input:FC<PropsType> = ({title, changeValue}) => {
    return (
        <div className={s.inputWrapper}>
            <div>{title}</div>
            <input onChange={e => changeValue(Number(e.currentTarget.value))}/>
        </div>
    )
}

export default Input
