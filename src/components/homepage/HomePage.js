import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './HomePage.css'
import beforeStartupImg from '../../assets/Startup_Monochromatic1.png'
import afterStartupImg from '../../assets/Startup_Isometric2.png'
import { Link } from 'react-router-dom'

export default function HomePageComponent() {
  return (
    <div className='cards-section'>
        <Card style={{ width: '19rem' }}>
            <Card.Img variant="top" src={beforeStartupImg} />
            <Card.Body>
                <Card.Title>Pre Startup Check</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Link to='/checklist'><Button variant="primary">Checklist</Button></Link>
                {/* <Link to='/precheck'><Button variant="primary">Precheck</Button></Link> */}
                {/* <Button variant="primary">Precheck</Button> */}
            </Card.Body>
        </Card>
        {/* <Card style={{ width: '19rem' }}>
            <Card.Img variant="top" src={afterStartupImg} />
            <Card.Body>
                <Card.Title>Post Startup Check</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Link to='/postcheck'><Button variant="primary">Postcheck</Button></Link>
                <Button variant="primary">Postcheck</Button>
            </Card.Body>
        </Card> */}
    </div>
  )
}
