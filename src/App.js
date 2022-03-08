import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

import { v4 as uuidv4 } from 'uuid'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      // display the alert

      showAlert(true, 'danger', 'please enter a value')
    } else if (name && isEditing) {
      // handle edit
    } else {
      // show alert
      const newItem = { id: uuidv4(), title: name }
      setList([...list, newItem])
      console.log(list)
      setName('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>ShopList - Your Shopping List</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      {
        // conditional rendering for List component
        // only show List when there are items in the list

        list.length > 0 && (
          <div className="grocery-container">
            <List items={list} />
            <button className="clear-btn">clear items</button>
          </div>
        )
      }
    </section>
  )
}

export default App