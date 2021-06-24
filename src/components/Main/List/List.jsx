import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const List = () => {

    const classes = useStyles();
    const globalState = useContext(ExpenseTrackerContext);

    console.log('globalState: ', globalState);

    const transactions = [
        { id: '1', type: 'Income', category: 'Salary', amount: 50, date: new Date() },
        { id: '2', type: 'Income', category: 'Winnings', amount: 1000, date: new Date() },
        { id: '3', type: 'Expense', category: 'Tilt', amount: 740, date: new Date() },
    ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                        <MoneyOff />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                    <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                        <Delete />
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                </Slide>
            ))}
    </MUIList>
    )
}

export default List
