import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Note = (props) => {
  const deleteNode = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn" onClick={deleteNode}>
          <HighlightOffIcon className="deleteIcon" />
        </button>
      </div>
    </>
  );
};

export default Note;
