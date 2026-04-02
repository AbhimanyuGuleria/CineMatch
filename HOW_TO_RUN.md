# How to Run the CineMatch Backend

Because your Windows PowerShell occasionally blocks default Node.js script execution policies, you might encounter an `npm : The term 'npm' is not recognized` error when trying to simply run `npm start`.

To effortlessly start your backend server every single time without ever changing your system security settings, completely skip `npm` and directly feed your `server.js` file straight to the Node engine itself!

## Step-by-Step Instructions

1. Open your terminal (PowerShell, Command Prompt, or VS Code terminal).
2. Make sure you are inside your project's `backend` directory. If you are not, navigate there:
   ```powershell
   cd i:\movie-recommender\backend
   ```
3. Copy and paste this exact command into the terminal and hit Enter:
   ```powershell
   & "C:\Program Files\nodejs\node.exe" server.js
   ```

*(Note for Git Bash users: you can typically just type `node server.js` directly since Git Bash ignores Windows PowerShell execution policies!)*

4. You will see a success message (`🎬 Movie Recommender Backend running on http://localhost:5000`).
5. Success! Keep this terminal open in the background, and open up your `index.html` file in your browser to browse all 105 movies natively!
