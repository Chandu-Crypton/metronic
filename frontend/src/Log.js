import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const logMessage = async (level, message) => {
        try {
            await axios.post('http://localhost:5003/api/log', { level, message });
            alert('Log message sent successfully');
        } catch (error) {
            console.error('Error sending log message', error);
            alert('Failed to send log message');
        }
    };

    const handleSubmit = async () => {
        try {
            // Log an info message before form submission
            await logMessage('info', 'Submitting form data');

            // Simulate form submission
            // You can replace this with your actual form submission logic
            const formData = { name: 'John Doe', location: 'New York', currency: 'USD', email: 'john@example.com' };
            console.log('Form data submitted:', formData);

            // Log a success message after form submission
            await logMessage('info', 'Form data submitted successfully');
        } catch (error) {
            // Log an error message if form submission fails
            await logMessage('error', `Error submitting form data: ${error.message}`);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Logging Example with Winston</h1>
                <button onClick={() => logMessage('info', 'This is an info message')}>Log Info</button>
                <button onClick={() => logMessage('warn', 'This is a warning message')}>Log Warning</button>
                <button onClick={() => logMessage('error', 'This is an error message')}>Log Error</button>
                <button onClick={handleSubmit}>Submit Form Data</button>
            </header>
        </div>
    );
}

export default App;
