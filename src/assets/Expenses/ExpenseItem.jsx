import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css' 
import { useState } from 'react'

const ExpenseItem = (props) => {
    const {date, price, title: initialTitle} = props  

    const [title] = useState(initialTitle)  
    return (
        <li>
        <Card className='expense-item'> 
            <ExpenseDate date={props.data.date}/> 
            <div className="expense-item__description">
                <h2>{props.data.title}</h2>
                <div className="expense-item__price">{props.data.price}</div>
            </div>
        </Card>
        </li>
    )
} 

export default ExpenseItem