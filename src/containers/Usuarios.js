import React, { useState } from "react";

import Usuario from "../components/Usuario";
// import FormUsuario from "../components/FormUsuario";
import ButtonAdd from "../components/ButtonAdd";
import TextEdit from "../components/TextEdit";
import FormEntity from "../components/FormEntity";

export default ({ Users }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  let [cont] = useState(3);

  const [users, setUsers] = useState(Users);

  const addUser = (name) => {
    const newUser = [...users, { id: `user${cont++}`, name }];
    setUsers(newUser);
  };

  const removeUser = (index) => {
    const newUser = [...users];
    newUser.splice(index, 1);
    setUsers(newUser);
  };

  const updateUser = (user, name) => {
    const userEdit = user;
    userEdit.isEdit = true;

    setIsUpdate(!isUpdate);
  };

  const handleUpdateUser = (e, user, index) => {
    //console.log( e.which || e.keyCode);
    //let numCode = e.which || e.keyCode;
    //console.log(numCode);
    //if( numCode === 13 ){
    const userValue = users[index];
    userValue.name = e.target.value;

    setIsUpdate(!isUpdate);
  };

  const handleFinishUpdate = (user) => {
    user.isEdit = false;
    setIsUpdate(!isUpdate);
  };

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addUser(value);
    setValue("");
  };

  return (
    <div className="general-content">
      <div className="app">
        <ButtonAdd path={"/"} text={"Tareas"} />

        <div className="todo-list">
          <div className="container-app">
            <div className="container-taskss">
              {users.map((user, index) => (
                <React.Fragment>
                  <Usuario
                    key={index}
                    index={index}
                    user={user}
                    removeUser={removeUser}
                    updateUser={updateUser}
                  />
                  {user.isEdit === true && (
                    <TextEdit
                      data={user}
                      index={index}
                      text={user.name}
                      handleUpdateData={handleUpdateUser}
                      handleFinishUpdate={handleFinishUpdate}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
            <FormEntity
              handleSubmit={handleSubmit}
              placeholder={"Agregar Usuario"}
              styleInput={"input-user"}
              value={value}
              setValue={setValue}
              isTask={false}
            />
            {/* <FormUsuario addUser={addUser} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
