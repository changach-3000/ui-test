# UI TEST

This project is a clone of a sample User Interface (UI). It is built using React and styled using tailwind and includes some mock data served by a JSON server. The steps below will guide you through setting up and running the project locally.

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/changach-3000/ui-test.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd ui-test
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Start the JSON server:**

    ```bash
    npx json-server --watch db.json
    ```

    This command will start a JSON server that serves the mock data from `db.json` file. The server will run on `http://localhost:3000` by default.

5. **Start the React application:**

    ```bash
    npm start
    ```

    This command will start the React development server. Open your browser and navigate to `http://localhost:4000` (the default port specified by create-react-app) to view the application.

## Usage

After completing the installation steps, you should be able to see the UI in your browser. You can interact with the sidebar, view profile details, and toggle the sidebar visibility.

## Author

This project was created by Chang'ach. Feel free to reach out if you have any questions or feedback.

---

Happy coding!