import React from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client'
import App from './App'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)
