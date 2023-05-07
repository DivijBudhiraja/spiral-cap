import React from 'react'
import { Container, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './ResultPage.css'


function ResultPage({ result = true, setResult }) {
  const goBackAction = () => {
    setResult(!result)
  }

  return (
    <div>
      <div className="gradient-col">
        <Container className="main-container top-container">
          <Container className="top-center-container">
            <Typography variant="h2" component="h2">
              Parkinsons Score:
            </Typography>

            <br />

            <Typography variant="h3" component="h3">
              {result ? '1' : '0'}
            </Typography>

            <br />
            
          </Container>
        
        </Container>
      </div>
    </div>
  )
}



export default ResultPage
