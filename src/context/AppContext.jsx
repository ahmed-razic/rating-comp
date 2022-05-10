import { createContext, useState } from 'react'
import { appData } from '../data/AppData'
import { v4 as uuidv4 } from 'uuid'

const AppContext = createContext()

export const AppProvider = function ({ children }) {
  const [data, setData] = useState(appData)
  const [editState, setEditState] = useState({ item: {}, edit: false })

  const addItem = function (newItem) {
    console.log('add item')
    newItem.id = uuidv4()
    setData([newItem, ...data])
  }

  const deleteItem = function (id) {
    if (window.confirm('Are you sure?')) {
      console.log('delete item')
      data.filter((item) => item.id !== id)
    }
  }

  const prepareEdit = function (itemToUpdate) {
    console.log('edit item')
    setEditState({ item: itemToUpdate, edit: true })
  }

  const updateItem = function (id, updatedItem) {
    console.log('prepare edit')
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
