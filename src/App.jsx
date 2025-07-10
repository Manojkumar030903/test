import React, { useState } from 'react';
import Login from './components/login';
import TodoList from './components/TodoList';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <TodoList />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}
