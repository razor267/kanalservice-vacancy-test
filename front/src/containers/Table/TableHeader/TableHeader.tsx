import React, {FC} from 'react'
import s from './TableHeader.module.css'

const TableHeader: FC = () => {
    return (
        <div className={s.header}>
            <div>Дата</div>
            <div>Название</div>
            <div>Количество</div>
            <div>Расстояние</div>
        </div>
    )
}

export default TableHeader