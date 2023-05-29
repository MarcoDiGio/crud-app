import { Person } from "../types/types";
import PersonComponent from "./PersonComponent";

export default function Filter({ personList, personsPerPage, currentPage, setCurrentPage }: 
  { personList: Person[] | undefined, personsPerPage: number, currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>> }) {

  const endIndex = currentPage * personsPerPage;
  const startIndex = endIndex - personsPerPage;
  const currentPersons = personList?.slice(startIndex, endIndex);

  if(currentPersons?.length == 0 && personList?.length !== 0) setCurrentPage(_ => 1)

  return (
    <>
      {currentPersons?.map((person) => {
        /* 
          for every person in the filtered list, 
          display the person using the PersonComponent 
          Component and use person.id as the key
        */
        return <PersonComponent key={person.id} person={person} />;
      })}
    </>
  )
}
