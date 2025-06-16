import { useEffect, useState } from 'react';
import Card from '../components/Card';
import './Favoritos.css';

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState(() => {
    const verifica = localStorage.getItem('favoritos');
    return verifica ? JSON.parse(verifica) : [];
  });

  useEffect(() => {
    setFavoritos(JSON.parse(localStorage.getItem('favoritos')));
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const removerFavorito = favorito => {
    setFavoritos(favoritos.filter(fav => fav.id !== favorito.id));
  };

  return (
    <div className='container-favoritos'>
      <div className='namepage'>
        <h3>Filmes Favoritos</h3>
      </div>
      <div className='filmes-container'>
        {favoritos.length === 0 && <p>Não há filmes favoritos</p>}
        {favoritos.length > 0 &&
          favoritos.map(favorito => (
            <Card
              key={favorito.id}
              filme={favorito}
              salvar={() => removerFavorito(favorito)}
            />
          ))}
      </div>
    </div>
  );
};

export default Favoritos;
