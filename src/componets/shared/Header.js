import React from 'react';
import logo from '../../assets/img/logo-nav.png';
import { Link } from 'react-router-dom';
import { Search, X } from 'react-bootstrap-icons';
import { DebounceInput } from 'react-debounce-input';

function RenderInputSearch({ showSearchInput, fechCompany }) {
  const [searchValue, setSearchValue] = React.useState('')

  if (showSearchInput) {
    return(
      <div className="input-group input-icon mb-3">
        <div className="input-group-prepend">
          <Search></Search>
        </div>
        <DebounceInput
          className="form-control"
          minLength={2}
          debounceTimeout={500}
          value={searchValue}
          onChange={(e) => fechCompany(e.target.value)} />
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

function Header({ search, fechCompany }) {
  return(
    <header className="header">
      <div className="container">
        <RenderInputSearch showSearchInput={search} fechCompany={fechCompany}></RenderInputSearch>
      </div>
    </header>
  )
}


export default Header;
