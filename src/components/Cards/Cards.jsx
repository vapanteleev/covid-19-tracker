import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed) {
        return 'Loading...'
    }
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Заражённых</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2} separator=","/>
                            </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Число заболевших COVID-19</Typography>

                        
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Выздоровевших</Typography>
<Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2} separator=","/></Typography>                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Число выздоровевших</Typography>

                        
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Умерших</Typography>
<Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2} separator=","/></Typography>                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Число умерших</Typography>

                        
                    </CardContent>
                </Grid>
                
            </Grid>
        </div>


    )
}

export default Cards