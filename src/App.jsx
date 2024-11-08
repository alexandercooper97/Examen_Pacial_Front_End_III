import { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

function App() {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (data) => {
    setFormData(data);
    setError('');
  };

  const handleError = () => {
    setError('Por favor chequea que la información sea correcta');
    setFormData(null);
  };

  return (
    <div className="container">
      <h1>Formulario de Libros Favoritos</h1>
      <Form onSubmit={handleSubmit} onError={handleError} />
      {error && <p className="error">{error}</p>}
      {formData && <Card {...formData} />}
    </div>
  );
}

export default App;