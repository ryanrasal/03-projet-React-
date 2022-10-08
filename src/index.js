import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Contact = () => {
  const name = "Sophie";
  const phone = "📞 09 87 65 43 21";
  const mail = "✉️ Sophie.@gmail.com";

  return (
    <div className="friend-item" >
      <h3>{name}</h3>
      <h4>{phone}</h4>
      <h4>{mail}</h4>
      <button class="delete-btn">Delete</button>
    </div>
  );
}
export const App = (
  // write your React Code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>
    <Contact />
    <Contact />
    <Contact />
    <Contact />
    <Contact />
  </div>
);



ReactDOM.render(App, document.getElementById('root'));

