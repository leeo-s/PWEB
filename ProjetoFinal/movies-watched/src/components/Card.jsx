import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './Card.css';

const urlImagem = import.meta.env.VITE_IMAGEM;

const Card = ({ filme, salvar }) => {
  return (
    <div className='card'>
      <img
        src={urlImagem + filme.poster_path}
        id='card-img'
        alt={filme.title}
      />
      <h2>{filme.title}</h2>
      <div className='btn'>
        <Link to={`/filme/${filme.id}`} id='btn-detalhes'>
          DETALHES
        </Link>
        <FaHeart
          size={28}
          id='btn-like'
          onClick={salvar}
          fill={filme.favorito ? 'red' : 'black'}
        />
      </div>
    </div>
  );
};

export default Card;
