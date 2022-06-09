import React, {FC} from 'react'
import s from './Select.module.css'

type PropsType = {
    title: string
    values: string[]
    changeColumn?: (value: string) => void
    changeCondition?: (value: string) => void
}

const Select:FC<PropsType> = ({title, values, changeColumn, changeCondition}) => {
    return (
        <div className={s.selectWrapper}>
            <div>{title}</div>
            <select onChange={e => changeColumn ? changeColumn(e.currentTarget.value) : changeCondition && changeCondition(e.currentTarget.value)}>
                {values.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select
