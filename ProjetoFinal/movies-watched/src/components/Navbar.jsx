import { Link, useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [busca, setBusca] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    if (!busca) return;
    else {
      navigate(`/busca?q=${busca}`);
      setBusca('');
    }
  };

  return (
    <div className='navbar-container'>
      <nav id='navbar'>
        <h3>
          <Link to='/'>Lista de Filmes</Link>
        </h3>
        <h3>
          <Link to='/favoritos'>Filmes Favoritos</Link>
        </h3>
        <div className='form'>
          <form typeof='submit' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Buscar filmes'
              onChange={e => setBusca(e.target.value)}
              value={busca}
            />
            <BiSearch size={18} className='icone' />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
