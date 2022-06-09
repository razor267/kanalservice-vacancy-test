import React, {Dispatch, FC, SetStateAction} from 'react'
import s from './Header.module.css'
import Select from '../../components/Select'
import Input from '../../components/Input'

type PropsType = {
    setColumn: Dispatch<SetStateAction<string>>
    setCondition: Dispatch<SetStateAction<string>>
    setValue: Dispatch<SetStateAction<number | "">>
    filter: () => void
}

const Header: FC<PropsType> = ({setColumn,setCondition, setValue, filter}) => {

    const changeColumn = (value: string) => {
        setColumn(value)
    }

    const changeCondition = (value: string) => {
        setCondition(value)
    }

    const changeValue = (value: number | '') => {
        setValue(value)
    }

    return (
        <div className={s.headerWrapper}>
            <div className={s.title}>Фильтры</div>
            <div className={s.filters}>
                <Select title='Колонка' values={['Дата', 'Название', 'Количество', 'Расстояние']} changeColumn={changeColumn}/>
                <Select title='Условие' values={['Равно', 'Содержит', 'Больше', 'Меньше']} changeCondition={changeCondition}/>
                <Input title='Значение' changeValue={changeValue}/>
                <button onClick={filter}>Отфильтровать</button>
            </div>
        </div>
    )
}

export default Header