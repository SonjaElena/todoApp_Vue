Vue.createApp({
  data() {
    return {
      todos: [],
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push({
          id: Math.floor(Math.random() * Date.now()),
          description: this.newTodo,
          done: false,
        });
        this.newTodo = "";
      }
    },
    toggleStatus(index) {
      this.todos[index].done = !this.todos[index].done;
    },

    rmDone() {
      this.todos.forEach((todo, index) => {
        if (todo.done) {
          this.todos.splice(index, 1);
        }
      });
    },

    filteredTodos() {
      if (this.filterOption === "all") {
        return this.todos;
      } else {
        const done = this.filterOption === "true";
        return this.todos.filter((todo) => todo.done === done);
      }
    },
  },
}).mount("#app");
