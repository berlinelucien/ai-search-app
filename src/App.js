import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import HistoryList from "./components/HistoryList";
import BookmarkList from "./components/BookmarkList";
import "./App.css";

function App() {
	const [result, setResult] = useState('');
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(false);
	const [history, setHistory] = useState([]);
	const [bookmarks, setBookmarks] = useState([]);

	useEffect(() => {
		const savedHistory =
			JSON.parse(localStorage.getItem("searchHistory")) || [];
		const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
		setHistory(savedHistory);
		setBookmarks(savedBookmarks);
	}, []);

	const saveToLocalStorage = (key, data) => {
		localStorage.setItem(key, JSON.stringify(data));
	};

 const handleSearch = async (userQuery) => {
		setQuery(userQuery);
		setLoading(true);
		setResult("");

		try {
			const response = await axios.post(
				"https://api.openai.com/v1/chat/completions",
				{
					model: "gpt-3.5-turbo",
					messages: [{ role: "user", content: query }],
					temperature: 0.7,
				},
				{
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
						"Content-Type": "application/json",
					},
				}
			);

			const answer = response.data.choices[0].message.content.trim();
			setResult(answer);

			const newHistory = [{ query: userQuery, response: answer }, ...history];
			setHistory(newHistory);
			saveToLocalStorage("searchHistory", newHistory);
		} catch (error) {
			console.error(error);
			setResult("Error fetching AI response");
		}

		setLoading(false);
 };

	const handleBookmark = () => {
		const newBookmark = { query, response: result };
		const updatedBookmarks = [newBookmark, ...bookmarks];
		setBookmarks(updatedBookmarks);
		saveToLocalStorage("bookmarks", updatedBookmarks);
	};

  return (
		<div style={{ padding: "40px", fontFamily: "Arial" }}>
			<h1>AI-Powered Search</h1>
			<SearchBar onSearch={handleSearch} />
			{loading && <p>Loading...</p>}
			{result && (
				<>
					<ResultCard result={result} />
					<button onClick={handleBookmark}>🔖 Bookmark</button>
				</>
			)}
			<HistoryList history={history} onClick={handleSearch} />
			<BookmarkList bookmarks={bookmarks} />
		</div>
	);
}

export default App;
