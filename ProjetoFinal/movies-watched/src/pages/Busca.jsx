import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import './Home.css';

const buscar = import.meta.env.VITE_BUSCA;
const chaveApi = import.meta.env.VITE_CHAVE_API;

const Busca = () => {
  const [busca] = useSearchParams();

  const [filmes, setFilmes] = useState([]);
  const filmeBuscado = busca.get('q');
  const [favoritos, setFavoritos] = useState(() => {
    const verifica = localStorage.getItem('favoritos');
    return verifica ? JSON.parse(verifica) : [];
  });

  const getFilmesBuscado = async url => {
    const favs = JSON.parse(localStorage.getItem('favoritos'));

    const res = await fetch(url);
    const data = await res.json();

    const campoFavorito = data.results.map(filme => ({
      ...filme,
      favorito: favs.some(fav => fav.id === filme.id),
    }));

    setFilmes(campoFavorito);
  };

  useEffect(() => {
    const buscaURL = `${buscar}?${chaveApi}&query=${filmeBuscado}`;

    getFilmesBuscado(buscaURL);
  }, [filmeBuscado]);

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const salvarFavoritos = filme => {
    const verifica = favoritos.some(fav => fav.id === filme.id);
    if (verifica) {
      localStorage.removeItem('favoritos');
      setFavoritos(favoritos.filter(fav => fav.id !== filme.id));
    } else {
      filme.favorito = true;
      setFavoritos(fav => [...fav, filme]);
    }
  };

  return (
    <div className='container-home'>
      <div className='namepage'>
        <h3>Busca: {filmeBuscado}</h3>
      </div>
      <div className='filmes-container'>
        {filmes.length === 0 && <p>Buscando filmes...</p>}
        {filmes.length > 0 &&
          filmes.map(filme => (
            <Card
              key={filme.id}
              filme={filme}
              salvar={() => salvarFavoritos(filme)}
            />
          ))}
      </div>
    </div>
  );
};

export default Busca;
