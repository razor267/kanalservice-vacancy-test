import React, {FC} from 'react'
import s from './Table.module.css'
import TableHeader from './TableHeader'
import {DataType} from '../../mock/data'

type PropsType = {
    renderArr: DataType[]
}

const Table: FC<PropsType> = ({renderArr}) => {

    return (
        <div>
            <TableHeader/>
            {renderArr.map(item => (<div key={item.id} className={s.row}>
                    <div>{item.Date}</div>
                    <div>{item.Name}</div>
                    <div>{item.amount}</div>
                    <div>{item.distance}</div>
                </div>
            ))}
        </div>
    )
}

export default Table