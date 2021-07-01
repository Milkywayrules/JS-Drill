import { ENV } from "../env.js"
import { warningToast } from "./SwalToast.js"

/**
 * 
 * @param {number} id Must be a number type.
 * @returns 
 */
 function getStorageTodo(id = null) {
  if (id) {
    const myTodoLists = JSON.parse(localStorage.getItem(ENV.DB_KEYNAME))
    const myTodo = myTodoLists.find((todo) => todo.ID === id)

    return { myTodo, myTodoLists }
  } else {
    return JSON.parse(localStorage.getItem(ENV.DB_KEYNAME))
  }
}

/**
 * 
 * @param {*} value 
 * @param {*} key 
 * @returns 
 */
function setStorageTodo(value = null, key = ENV.DB_KEYNAME) {
  try {
    if (value) {
      if (typeof value === "string") {
        localStorage.setItem(key, value)
        return { isSuccess: true }
      } else {
        localStorage.setItem(key, JSON.stringify(value))
        return { isSuccess: true }
      }
    }
  } catch (err) {
    const msg = "set storage for todo failed."
    console.error(new Error(msg));
    warningToast({ title: msg })
  }
}


function updateTodoLocStorage(todoID = null, data = { ID: null, text: null, status: null }) {
  // default value to override with the input obj
  const dataDefault = { ID: null, text: null, status: null }
  data = { ...dataDefault, ...data }

  // get specific todo item from localStorage and get all todos too
  const { myTodo, myTodoLists } = getStorageTodo(todoID)

  // 
  const newTodoLists = myTodoLists.map((rowTodo) => {
    if (rowTodo.ID === myTodo.ID) {
      // keys are only 3: ID, text, and status. We never change the ID, so we change only these 2.
      rowTodo.text = data.text
      rowTodo.status = data.status
    }
    return rowTodo
  })

  // 
  if (setStorageTodo(newTodoLists).isSuccess) {
    return { isSuccess: true }
  } else {
    return { isSuccess: false }
  }
}


function deleteTodoLocStorage(todoID = null) {
  // get specific todo item from localStorage and get all todos too
  const { myTodo, myTodoLists } = getStorageTodo(todoID)

  // 
  const newTodoLists = myTodoLists.filter((rowTodo) => {
    if (rowTodo.ID !== myTodo.ID) {
      return rowTodo
    }
  })

  // 
  if (setStorageTodo(newTodoLists).isSuccess) {
    return { isSuccess: true }
  } else {
    return { isSuccess: false }
  }
}





export { getStorageTodo as getStorageItem, setStorageTodo, updateTodoLocStorage, deleteTodoLocStorage }