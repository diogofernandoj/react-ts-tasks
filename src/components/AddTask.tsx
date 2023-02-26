import { useState } from "react";

const AddTask = ({ addTaskHandler }: { addTaskHandler: (value: string) => void }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const [inputError, setInputError] = useState<boolean>(false);

  const addTaskButtonHandler = () => {
    if (inputValue.trim() == "") {
      setInputError(true);
      return;
    }
    addTaskHandler(inputValue);
    setInputValue("");
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onKeyUp={(e) => e.key == "Enter" && addTaskButtonHandler()}
        onChange={(e) => {
          setInputValue(e.target.value);
          setInputError(false);
        }}
      />
      <button onClick={addTaskButtonHandler}>Add</button>
      {inputError && <span>Insira uma task válida!</span>}
    </div>
  );
};

export default AddTask;
