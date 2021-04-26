import React from 'react';
import cls from './Paginator.module.css';



type PropsTypes = {
  totalUsersCount: number
  pageSize: number
  currentPage?: number
  portionSize: number
  onPageChanged?: (pageNumber: number) => void
}
const Paginator: React.FC<PropsTypes> = ({
  totalUsersCount,
  pageSize,
  onPageChanged = x => x,
  currentPage = 1,
  portionSize
}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [ portionNumber, setPortionNumber ] = React.useState(1);
  let leftPortionPageNumber = (portionNumber  - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      { portionNumber > 1 && <button onClick = {() => setPortionNumber(portionNumber - 1)}> Previous </button> }

      {pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map(page => {
        return (
          <span
            onClick={() => onPageChanged(page)}
            className={currentPage === page ? cls.selectedPage : ''}
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