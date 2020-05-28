import React from "react";

import Button from "@material-ui/core/Button";

export default ({
  data,
  index,
  text,
  handleUpdateData,
  handleFinishUpdate,
}) => {
  return (
    <div className="container-edit-update">
      <input
        type="text"
        value={text}
        //onChange = { e => setTextComplete(e.target.value) }
        onChange={(e) => handleUpdateData(e, data, index)}
        className="input-edit-update"
      />

      <Button
        variant="outlined"
        color="secondary"
        className="button-finish"
        onClick={() => handleFinishUpdate(data)}
      >
        Terminar
      </Button>
    </div>
  );
};
