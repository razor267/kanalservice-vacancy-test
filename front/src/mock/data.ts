export type DataType = {
    id: number
    date: string
    name: string
    amount: number
    distance: number
}

export const data: DataType[] = [
    {
        id: 1,
        date: '12 января 2012',
        name: 'Первый',
        amount: 24,
        distance: 121
    },
    {
        id: 2,
        date: '16 мая 2007',
        name: 'Пятый',
        amount: 21,
        distance: 2
    },
    {
        id: 3,
        date: '23 февраля',
        name: 'Мустанг',
        amount: 151,
        distance: 1210
    },
    {
        id: 4,
        date: '7 августа 2021',
        name: 'Артика',
        amount: 1,
        distance: 85
    },
    {
        id: 5,
        date: '14 марта 1985',
        name: 'Логотип',
        amount: 64,
        distance: 542
    },
]