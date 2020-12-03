import React from 'react'
import { Button, Container, CssBaseline, Divider, Typography } from '@material-ui/core'

function LandingPage() {
    return (
        <div className="landingPage">
            <CssBaseline/>
            <Container fixed>
                <Typography component="div" style={{ backgroundColor : '#E9ECEF', height: '40vh', borderRadius: '20px'}}>
                    <br></br>
                    <Typography variant="h3" gutterBottom style={{textAlign: 'center'}}>
                        Welcome to Twitter Clone Project!
                    </Typography>
                    <br></br>
                    <Typography variant="h4" gutterBottom style={{paddingLeft: '10px'}}>
                        Click on the below buttons to Enjoy!
                    </Typography>
                    <Divider/>
                    <Button variant="contained" color="primary" href="/twitter/register" style={{marginTop: '30px', marginLeft: '10px'}}>
                        Sign up
                    </Button>
                    <Button variant="contained" color="primary" href="/twitter/login" style={{marginTop: '30px', marginLeft: '10px'}}>
                        Log in
                    </Button>
                </Typography>
            </Container>
        </div>
    )
}

export default LandingPage
