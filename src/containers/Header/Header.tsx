import React, {Dispatch, FC, SetStateAction} from 'react'
import s from './Header.module.css'
import Select from '../../components/Select'
import Input from '../../components/Input'

type PropsType = {
    column: string
    condition: string
    value: string
    setColumn: Dispatch<SetStateAction<string>>
    setCondition: Dispatch<SetStateAction<string>>
    setValue: Dispatch<SetStateAction<string>>
    filter: () => void
    showAll: () => void
}

const Header: FC<PropsType> = ({setColumn,setCondition, setValue, filter, showAll, column, condition, value}) => {

    const changeColumn = (value: string) => {
        setColumn(value)
    }

    const changeCondition = (value: string) => {
        setCondition(value)
    }

    const changeValue = (value: string) => {
        setValue(value)
    }

    return (
        <div className={s.headerWrapper}>
            <div className={s.title}>Фильтры</div>
            <div className={s.filters}>
                <Select
                    title='Колонка'
                    values={['Дата', 'Название', 'Количество', 'Расстояние']}
                    changeColumn={changeColumn}
                    column={column}
                />
                <Select
                    title='Условие'
                    values={['Равно', 'Содержит', 'Больше', 'Меньше']}
                    changeCondition={changeCondition}
                    condition={condition}
                />
                <Input
                    title='Значение'
                    changeValue={changeValue}
                    value={value}
                />
                <button onClick={filter}>Отфильтровать</button>
                <button onClick={showAll}>Сбросить филльтры</button>
            </div>
        </div>
    )
}

export default Header