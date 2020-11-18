import React from 'react';
import logo from '../../assets/img/logo-nav.png';
import api from '../../services/api'
import { Link } from 'react-router-dom';
import { Search, X } from 'react-bootstrap-icons';
import { DebounceInput } from 'react-debounce-input';

function fetchCompany() {
  try {
    const params = {
      'enterprise_types': this.state.email,
      'name': this.state.password
    }
    const response = api.post(`enterprises`, params)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

function RenderInputSearch({ showSearchInput }) {
  const [searchValue, setSearchValue] = React.useState('')

  if (showSearchInput) {
    return(
      <div className="input-group input-icon mb-3">
        <div className="input-group-prepend">
          <Search></Search>
        </div>
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={() => fetchCompany()} />
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
