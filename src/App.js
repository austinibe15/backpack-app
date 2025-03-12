import React, { useState } from 'react';  
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';  
import DatePicker from 'react-datepicker';  
import 'react-datepicker/dist/react-datepicker.css';  
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';  

const App = () => {  
  const [date, setDate] = useState(null);  
  const [showDetails, setShowDetails] = useState(false); // State to manage flight details display  

  const onDateSelect = (selectedDate) => {  
    setDate(selectedDate);  
    console.log("Selected Date:", selectedDate);  
  };  

  const handleContinueClick = () => {  
    if (date) {  
      setShowDetails(true); // Show flight details when button is clicked  
    } else {  
      alert("Please select a date first!"); // Alert if no date is selected  
    }  
  };  

  const getDayName = (date) => {  
    return date ? date.toLocaleDateString('en-US', { weekday: 'long' }) : '';  
  };  

  return (  
    <Container className="App">  
      <header className="App-header">  
        <Row className="mt-4">  
          <Col>  
            <Alert variant="primary">  
              <h1>Flight Schedule</h1>  
            </Alert>  
          </Col>  
        </Row>  
        <Row className="mt-4">  
          <Col>  
            <h3>Select a date:</h3>  
            <DatePicker  
              selected={date}  
              onChange={onDateSelect}  
              className="form-control"  
              dateFormat="dd/MM/yyyy"  
              minDate={new Date()}  
              maxDate={new Date(new Date().setMonth(new Date().getMonth() + 12))}  
            />  
          </Col>  
        </Row>  
        {date && (  
          <Row className="mt-3">  
            <Col>  
              <p>Selected Date: {date.toLocaleDateString()}</p>  
            </Col>  
          </Row>  
        )}  
        <Row className="mt-4">  
          <Col>  
            <Button onClick={handleContinueClick} variant="primary">  
              Continue  
            </Button>  
          </Col>  
        </Row>  
        {showDetails && date && (  // Conditional rendering of flight details  
          <Row className="mt-4">  
            <Col>  
              <h3>Flight Details</h3>  
              <p><strong>Date:</strong> {date.toLocaleDateString()}</p>  
              <p><strong>Day:</strong> {getDayName(date)}</p>  
            </Col>  
          </Row>  
        )}  
      </header>  
    </Container>  
  );  
};  

export default App;  