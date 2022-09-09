import React from 'react';
import Pagination2 from 'react-bootstrap/Pagination';

const Pagination = ({pokemonsPerPage, totalPokemons, paginate }) => {
  const pageNumbers = []
  for (let index = 1; index <= Math.ceil(totalPokemons / pokemonsPerPage); index++) {
    pageNumbers.push(index)
  }

  return (
    <>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <Pagination2 size="sm"  key={number} className='page-item'>
            <a onClick={() => paginate(number)} className='page-link' style={{cursor: "pointer"}}>
              {number}
            </a>
          </Pagination2>
        ))}
      </ul>
    </>
  );
}

export default Pagination;
