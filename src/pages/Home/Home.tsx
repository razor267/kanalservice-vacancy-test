import React, {FC} from 'react'
import s from './Home.module.css'
import Suspense from '../../containers/Suspense'
import Table from '../../containers/Table'
import Header from '../../containers/Header'

const Home: FC = () => {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Suspense component={<Table/>}/>
        </div>
    )
}

export default Home