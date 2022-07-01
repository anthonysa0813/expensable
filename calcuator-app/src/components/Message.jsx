import React from "react";

const Message = ({ message, type }) => {
  return <div className={`alert-${type}`}>{message}</div>;
};

export default Message;
