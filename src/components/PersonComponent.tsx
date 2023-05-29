import { useContext, useState } from "react";
import { PersonListContext } from "../context/PersonListContext";
import { Person } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import PersonCSS from '../styles/components/Person.module.css';

export default function PersonComponent({ person }: {person: Person}) {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(person.name)
  const [email, setEmail] = useState(person.email)
  const [phone, setPhone] = useState(person.phone)
  const [title, setTitle] = useState(person.title)

  const { remove, edit } = useContext(PersonListContext);

  const handleEdit = () => {
    let newPerson: Person = {
        id: person.id,
        name,
        email,
        phone,
        title,
    }
    if(edit) edit(newPerson)

    setIsEditing(false)

    toast.success(`Person ${newPerson.name} edited successfully`);
  }

  if(isEditing) {
    return (
        <>
          <tr className={PersonCSS.container}>
            <td></td>
            <td><input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/></td>
            <td><input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/></td>
            <td><input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/></td>
            <td><input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/></td>
            <td><button type="button" onClick={() => handleEdit()}><FontAwesomeIcon icon={faCheck} /></button></td>
          </tr>        
        </>
    )
  } else {
    return (
      <>
        <tr className={PersonCSS.container}>
          <td>{person.id}</td>
          <td>{person.name}</td>
          <td>{person.email}</td>
          <td>{person.phone}</td>
          <td>{person.title}</td>
          <td>
            <button 
              style={{marginRight: '0.75rem'}}
              onClick={() => setIsEditing(true)}
            >
              <FontAwesomeIcon icon={faPenToSquare}/>
            </button>
            <button
              onClick={() => { if(remove) remove(person.id); toast.success(`Person ${person.name} deleted succesfully`)} }
            >
                <FontAwesomeIcon icon={faTrash}/>
            </button>
          </td>
        </tr>
      </>
    )
  }
}
