import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import housing from './images/housing.png';
const App = () => {

    return (
        <Container maxidth = "lg">
            <AppBar className = {useStyles().appBar} position="static" color="inherit">
                <Typography className={useStyles().heading} variant="h2" align="centre">Housing</Typography>
                <img className={useStyles().image} src={housing} alt ="housing" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify = "space-between" alignItems="stretch" spacing = {3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>

                </Container>
            </Grow> 
        </Container>
    )
}

export default App;