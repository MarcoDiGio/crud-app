import { useState } from "react";
import PaginationCSS from '../styles/components/Pagination.module.css';

export default function Pagination({ currentPage, setCurrentPage, lastPage }: 
    { currentPage: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>>, lastPage: number }) {
  const [neighbors, _] = useState(2)
  let numbers: number[] = [1, currentPage, lastPage]

  for (let index = 1; index <= neighbors; index++) {
    const prev = currentPage - index;
    const next = currentPage + index;
    if(prev > 0) numbers.push(prev);
    if(next < lastPage) numbers.push(next) 
  }

  numbers = Array.from(new Set(numbers))

  numbers.sort();

  if(lastPage == 0) return null
  
  return (
    <div className={PaginationCSS['number-container']}>
        {numbers.map(number => {
            return <button 
              key={number}
              onClick={() => setCurrentPage(_ => number)}
              style={ number == currentPage ? { backgroundColor: '#63637b'} : undefined}
            >
              {number}
            </button>
        })}
    </div>
  )
}
