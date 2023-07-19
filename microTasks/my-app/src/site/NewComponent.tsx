import React from 'react';

export type TopCarsType = {
    manufacturer: string
    model: string
}

export const NewComponent = () => {
    const topCars :TopCarsType[] = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        <table>
            <tbody>
            {topCars.map((el, index) => {
                return (
                        <tr key={index}>
                            <th>{el.manufacturer}</th>
                            <th>{el.model}</th>
                        </tr>
                )
            })
            }
            </tbody>
        </table>
    )
}