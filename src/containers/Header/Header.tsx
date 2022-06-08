import React, {FC} from 'react'
import s from './Header.module.css'
import Select from '../../components/Select'
import Input from '../../components/Input'

const Header: FC = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.title}>Фильтры</div>
            <div className={s.filters}>
                <Select title='Колонка' values={['Дата', 'Название', 'Количество', 'Расстояние']}/>
                <Select title='Условие' values={['Равно', 'Содержит', 'Больше', 'Меньше']}/>
                <Input title='Значение'/>
            </div>
        </div>
    )
}

export default Header