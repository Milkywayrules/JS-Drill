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

  const newTodoLists = myTodoLists.map((rowTodo) => {
    if (rowTodo.ID === myTodo.ID) {
      rowTodo.text = data.text
    }
    return rowTodo
  })

  if (setStorageTodo(newTodoLists).isSuccess) {
    return { isSuccess: true }
  }

  // const dataDefault = { ID: null, text: null, status: null }
  // data = { ...dataDefault, data }

  // console.log(1, data);
  // if (id == null) {
  //   return
  // }
  // if (Object.values(data).findIndex( data => data == null) === -1) {
  //   return 
  // }
  // console.log(2, data);
}

function updateTodosLocStorage() {
  return null
}





export { getStorageTodo as getStorageItem, setStorageTodo, updateTodoLocStorage, updateTodosLocStorage }