import React from "react";
import Select from "./Select";

export default ({
  handleSubmit,
  placeholder,
  styleInput,
  value,
  setValue,
  isTask,
  users,
  handleChangeName,
  state,
}) => {
  // const [value, setValue] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!value) return;
  //   props.addTask(value);
  //   setValue("");
  // };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="container-input">
        <div className="container-addTask">
          <input
            type="text"
            placeholder={placeholder}
            className={styleInput}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {isTask === true && (
            <Select
              users={users}
              handleChangeName={handleChangeName}
              state={state}
            />
          )}
        </div>
      </form>
    </React.Fragment>
  );
};
