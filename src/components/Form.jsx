import { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ onSubmit, onError }) {
  const [formInputs, setFormInputs] = useState({
    titulo: '',
    autor: ''
  });

  const handleChange = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const { titulo, autor } = formInputs;
    
    // Validación 1: título mínimo 3 caracteres y sin espacios al inicio
    if (titulo.length < 3 || titulo.startsWith(' ')) {
      return false;
    }
    
    // Validación 2: autor mínimo 6 caracteres
    if (autor.length < 6) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formInputs);
    } else {
      onError();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="titulo">Título del libro:</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={formInputs.titulo}
          onChange={handleChange}
          placeholder="Ingresa el título"
        />
      </div>

      <div className="form-group">
        <label htmlFor="autor">Autor:</label>
        <input
          type="text"
          id="autor"
          name="autor"
          value={formInputs.autor}
          onChange={handleChange}
          placeholder="Ingresa el autor"
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired
};

export default Form;
