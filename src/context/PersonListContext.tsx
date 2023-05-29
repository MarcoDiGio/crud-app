import { createContext, useState } from "react";

type Person = {
    id: number,
    name: string,
    email: string,
    phone: string,
    title: string,
}

type PersonContext = {
    personList: Person[],
    add: (x: Person) => void,
    remove: (x: number) => void,
    edit: (x: Person) => void,
}

export const PersonListContext = createContext<Partial<PersonContext>>({})

export function PersonListProvider({children}: {children: React.ReactNode}) {
    const [personList, setPersonList] = useState<Person[]>([
      {
        "id": 1,
        "name": "John Smith",
        "email": "johnsmith@gmail.com",
        "phone": "1112223334",
        "title": "Chief Operative"
      },
      {
        "id": 2,
        "name": "Mario Rossi",
        "email": "mariorossi@hotmail.it",
        "phone": "3334445556",
        "title": "Chief Director",
      },
      {
        "id": 3,
        "name": "Robert Smith",
        "email": "robertsmith@outlook.it",
        "phone": "3334445556",
        "title": "Chief Executive"
      },
      {
        "id": 4,
        "name": "James Marisbury",
        "email": "jamesmarisbury@libero.it",
        "phone": "5445549999",
        "title": "Employee"
      },
      {
        "id": 5,
        "name": "Patricia Felicia",
        "email": "patriciafelicia@hotmail.it",
        "phone": "5245248999",
        "title": "Employee"
      },
      {
        "id": 6,
        "name": "Jennifer Robinson",
        "email": "jenniferrobinson@.it",
        "phone": "5245248999",
        "title": "Employee"
      },
      {
        "id": 7,
        "name": "Richard Robinson",
        "email": "richardrobinson@libero.it",
        "phone": "5245248999",
        "title": "Employee"
      }
    ]);

    // Add a person
    const add = (person: Person) => {
        setPersonList(prevList => [...prevList, person])
    }

    // Remove a person
    const remove = (id: number) => {
        setPersonList(prevList => prevList.filter(x => x.id != id))
    }

    // Edit a person
    const edit = (person: Person) => {
        setPersonList(prevList => [...prevList.filter(x => x.id != person.id), person])
    }

    // Sorted list served to the Provider, it is the list displayed when calling useContext
    const sortedPersonList = personList.sort((a, b) => a.id - b.id);

    return (
        <PersonListContext.Provider value={{
          personList: sortedPersonList,
          add,
          remove,
          edit,
          }}
        >
            {children}
        </PersonListContext.Provider>
    )
} 