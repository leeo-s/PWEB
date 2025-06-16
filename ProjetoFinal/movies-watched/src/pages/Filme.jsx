import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Filme.css';
import { FaStar } from 'react-icons/fa';
import { CiCalendarDate } from 'react-icons/ci';
import { TbChartBarPopular } from 'react-icons/tb';

const filmeURL = import.meta.env.VITE_URL_API;
const chaveAPI = import.meta.env.VITE_CHAVE_API;
const urlImagem = import.meta.env.VITE_IMAGEM;

const Filme = () => {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);

  const getFilme = async url => {
    const res = await fetch(url);
    const data = await res.json();

    setFilme(data);
  };

  useEffect(() => {
    const urlFilme = `${filmeURL}${id}?${chaveAPI}&&language=pt-BR`;
    getFilme(urlFilme);
  }, [id]);

  return (
    <div className='container-filme'>
      <div className='container-infos'>
        <div className='img'>
          <img src={urlImagem + filme.poster_path} alt={filme.title} />
        </div>
        <div className='infos'>
          <div className='info-head'>
            <div className='title-filme'>{filme.title}</div>
            <div className='votos'>
              <FaStar
                size={24}
                fill='rgb(255, 255, 0)'
                stroke='black'
                strokeWidth={10}
              />
              <p>{filme.vote_average}</p>
            </div>
            <div className='lancamento'>
              <CiCalendarDate size={24} fill='black' strokeWidth={1} />
              <p>{filme.release_date}</p>
            </div>
            <div className='popularidade'>
              <TbChartBarPopular size={24} />
              <p>{filme.popularity}</p>
            </div>
          </div>

          <div className='info-body'>
            <h3>Sinopse:</h3>
            <p>{filme.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filme;
