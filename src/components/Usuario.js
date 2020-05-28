import React, { Fragment } from "react";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import iconTrash from "../icons/trash.svg";

const User = (props) => {
  return (
    <Fragment>
      <div className="container-task" key={props.index}>
        <div className="container-text" style={{ margin: "50px" }}>
          {props.user.name}
        </div>
        <div className="container-buttons">
          <IconButton
            color="primary"
            className="icon-button"
            onClick={() => props.updateUser(props.user, props.user.name)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            className="icon-button"
            onClick={() => props.removeUser(props.index)}
          >
            <img className="img-trash" src={iconTrash} alt="iconTrash" />
          </IconButton>
        </div>
      </div>
    </Fragment>
  );
};

export default User;
