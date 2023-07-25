import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../elements/features/Navbar";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icon = {
  trash: <FontAwesomeIcon icon={faTrashCan} className="h-5" />,
  edit: <FontAwesomeIcon icon={faPenToSquare} className="h-5" />,
};

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(true) 
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleTodoDelete = (todo) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  const handleTodoEdit = (todo) => {
    window.my_modal_1.showModal();
    setEditTodo(todo);
  };
  const handleModalClose = () => {
    setShowModal(false);
    setEditTodo("");
    setNewTodo("");
  };

  const handleTodoUpdate = (e) => {
    e.preventDefault();

    const updatedTodos = todos.map((todo) =>
      todo === editTodo ? newTodo : todo
    );
    setTodos(updatedTodos);

    handleModalClose();
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="simple todo app" />
        <meta name="keywords" content="todo app, simple todo app," />
        <title>Todo App</title>
      </Helmet>
      <Navbar />
      <div className="w-full h-max bg-my-bg-light text-my-text-light dark:bg-my-bg-dark dark:text-my-text-dark font-open">
        <div className="flex flex-col items-center justify-start w-full h-full gap-4 pt-28">
          <h3 className="text-4xl font-semibold text-my-text-light dark:bg-my-bg-dark dark:text-my-text-dark mb-8">
            Todo App 
          </h3>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-row items-center justify-center w-full gap-6 form-control "
          >
            <input
              type="text"
              placeholder="Enter a new todo"
              onChange={handleInputChange}
              value={newTodo}
              className="w-1/4 input input-bordered dark:text-my-text-light"
            />
            <button type="submit" className="btn btn-neutral">
              SUBMIT
            </button>
          </form>
          <div className="w-1/2 h-screen">
            <ul className="flex flex-col items-center justify-start w-full ">
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className="flex flex-row justify-around w-full  items-center "
                >
                  <div className="w-3/4 text-lg">{todo}</div>
                  <div className="flex flex-row items-end justify-end w-1/4 gap-5 ">
                    <button
                      onClick={() => handleTodoEdit(todo)}
                      className="btn-ghost btn btn-md"
                    >
                      {icon.edit}
                    </button>
                    <button
                      onClick={() => handleTodoDelete(todo)}
                      className="btn-ghost btn btn-md"
                    >
                      {icon.trash}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {showModal ? (
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box p-6">
                <div className="h-1/4 w-full">
                  <h3 className="font-semibold text-2xl dark:text-my-text-light">
                    Edit
                  </h3>
                </div>

                <form
                  onSubmit={handleTodoUpdate}
                  className="flex flex-col w-full pt-4 p-0"
                >
                  <input
                    type="text"
                    value={newTodo}
                    onChange={handleInputChange}
                    placeholder="Edit todo"
                    className="input input-bordered w-full input-md dark:text-my-text-light"
                  />
                  <div className="modal-action">
                    <button className="btn btn-md btn-success " type="submit">
                      Update
                    </button>
                    <button
                      className="btn btn-md btn-error ml-4 p-3 py-0  flex flex-row justify-center items-center"
                      onClick={handleModalClose}
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          ) : null}
        </div>
      </div>
    </>
  );
}
