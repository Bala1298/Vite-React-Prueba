import React from "react";
import CheckIcon from "./icons/Checkicon";
import CrossIcons from "./icons/CrossIcons";

const TodoItem = React.forwardRef(({ todo, removeTodo, updateTodo, ...props }, ref) => {
  const { id, title, complete } = todo;

  return (
    <article {...props} ref={ref} className="flex gap-4 border-b border-b-gray-400 dark:bg-gray-800 transition-all duration-1000">
      <button
        className={`h-5 w-5 flex-none rounded-full border-2 ${
          complete
            ? "flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-50 to-pink-500"
            : "inline-block"
        }`}
        onClick={() => updateTodo(id)}
      >
        {complete && <CheckIcon />}
      </button>
      <p className={`grow text-gray-600 dark:text-gray-300 ${complete && "line-through"}`}>{title}</p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <CrossIcons />
      </button>
    </article>
  );
});

export default TodoItem;
