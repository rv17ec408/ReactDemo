import React, { createRef } from "react";

const ChildElement = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

export const ForwardRefDemo = () => {
  const ref = createRef();
  return (
    <>
      <ChildElement ref={ref} />
      <button
        onClick={() => {
          ref.current.focus();
        }}
      >
        Focus Input When click using Ref
      </button>
    </>
  );
};
