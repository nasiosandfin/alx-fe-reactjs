function AddTodoForm({ addTodo, input, setInput }) {
  return (
    <form onSubmit={addTodo}>
      <input
        data-testid="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default AddTodoForm;