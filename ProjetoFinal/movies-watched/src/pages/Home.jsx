import { useState, useEffect } from 'react';
import Card from '../components/Card';
import './Home.css';

const filmeURL = import.meta.env.VITE_URL_API;
const chaveAPI = import.meta.env.VITE_CHAVE_API;

const Home = () => {
  const [filmes, setFilmes] = useState([]);
  const [favoritos, setFavoritos] = useState(() => {
    const verifica = localStorage.getItem('favoritos');
    return verifica ? JSON.parse(verifica) : [];
  });

  const getFilmes = async url => {
    const favs = JSON.parse(localStorage.getItem('favoritos'));

    const res = await fetch(url);
    const data = await res.json();

    const campoFavorito = data.results.map(filme => ({
      ...filme,
      favorito: favs.some(fav => fav.id === filme.id),
    }));

    setFilmes(prev => {
      const listaAtualizada = [...prev];

      campoFavorito.forEach(filme => {
        const verifica = prev.some(f => f.id === filme.id);
        if (!verifica) {
          listaAtualizada.push(filme);
        }
      });

      return listaAtualizada;
    });
  };

  useEffect(() => {
    for (let x = 1; x <= 20; x++) {
      const filmesURL = `${filmeURL}popular?${chaveAPI}&page=${x}`;

      getFilmes(filmesURL);
    }
  }, []);

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
        <h3>Lista de Filmes</h3>
      </div>
      <div className='filmes-container'>
        {filmes.length === 0 && <p>Carregando filmes...</p>}
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

export default Home;
