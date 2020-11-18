import React from 'react';
import logo from '../../assets/img/logo-nav.png';
import { Link } from 'react-router-dom';
import { Search, X } from 'react-bootstrap-icons';

function RenderInputSearch({ showSearchInput }) {
  const [searchValue, setSearchValue] = React.useState('')

  if (showSearchInput) {
    return(
      <div className="input-group input-icon mb-3">
        <div className="input-group-prepend">
          <Search></Search>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Pesquisar"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <div className="input-group-append" onClick={() => setSearchValue('')}><X/></div>
      </div>
    )
  } else {
    return (
      <div>
        <img src={logo} alt="Logo empresa" />
        <button className="search-button">
          <Link to="/search"><Search></Search></Link>
        </button>
      </div>
    )
  }
}

function Header(props) {
  return(
    <header className="header">
      <div className="container">
        <RenderInputSearch showSearchInput={props.search}></RenderInputSearch>
      </div>
    </header>
  )
}


export default Header;
