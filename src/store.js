export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
    ],
    contacts: [],

    deleteId: null,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_task":
      const { id, color } = action.payload;

      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        ),
      };
    case "getcontacts":
      return {
        ...store,
        contacts: action.payload,
      };
    case "set_delete_id":
      return {
        ...store,
        deleteId: action.payload,
      };

    case "reset_delete_id":
      return {
        ...store,
        deleteId: 0,
      };
    default:
      throw Error("Unknown action.");
  }
}
