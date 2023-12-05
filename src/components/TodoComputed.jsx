const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="py-4 px-4 flex justify-between rounded-b-md bg-white py-4 px-4 dark:bg-gray-800 transition-all duration-1000">
      <span className="text-gray-400">{computedItemsLeft} items left</span>
      <button className="text-gray-400" onClick={clearCompleted}>
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
