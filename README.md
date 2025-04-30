# 🔍 AI Search App

An AI-powered search application built with React and OpenAI’s GPT API. Ask natural language questions and get intelligent, conversational answers — just like ChatGPT.

## ✨ Features

- ✅ Instant answers using OpenAI GPT
- 📜 Search history (stored in `localStorage`)
- 🔖 Bookmark results for quick access
- 🧠 Simple, clean UI for fast querying
- 🗂 Built with React + Axios (no backend required)

## 🚀 Getting Started

### 1. Clone the repo

```bash ```
git clone https://github.com/berlinelucien/ai-search-app.git
cd ai-search-app

### 2. Install dependencies
npm install

### 3. Setup your own OpenAI API Key
Create a file called .env.development in the root:
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here

### 4. Start the development server
npm start

### 🧠 How It Works
The app sends your query to OpenAI’s Chat Completions API (gpt-3.5-turbo) and displays the result. History and bookmarks are saved in localStorage.

### 🛠 Tech Stack
React
Axios
OpenAI API

### 📁 Folder Structure
src/
├── components/
│   ├── SearchBar.js
│   ├── ResultCard.js
│   ├── HistoryList.js
│   └── BookmarkList.js
├── App.js
└── index.js


### 📌 To-Do / Ideas
 -[ ] Add delete button for bookmarks

 -[ ] Tab-based view switcher (Search / Bookmarks)

  -[ ] Firebase or backend integration for user accounts

  -[ ] Dark mode toggle

