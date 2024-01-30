import React from "react";
import { useRef, useEffect } from "react";
function UseRefPractise() {
  const inputRef = useRef(null);
  console.log(inputRef);
  useEffect(() => {
    // Focus on the input element after the component has mounted
    console.log(inputRef);
    inputRef.current.focus();
  }, []);
  const handleClick = () => {

    // case 1:  Access the input value using the ref.
    // The useRef hook returns an object with a current property, and this property is initially set to null.
    // so mainly we use the useRef hook to just access the DOM element which is not the virtual DOM it is the actual DOM.
    // When you use useRef to access the DOM element via the current property, you are accessing the actual real DOM, not the virtual DOM managed by React.
    // And by Accessing the inputref.current we get that element.
    // then we can perform any DOM manupulation method on that.
    
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Get Input Value</button>
    </div>
  );
}
export default UseRefPractise;
