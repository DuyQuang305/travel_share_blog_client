import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PageNumber = styled.span`
  cursor: pointer;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  margin: 0 5px;
`;

const Ellipsis = styled.span`
  margin: 0 5px;
  font-weight: bold;
  cursor: pointer;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5;

    if (totalPages <= maxPageNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
      const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push('..');
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages - 1) {
        pageNumbers.push('..');
      }

      if (endPage < totalPages) {
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <PaginationContainer>
      <PageNumber
        onClick={() => onPageChange(currentPage - 1)}
        style={{ display: currentPage === 1 ? 'inline' : 'inline' }}
      >
        {'<'}
      </PageNumber>
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === '..' ? (
            <Ellipsis>..</Ellipsis>
          ) : (
            <PageNumber
              isActive={page === currentPage}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PageNumber>
          )}
        </React.Fragment>
      ))}
      <PageNumber
        onClick={() => onPageChange(currentPage + 1)}
        style={{ display: currentPage === totalPages ? 'none' : 'inline' }}
      >
        {'>'}
      </PageNumber>
    </PaginationContainer>
  );
};

export default Pagination;
