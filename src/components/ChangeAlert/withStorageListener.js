import React, { useState } from "react";

const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener("storage", (data) => {
        if(data.key === "TODOS_V1") {  
            console.log(data);
            setStorageChange(true)
        }
    })

    const toggleShow = () => {
        props.sincronize();
        setStorageChange(false);   
    }

    return (
      <WrappedComponent show={storageChange} toggleShow={toggleShow} />
    );
  };
};

export { withStorageListener };
