import { createContext, useState } from 'react'
import { appData } from '../data/AppData'
import { v4 as uuidv4 } from 'uuid'

const AppContext = createContext()

export const AppProvider = function ({ children }) {
  const [data, setData] = useState(appData)
  const [editState, setEditState] = useState({ item: {}, edit: false })

  const addItem = function (newItem) {
    newItem.id = uuidv4()
    setData([newItem, ...data])
  }

  const deleteItem = function (id) {
    if (window.confirm('Are you sure?')) {
      setData(data.filter((item) => item.id !== id))
    }
  }

  const prepareEdit = function (itemToUpdate) {
    setEditState({ item: itemToUpdate, edit: true })
  }

  const updateItem = function (id, updatedItem) {
    setData(
      data.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    )
  }

  return (
    <AppContext.Provider
      value={{
        data: data,
        editState: editState,
        addItem: addItem,
        deleteItem: deleteItem,
        prepareEdit: prepareEdit,
        updateItem: updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
