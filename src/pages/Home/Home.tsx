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
    const [value, setValue] = useState<number | ''>('')

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
            }
        }))
        console.log(column)
        console.log(condition)
        console.log(value)
    }

    return (
        <div className={s.appWrapper}>
            <Header
                setColumn={setColumn}
                setCondition={setCondition}
                setValue={setValue}
                filter={filter}
            />
            <Suspense component={<Table renderArr={renderArr}/>}/>
        </div>
    )
}

export default Home