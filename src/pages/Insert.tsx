import { useContext, useState } from "react"
import { PersonListContext } from "../context/PersonListContext"
import { useNavigate } from "react-router-dom"
import { Person } from "../types/types";
import toast from 'react-hot-toast';
import InsertCSS from "../styles/pages/Insert.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faEraser } from "@fortawesome/free-solid-svg-icons"

// this component simply displays the Insert page (url: '/insert')
export default function Insert() {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [title, setTitle] = useState('')

  const { personList, add } = useContext(PersonListContext);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let p: Person = {
      id: personList ? personList.length + 1 : Math.floor(Math.random()*10000),
      name,
      email,
      phone,
      title
    }
    if(add) add(p);
    toast.success(`Person ${name} was added to the database`);
    if(!isChecked) {
      navigate('/crud-app/') 
    } else {
      setName(_ => '');
      setEmail(_ => '');
      setPhone(_ => '');
      setTitle(_ => '');
    }
  }

  return (
    <>
      <main className={InsertCSS.main}>
        <section>
          <h1>Add Entry</h1>
          <form className={InsertCSS['form-container']} onSubmit={(e) => handleSubmit(e)}>
            <button
              type="button" 
              className={InsertCSS['go-back-button']}
              onClick={() => navigate('/crud-app/')}
            >
              <FontAwesomeIcon icon={faArrowLeft} />Go Back
            </button>
            <div>
              <input 
                type="checkbox"
                name="multi-entry"
                checked={isChecked}
                onChange={() => setIsChecked(prevValue => !prevValue)} 
              />
              <label htmlFor="multi-entry"> Insert multiple entries</label>
            </div>
            <label htmlFor="name">Name</label>
            <input 
              required
              type="text" 
              name="name" 
              value={name} 
              placeholder="Insert name here..."
              onChange={(e) => setName(e.target.value)} 
            />
            <label htmlFor="email">Email</label>
            <input 
              required
              type="email" 
              name="email" 
              value={email} 
              placeholder="Insert email here..."
              onChange={(e) => setEmail(e.target.value)} 
            />
            <label htmlFor="phone">Phone Number (accepted format: 3771117721)</label>
            <input 
              required
              maxLength={10}
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}" 
              name="phone" 
              value={phone} 
              placeholder="Insert phone number here..." 
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="title">Person Title</label>
            <input 
              required
              type="text" 
              name="title" 
              value={title} 
              placeholder="Insert person title here..." 
              onChange={(e) => setTitle(e.target.value)}
            />
            <div>
              <button type="submit">Add Entry</button>
              <button type="reset"><FontAwesomeIcon icon={faEraser} /></button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
