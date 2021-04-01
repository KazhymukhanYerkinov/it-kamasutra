import React from 'react';
import cls from './Paginator.module.css';

const Paginator = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <span
            onClick={() => props.onPageChanged(page)}
            className={props.currentPage === page ? cls.selectedPage : ''}
            key={index}>
            { page}
          </span>
        )
      })}
    </div>
  )
}

export default Paginator;