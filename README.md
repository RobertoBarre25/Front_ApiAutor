front_ApiAutor

A React + Vite frontend application for managing authors via an API.  
Includes features for listing, searching, creating, editing, and deleting authors.

---

💻 Getting Started

Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js) or yarn

Installation

1. Clone the repository:
   git clone https://github.com/RobertoBarre25/front_ApiAutor.git
   cd front_ApiAutor

2. Install dependencies:
   npm install
   or if you use yarn:
   yarn

Running the app in development mode

npm run dev
or
yarn dev

Open your browser at the URL shown in the terminal (usually http://localhost:5173).

---

⚙️ Available Scripts

- dev — Run the app in development mode with hot reload.
- build — Build the production-ready app into the dist/ folder.
- preview — Preview the production build locally.

Run scripts with:
npm run <script-name>
or
yarn <script-name>

---

📁 Key Features

- Author listing with pagination and sorting (AutorTable.jsx)
- Search authors by ID (BuscarPorIdCard.jsx)
- Search authors by name (BuscarPorNombreCard.jsx)
- Create new author (CrearAutorCard.jsx + CrearAutorModal.jsx)
- Edit and delete authors (modals: ModalEditarAutor.jsx & ModalEliminarAutor.jsx)
- User authentication screens: Login, Register, Forgot Password, Reset Password
- Loading spinners (Spinner.jsx)
- Styled components with dedicated CSS files

---

📬 Contact

If you find any issues or want to contribute, feel free to open an issue or pull request.

---

📄 License

MIT License

---

Made with ❤️ using React + Vite
