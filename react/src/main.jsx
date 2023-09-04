import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Aside from './Aside.jsx'
import Content from './Content.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div className='middle-section'>
      <Aside />
      <Content />

    </div>
  </React.StrictMode>,
)
