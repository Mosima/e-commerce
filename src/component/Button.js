import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButtons(props) {
  const { variant, disabled, text, onClick, color } = props;
  return (
    <div className="global-button">
      <Button
        variant={variant}
        disabled={disabled}
        onClick={(event) => {
          onClick(event);
        }}
        color={color}
      >
        {text}
      </Button>
    </div>
  );
}
