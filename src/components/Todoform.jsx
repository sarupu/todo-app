export function TodoForm() {
  return (
    <form className="todo-form">
      <input
        className="todo-form__input"
        name="todo"
        type="text"
        placeholder="Add a task"
      />
      <button className="todo-form__submit" onClick={onSubmit}>
        Add
      </button>
    </form>
  )
}
