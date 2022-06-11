import React, {FC} from 'react'
import s from './Select.module.css'

type PropsType = {
    title: string
    values: string[]
    changeColumn?: (value: string) => void
    changeCondition?: (value: string) => void
    column?: string
    condition?: string
}

const Select: FC<PropsType> = ({title, values, changeColumn, changeCondition, condition, column}) => {
    return (
        <div className={s.selectWrapper}>
            <div>{title}</div>
            <select
                onChange={e => changeColumn ? changeColumn(e.currentTarget.value) : changeCondition && changeCondition(e.currentTarget.value)}
                value={changeColumn ? column : condition}
            >
                {values.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select
