<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Todo List with Date and Task</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-4">
  <div class="w-full max-w-xl bg-white rounded-lg shadow-lg p-6">
    <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Todo List</h1>

    <form id="todo-form" class="flex flex-col sm:flex-row gap-4 mb-6">
      <input
        type="date"
        id="todo-date"
        required
        class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
        aria-label="Input tanggal tugas"
      />
      <input
        type="text"
        id="todo-task"
        placeholder="Masukkan tugas"
        required
        class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-2"
        aria-label="Input deskripsi tugas"
      />
      <button
        type="submit"
        class="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5 py-2 flex items-center justify-center transition"
        aria-label="Tambah tugas"
      >
        <i class="fas fa-plus mr-2"></i> Add
      </button>
    </form>

    <div class="mb-6 flex flex-wrap gap-3 justify-center">
      <button
        data-filter="all"
        class="filter-btn bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-pressed="true"
      >
        All
      </button>
      <button
        data-filter="today"
        class="filter-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-pressed="false"
      >
        Today
      </button>
      <button
        data-filter="upcoming"
        class="filter-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-pressed="false"
      >
        Coming
      </button>
      <button
        data-filter="past"
        class="filter-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-pressed="false"
      >
        Missed
      </button>
    </div>

    <ul id="todo-list" class="divide-y divide-gray-200 max-h-[400px] overflow-y-auto">
      <!-- Todo items will appear here -->
    </ul>
  </div>

  <script>
    const form = document.getElementById("todo-form");
    const todoList = document.getElementById("todo-list");
    const filterButtons = document.querySelectorAll(".filter-btn");

    let todos = [];

    function formatDate(dateStr) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateStr).toLocaleDateString("id-ID", options);
    }

    function isToday(dateStr) {
      const today = new Date();
      const d = new Date(dateStr);
      return (
        d.getDate() === today.getDate() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear()
      );
    }

    function isPast(dateStr) {
      const today = new Date();
      const d = new Date(dateStr);
      return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    }

    function isUpcoming(dateStr) {
      const today = new Date();
      const d = new Date(dateStr);
      return d > new Date(today.getFullYear(), today.getMonth(), today.getDate());
    }

    function renderTodos(filter = "all") {
      todoList.innerHTML = "";

      let filteredTodos = todos;
      if (filter === "today") {
        filteredTodos = todos.filter((t) => isToday(t.date));
      } else if (filter === "past") {
        filteredTodos = todos.filter((t) => isPast(t.date));
      } else if (filter === "upcoming") {
        filteredTodos = todos.filter((t) => isUpcoming(t.date));
      }

      if (filteredTodos.length === 0) {
        const emptyMsg = document.createElement("li");
        emptyMsg.className =
          "text-center py-6 text-gray-500 italic select-none";
        emptyMsg.textContent = "no assignments.";
        todoList.appendChild(emptyMsg);
        return;
      }

      filteredTodos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className =
          "flex justify-between items-center py-3 px-2 hover:bg-gray-50 rounded-md";

        const leftDiv = document.createElement("div");
        leftDiv.className = "flex flex-col";

        const dateSpan = document.createElement("span");
        dateSpan.className = "text-sm text-gray-500";
        dateSpan.textContent = formatDate(todo.date);

        const taskSpan = document.createElement("span");
        taskSpan.className = "text-gray-800 font-medium break-words max-w-[250px]";
        taskSpan.textContent = todo.task;

        leftDiv.appendChild(dateSpan);
        leftDiv.appendChild(taskSpan);

        const rightDiv = document.createElement("div");
        rightDiv.className = "flex items-center space-x-3";

        const deleteBtn = document.createElement("button");
        deleteBtn.className =
          "text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 rounded";
        deleteBtn.setAttribute("aria-label", `Hapus tugas: ${todo.task}`);
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteBtn.addEventListener("click", () => {
          todos.splice(index, 1);
          renderTodos(currentFilter);
        });

        rightDiv.appendChild(deleteBtn);

        li.appendChild(leftDiv);
        li.appendChild(rightDiv);

        todoList.appendChild(li);
      });
    }

    let currentFilter = "all";

    filterButtons.forEach((btn) = {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => {
          b.classList.remove("bg-blue-600", "text-white");
          b.classList.add("bg-gray-200", "text-gray-700");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("bg-blue-600", "text-white");
        btn.classList.remove("bg-gray-200", "text-gray-700");
        btn.setAttribute("aria-pressed", "true");
        currentFilter = btn.getAttribute("data-filter");
        renderTodos(currentFilter);
      });
    });

    form.addEventListener("submit", (e) ={
      e.preventDefault();
      const dateInput = document.getElementById("todo-date");
      const taskInput = document.getElementById("todo-task");

      const dateValue = dateInput.value;
      const taskValue = taskInput.value.trim();

      if (!dateValue || !taskValue) return;

      todos.push({ date : dateValue, task: taskValue });

      dateInput.value = "";
      taskInput.value = "";
      dateInput.focus();

      renderTodos(currentFilter);
    });

    // Initial render
    renderTodos();
  </script>
</body>
</html
