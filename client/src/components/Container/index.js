import React from 'react';
import "./style.css";

// This container centers and limits the width of its contents
function Container({ children, className }) {
  return (
    <div className={"container " + className}>
      {children}
    </div>
  );
}

export default Container;
