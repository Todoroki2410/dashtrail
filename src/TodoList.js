import React from "react";
import "./index.css";
import Dashboard from './Dashboard';

const TodoList = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
      <Dashboard>
    <div id="todo-list">
      <h1>Tasks Lineup</h1>
      <form onSubmit={handleSubmit} id = "form_todo">
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit" id="new_task">Add</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text" id="task_enter">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button id="new_task" style={{ backgroundColor : "#70e000" }}  onClick={() => submitEdits(todo.id)}>Confirm Changes</button>
            ) : (
              <button id="new_task" style={{ backgroundColor : "#9d4edd", padding: "2px 10px", fontSize: "18px" }} onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}

            <button id="new_task" style={{ backgroundColor : "#f72585", padding: "2px 10px", fontSize: "18px" }} onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
    </Dashboard>
  );
};

export default TodoList;

//Back-Up Source Code

// import React, { useState } from 'react'
// import Dashboard from './Dashboard'
// import {Modal , Input , Radio , DatePicker , Select , Button, Row , Col} from 'antd'

// function TodoList() {
//     const [inputValue , setInputValue] = useState("");
//     const [todoLists , setTodoLists] = useState([]);
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [editIndex , setEditIndex] = useState()
//     const [editInputValue , setEditInputValue] = useState("")
//     function addTodoList(){
//         setTodoLists([...todoLists , inputValue]);
       
//         console.log(todoLists);
//     }

//     const showModal = (index) => {
//         setEditInputValue(todoLists[index])
//         setEditIndex(index)
//         setIsModalVisible(true);
//       };
    
//       const editTodoItem = () => {
//           var copitems = [...todoLists];
//           copitems[editIndex] = editInputValue
//           setTodoLists(copitems)
//         setIsModalVisible(false);
//       };
    
//       const handleCancel = () => {
//         setIsModalVisible(false);
//       };

//       function deleteTodoItem(index){
//           var copitems = [...todoLists];
//           copitems.splice(index, 1)
//           setTodoLists(copitems)

//       }

//   return (
//     <Dashboard>
//         <div className='todotasks'>
//             <h3 className='text-center'><b>Tasks Lineup</b></h3>
//             <Row justify='center'>
//                 <Col lg={10} sm={24}>
//                     <div className='listflex'>
//                         <Input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} placeholder='Enter a Task'/>
//                         <Button className='ml-2' onClick={addTodoList}>Add</Button>
//                     </div>
//                 </Col>
//             </Row>

//             <Row justify='center'>
//             <Col lg={10} sm={24}>
//                 {todoLists.map((item , index)=>{
                    
//                     return <div className='listflex' style={{justifyContent : 'space-between'}}>
//                         <h2>{item}</h2>
//                         <div>
//                         <Button type='primary mr-2' onClick={()=>showModal(index)}>Edit</Button>
//                         <Button type='danger' onClick={()=>{deleteTodoItem(index)}}>Remove</Button>
//                         </div>
//                     </div>
                   
//                 })}
//             </Col>
//             </Row>

//             <Modal title="Edit Todo Task" visible={isModalVisible} onOk={editTodoItem} onCancel={handleCancel} okText='Edit'>
//         <Input value={editInputValue} onChange={(e)=>{setEditInputValue(e.target.value)}}/>
//       </Modal>

//         </div>
//     </Dashboard>
//   );
// }

// export default TodoList;