import React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';

const Main = () => {

    const classes = useStyles();

    return (
        <Card className = {classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance: €1000</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    {/* TODO: insert InfoCard subcomponent */}
                </Typography>
                <Divider/>
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    {/* TODO: insert List subcomponent */}
                </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
