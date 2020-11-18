import React from 'react'

const ListCompany = ({ company }) => {
  return(
    <div className="card-company">
      <div className="image">
        <img src="https://nerdin.com.br/img/empresa/511.png" alt="Foto empresa"/>
      </div>
      <div className="box-info">
        <p className="company-name">{company.enterprise_name}</p>
        <p className="company-type">{company.enterprise_type.enterprise_type_name}</p>
        <p className="company-county">{company.country}</p>
      </div>
    </div>
  )
}

export default ListCompany;