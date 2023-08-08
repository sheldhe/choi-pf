import { useState } from "react";

//input data관리 용도 hook
export const useInput = (initialState: false) => {
  const [value, setValue] = useState(initialState);
  const onChange = (event) => {
    const { value } = event.target;
    return setValue(value);
  };
  return { value, onChange };
};
//input data관리 용도 hook
export const useEditorInput = (initialState: "") => {
  const [value, setValue] = useState(initialState);
  const onChange = (value) => {
    return setValue(value);
  };
  return { value, onChange };
};

//체크 박스 on / off용도 hook
export const useInputChecked = (initialState: false) => {
  const [value, setValue] = useState(initialState);
  const onChange = (val = "") => {
    if (val === "") {
      return setValue((prev) => !prev);
    } else {
      return setValue(val);
    }
  };
  return { value, onChange };
};

//체크 박스 on / off용도 hook
export const useInputModal = (initialState: false) => {
  const [value, setValue] = useState(initialState);
  const onChange = () => {
    // event.preventDefault();
    return setValue((prev) => !prev);
  };
  return { value, onChange };
};
