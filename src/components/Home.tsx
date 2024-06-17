import React from "react";
import {Container, Typography} from '@mui/material';
import NavBar from "./NavBar.tsx";
import About from "./About.tsx";

const backgroundStyle = {
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    height: '100vh',
    color: 'yellow', // Adjust text color for better visibility
    // backgorund-color: 'white',
    background: 'white',
    backgroundImage: `
      linear-gradient(grey 1px, transparent 1px),
      linear-gradient(to right, grey 1px, transparent 1px)
    `,
    margin: '0px',
    backgroundSize: '40px 40px'
};


const Home = () => {

    return (
        <div style={backgroundStyle}>
            <NavBar></NavBar>            
            <Container sx={{
                padding: "10%",
                height: "100%"
            }}>
                <Typography variant="h1" component="h3" sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textShadow: '8px 8px 2px black, 4px 4px 2px black, 12px 12px 2px black'
                }} gutterBottom>
                    Joel Bremner
                </Typography>
                <Typography variant="h4" component="h3" sx={{ 
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textShadow: '4px 4px 2px black'
                    }} gutterBottom>
                    Graduate Computer Scientist
                </Typography>
            </Container>
            <About />
        </div>
    )
}

export default Home;