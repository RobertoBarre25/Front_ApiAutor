# front_ApiAutor

A **React + Vite** frontend application for managing authors via an API.  
Includes features for listing, searching, creating, editing, and deleting authors.

---

## 💻 Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)  
- **npm** (comes with Node.js) or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tu-usuario/front_ApiAutor.git
   cd front_ApiAutor
   ```

2. Install dependencies:

   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn
   ```

### Running the app in development mode

Start the development server with hot reload:

```bash
npm run dev
```
or
```bash
yarn dev
```

Open your browser and go to the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

---

## ⚙️ Available Scripts

| Command         | Description                                      |
|-----------------|------------------------------------------------|
| `dev`           | Run the app in development mode with hot reload|
| `build`         | Build the production-ready app into `dist/`    |
| `preview`       | Preview the production build locally            |

Run scripts using:

```bash
npm run <script-name>
```
or
```bash
yarn <script-name>
```

---

## 📁 Key Features

- 📄 **Author listing** with pagination and sorting (`AutorTable.jsx`)  
- 🔎 **Search authors by ID** (`BuscarPorIdCard.jsx`)  
- 🔍 **Search authors by name** (`BuscarPorNombreCard.jsx`)  
- ✍️ **Create new author** (`CrearAutorCard.jsx` + `CrearAutorModal.jsx`)  
- ✏️ **Edit and delete authors** (modals: `ModalEditarAutor.jsx` & `ModalEliminarAutor.jsx`)  
- 🔐 **User authentication screens:** Login, Register, Forgot Password, Reset Password  
- ⏳ **Loading spinners** (`Spinner.jsx`)  
- 🎨 **Styled components** with dedicated CSS files  

---

## 📬 Contact

If you find any issues or want to contribute, feel free to open an issue or pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

*Made with ❤️ using React + Vite*
