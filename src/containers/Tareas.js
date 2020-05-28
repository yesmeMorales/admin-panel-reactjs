import React, { useState, Fragment } from "react";

import Tarea from "../components/Tarea";
// import FormTarea from "../components/FormTarea";
import ButtonAdd from "../components/ButtonAdd";
import TextEdit from "../components/TextEdit";
import FormEntity from "../components/FormEntity";
//import Select from './Select';

export default ({ Tasks, Users }) => {
  let [cont] = useState(3);
  const [userValue, setUserValue] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [state, setState] = useState({
    name: "",
  });

  const [tasks, setTasks] = useState(Tasks);
  // console.log(tasks);

  const [users] = useState(Users);

  const addTask = (text) => {
    const newTask = [
      ...tasks,
      {
        id: `task${cont++}`,
        text: text,
        isCompleted: false,
        isEdit: false,
        user: userValue,
      },
    ];
    setTasks(newTask);
    // console.log(tasks);
  };

  const completeTask = (index) => {
    const newTask = [...tasks];
    newTask[index].isCompleted = true;
    setTasks(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  const updateTask = (task, texto, index) => {
    const taskEdit = task;
    taskEdit.isEdit = true;

    setIsUpdate(!isUpdate);
  };

  const handleChangeName = (e) => {
    const newUserValue = e.target.value;
    setUserValue(newUserValue);
    console.log(newUserValue);
    const name = e.target.name;
    setState({
      ...state,
      [name]: e.target.value,
    });
  };

  const handleUpdateTask = (e, task, index) => {
    // console.log(e.which || e.keyCode);
    // let numCode = e.which || e.keyCode;
    // console.log(numCode);
    //if( numCode === 13 ){
    const taskTextValue = tasks[index];
    taskTextValue.text = e.target.value;
    // console.log(taskTextValue);

    setIsUpdate(!isUpdate);
  };

  const handleFinishUpdate = (task) => {
    task.isEdit = false;
    setIsUpdate(!isUpdate);
    console.log("tareas desde handleFinishUpdate");
    console.log(tasks);
  };

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <div className="general-content">
      <div className="app">
        <ButtonAdd path={"/Usuarios"} text={"Usuarios"} />

        <div className="todo-list">
          <div className="container-app">
            <div className="container-taskss">
              {tasks.map((task, index) => (
                <Fragment>
                  <Tarea
                    key={task.id}
                    index={index}
                    task={task}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    updateTask={updateTask}
                    handleUpdateTask={handleUpdateTask}
                  />
                  {task.isEdit === true && task.isCompleted === false && (
                    <TextEdit
                      data={task}
                      index={index}
                      text={task.text}
                      handleUpdateData={handleUpdateTask}
                      handleFinishUpdate={handleFinishUpdate}
                    />
                  )}
                </Fragment>
              ))}
            </div>
            <FormEntity
              handleSubmit={handleSubmit}
              placeholder={"Agregar Tarea"}
              styleInput={"input-task"}
              value={value}
              setValue={setValue}
              isTask={true}
              users={users}
              handleChangeName={handleChangeName}
              state={state}
            />
            {/* <FormTarea
              addTask={addTask}
              userValue={userValue}
              handleChangeName={handleChangeName}
              users={users}
              state={state}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
