import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from './store/contactsReducer';

function App() {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [newName, setNewName] = useState('');
  const [newPhone, setPhone] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newPhone.trim()) return;

    const newContact = {
      id: Date.now().toString(),
      name: newName,
      phone: newPhone,
    };

    dispatch(addContact(newContact));
    setNewName('');
    setPhone('');
  };

  const handleDelete = (e) => {
    dispatch(deleteContact(e));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <div>
      <h2>Contact book</h2>
      <form onSubmit={handleAdd}>
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <input type="text" value={newPhone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder="Find an user"
      />
      <ul>
        {filteredContacts.map((item) => (
          <li key={item.id} onClick={() => handleDelete(item.id)}>
            {item.name} - {item.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
