import React from 'react';
import Test from './components/testData/Test';
import Register from './components/Register';
import Login from './components/LogIn';

export default function App() {
  return (
    <div>
      <h1>DnD 5e App</h1>
      <Register />
      <Login />
      <Test />
    </div>
  );
}
