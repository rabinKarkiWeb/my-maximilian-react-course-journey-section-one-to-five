import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.items.length === 0){
       return <p style={{color:'white'}} >No Expenses Found</p>
    }
    return <ul style={{padding:'0'}}>
        {props.items.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
        ))}
    </ul>
}


export default  ExpensesList;
