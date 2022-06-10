import React, {FC} from 'react'
import s from './Input.module.css'

type PropsType = {
    title: string
    changeValue: (value: string) => void
    value: string
}

const Input: FC<PropsType> = ({title, changeValue, value}) => {
    return (
        <div className={s.inputWrapper}>
            <div>{title}</div>
            <input onChange={e => changeValue(e.currentTarget.value)} value={value}/>
        </div>
    )
}

export default Input
