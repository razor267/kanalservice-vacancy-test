import React, {FC} from 'react'
import s from './Select.module.css'

type PropsType = {
    title: string
    values: string[]
}

const Select:FC<PropsType> = ({title, values}) => {
    return (
        <div className={s.selectWrapper}>
            <div>{title}</div>
            <select>
                {values.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select
