import React, {useState} from 'react';
import {FilterType} from '../App';

type MoneyType = {
    banknots: string
    value: number
    number: string
}
type MoneyPropsType = {
    money: MoneyType[];
}

export const MoneyFilter = (props: MoneyPropsType) => {

    let [filter, setFilter] = useState<FilterType>('All')

    const onClickFilterMoney = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    let currentMoney = props.money;
    if (filter === 'Dollars') currentMoney = props.money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    if (filter === 'Rubls') currentMoney = props.money.filter((filteredMoney) => filteredMoney.banknots === 'Rubls')


    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknots}</span>
                            <span> {objFromMoneyArr.value}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => {onClickFilterMoney('All')}}>ALL</button>
                <button onClick={() => {onClickFilterMoney('Rubls')}}>RUBLS</button>
                <button onClick={() => {onClickFilterMoney('Dollars')}}>Dollars</button>
            </div>
        </>
    )
}