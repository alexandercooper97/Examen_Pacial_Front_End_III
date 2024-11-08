import PropTypes from 'prop-types';

function Card({ titulo, autor }) {
  return (
    <div className="card">
      <h2>Libro Registrado:</h2>
      <p><strong>Título:</strong> {titulo}</p>
      <p><strong>Autor:</strong> {autor}</p>
    </div>
  );
}

Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired
};

export default Card;