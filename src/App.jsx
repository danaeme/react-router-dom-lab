// src/App.jsx
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length +1;
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path = "/" element={<main><h1>Post Office</h1></main>} />
        <Route path = "/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path = "/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route path = "/mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>
    </div>
  );
};

export default App;

