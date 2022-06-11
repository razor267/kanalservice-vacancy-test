import React, {FC, useState} from 'react'
import s from './Home.module.css'
import Suspense from '../../containers/Suspense'
import Table from '../../containers/Table'
import Header from '../../containers/Header'
import {data, DataType} from '../../mock/data'

const Home: FC = () => {

    const [renderArr, setRenderArr] = useState<DataType[]>(data)
    const [column, setColumn] = useState('Дата')
    const [condition, setCondition] = useState('Равно')
    const [value, setValue] = useState('')

    const showAll = () => {
        setRenderArr(data)
        setColumn('Дата')
        setCondition('Равно')
        setValue('')
    }

    const filter = () => {
        setRenderArr(data.filter(item=> {
            switch (column) {
                case 'Количество':
                    switch (condition) {
                        case 'Равно':
                            return item.amount === Number(value)
                        case 'Больше':
                            return item.amount > Number(value)
                        case 'Меньше':
                            return item.amount < Number(value)
                        case 'Содержит':
                            return item.amount.toString().includes(value.toString())
                        default:
                            return null
                    }
                case 'Расстояние':
                    switch (condition) {
                        case 'Равно':
                            return item.distance === Number(value)
                        case 'Больше':
                            return item.distance > Number(value)
                        case 'Меньше':
                            return item.distance < Number(value)
                        case 'Содержит':
                            return item.distance.toString().includes(value.toString())
                        default:
                            return null
                    }
                case 'Название':
                    switch (condition) {
                        case 'Равно':
                            return item.name.toLowerCase() === value.toLowerCase()
                        case 'Больше':
                            return item
                        case 'Меньше':
                            return item
                        case 'Содержит':
                            return item.name.toLowerCase().includes(value.toLowerCase())
                        default:
                            return null
                    }
                default:
                    return null
            }
        }))
    }

    return (
        <div className={s.appWrapper}>
            <Header
                column={column}
                condition={condition}
                value={value}
                setColumn={setColumn}
                setCondition={setCondition}
                setValue={setValue}
                filter={filter}
                showAll={showAll}
            />
            <Suspense component={<Table renderArr={renderArr}/>}/>
        </div>
    )
}

export default Home