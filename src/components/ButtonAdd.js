import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

export default ({ path, text }) => {
  return (
    <div className="add-user">
      <Link to={path} className="link-button">
        <Button variant="contained" color="primary">
          {text}
        </Button>
      </Link>
    </div>
  );
};
