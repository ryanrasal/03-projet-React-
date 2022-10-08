import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export const App = (
  // write your React Code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>
  </div>
);

function Contact() {
  return (
    <div>
      <h3>Sophie</h3>
      <h4>📞 09 87 65 43 21</h4>
      <h4>✉️ Sophie.@gmail.com </h4>
      <button>Delete</button>
      <h3>Marc</h3>
      <h4>📞 05 56 78 43 45</h4>
      <h4>✉️ Marc.@gmail.com</h4>
      <button>Delete</button>
      <h3>John</h3>
      <h4>📞 23 45 67 79 09</h4>
      <h4>✉️ John.@gmail.com</h4>
      <button>Delete</button>
      <h3>Ryan</h3>
      <h4>📞 65 67 54 32 11</h4>
      <h4>✉️ Ryan.@gmail.com</h4>
      <button>Delete</button>
      <h3>Bobby</h3>
      <h4>📞 12 34 54 45 54</h4>
      <h4>✉️ Bobby.@gmail.com</h4>
      <button>Delete</button>
    </div>
  );
}

ReactDOM.render(App, document.getElementById('root'));
ReactDOM.render(<Contact />, document.getElementById('root'));
