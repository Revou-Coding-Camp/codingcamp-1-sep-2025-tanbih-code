<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Todo List</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
    body {
      font-family: 'Quicksand', sans-serif;
    }
  </style>
</head>
<body class="bg-[#4a5166] min-h-screen flex justify-center items-start pt-10 px-4">
  <div class="w-full max-w-3xl">
    <h1 class="text-center text-[#d9d9d9] font-extrabold text-3xl mb-6 select-none">Todo List</h1>
    <form class="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="Add a todo . . ."
        class="flex-1 bg-[#1f2937] rounded-md border border-[#374151] text-[#d9d9d9] placeholder-[#d9d9d9] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6b7280]"
      />
      <input
        type="date"
        class="w-40 bg-[#1f2937] rounded-md border border-[#374151] text-[#d9d9d9] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6b7280]"
      />
      <button
        type="submit"
        class="bg-[#d9d9d9] text-[#1f2937] rounded-md px-4 py-2 font-bold hover:bg-[#c7c7c7] transition select-none"
        aria-label="Add todo"
      >
        <i class="fas fa-plus"></i>
      </button>
    </form>
    <div class="flex justify-between mb-4">
      <button
        class="bg-[#374151] text-[#d9d9d9] font-extrabold px-4 py-2 rounded select-none"
        type="button"
      >
        FILTER
      </button>
      <button
        class="bg-[#d9d9d9] text-[#1f2937] font-extrabold px-4 py-2 rounded select-none"
        type="button"
      >
        DELETE ALL
      </button>
    </div>
    <table class="w-full bg-[#1f2937] rounded-md text-[#d9d9d9] text-sm">
      <thead>
        <tr class="font-extrabold text-left">
          <th class="px-4 py-3">TASK</th>
          <th class="px-4 py-3">DUE DATE</th>
          <th class="px-4 py-3 text-center">STATUS</th>
          <th class="px-4 py-3 text-center">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="4" class="text-center py-6">No task found</td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>
