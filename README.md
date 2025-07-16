# ✅ Todo List MERN Application

> A full-stack task management system built using the MERN stack (MongoDB, Express, React, Node.js) to enhance daily productivity. The app allows authenticated users to add, edit, update, and delete tasks with real-time updates and a clean UI.

---

## 📌 Features

- 🔐 JWT-based User Authentication
- 📝 Add / Update / Delete Tasks
- 📆 Due Date Handling
- 🪄 Real-Time Task Update
- 📱 Fully Responsive Design
- 🌍 Deployed on Vercel (Frontend) and Heroku (Backend)

---

## 🧠 Tech Stack

| Layer       | Technology                          |
|-------------|--------------------------------------|
| Frontend    | React.js, Redux, Axios, CSS         |
| Backend     | Node.js, Express.js, JWT            |
| Database    | MongoDB (with Mongoose ORM)         |
| Deployment  | Vercel (frontend) + Heroku (backend)|

---

## 🧩 Folder Structure

```
TODOLIST/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # TodoList, AddTaskForm, TaskItem
│   │   ├── redux/        # Redux setup and task slice
│   │   └── App.js
├── server/               # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── index.js
```

---

## 🔧 Core Functionalities

### 🔑 User Authentication
Implemented with JWT; users must be logged in to access task features.

### 📦 Task Management (CRUD)

| Action   | API Route       | Description              |
|----------|------------------|--------------------------|
| Create   | `POST /tasks`    | Adds a new task          |
| Read     | `GET /tasks`     | Fetches all tasks        |
| Update   | `PUT /tasks/:id` | Updates selected task    |
| Delete   | `DELETE /tasks/:id` | Deletes selected task |

---

## 🧪 Code Samples

### ✅ Backend - Create Task

```js
app.post('/tasks', async (req, res) => {
    const { taskName, dueDate } = req.body;
    const newTask = new Task({ taskName, dueDate });
    await newTask.save();
    res.status(201).json({ message: 'Task created' });
});
```

### 🧑‍💻 Frontend - Add Task

```js
const handleAddTask = () => {
    axios.post('/tasks', { taskName, dueDate })
        .then(res => dispatch(addTask(res.data)))
        .catch(err => console.error(err));
};
```

## 📈 Future Improvements

- 🔔 Push Notifications for Task Reminders
- 👥 Collaborative Task Lists (Teams)
- 📊 Task Analytics Dashboard

---

## 🧑‍💻 Author

**Manoj Kumar Aulakagari**  
- 🔗 [LinkedIn](https://www.linkedin.com/in/manoj-kumar-a-21ab69258/)  
- 💻 [GitHub](https://github.com/ManojCodeCraft)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE)
