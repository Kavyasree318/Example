import React from "react";

// function Func() {
//   return<h1>Functional component</h1>
// }

const Func = (props) => {

  const { name } = props
  return (
    <div>
      <h1>Functional component</h1>
      <h5>functional component with {name}</h5>
      {/* {props.children} */}
    </div>
  );
};
export default Func;
