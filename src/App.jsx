import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '555-7777' }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const handleNewName = (event) => {
    console.log(newName);
    setNewName(event.target.value);
  }

  const handleNewNumber = (event) => {
    console.log(newNumber);
    setNewNumber(event.target.value);
  }

  const filter = (event) => {
    console.log(searchInput);
    setSearchInput(event.target.value);
  }

  const handleAddition = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    else {
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewNumber('');
    }
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with <input value={searchInput} onChange={filter} />
      </div>

      <h2>
        Add a new
      </h2>
      <form onSubmit={handleAddition}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit"> add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          searchInput ? filteredPersons.map(person => (
            <li key={person.name} style={{ display: 'flex-inline' }}>
              {person.name} {person.number}
            </li>
          )) : persons.map(person => (
            <li key={person.name} style={{ display: 'flex-inline' }}>
              {person.name} {person.number}
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default App