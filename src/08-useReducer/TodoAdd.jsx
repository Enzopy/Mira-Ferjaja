import { useState } from "react";
// import { useForm } from "../Hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  //   const { description, onInputChange, onResetForm } = useForm({
  //     description: "",
  //   });

  const [description, setDescription] = useState("");

  console.log("description value", description);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description?.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
