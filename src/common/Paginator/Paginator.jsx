import React from 'react';
import cls from './Paginator.module.css';

const Paginator = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
  let portionCount = Math.ceil(pagesCount / props.portionSize);
  let [ portionNumber, setPortionNumber ] = React.useState(1);
  let leftPortionPageNumber = (portionNumber  - 1) * props.portionSize + 1;
  let rightPortionPageNumber = portionNumber * props.portionSize;

  return (
    <div>
      { portionNumber > 1 && <button onClick = {() => setPortionNumber(portionNumber - 1)}> Previous </button> }

      {pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map(page => {
        return (
          <span
            onClick={() => props.onPageChanged(page)}
            className={props.currentPage === page ? cls.selectedPage : ''}
            key={page}>
            { page}
          </span>
        )
      })}
      { portionNumber < portionCount && <button onClick = {() => setPortionNumber(portionNumber + 1)}> Next </button> }
    </div>
  )
}

export default Paginator;