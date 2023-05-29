import { useContext, useState } from "react";
import GridCSS from '../styles/components/Grid.module.css';
import { PersonListContext } from "../context/PersonListContext";
import Filter from "./Filter";
import Pagination from "./Pagination";

/* This component displays the grid */
export default function Grid() {
  const { personList } = useContext(PersonListContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [personsPerPage, _] = useState(3);
  const totalPages = Math.ceil((personList?.length ?? 0) / personsPerPage);

  return (
    <>
      <div className={GridCSS.container}>
        <table className={GridCSS.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <Filter 
              personList={personList} 
              personsPerPage={personsPerPage} 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage} 
            />
          </tbody>
        </table>
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} lastPage={totalPages} />
    </>
  )
}
