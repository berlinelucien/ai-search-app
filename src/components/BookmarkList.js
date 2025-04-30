import React from "react";

function BookmarkList({ bookmarks }) {
	return (
		<div style={{ marginTop: "20px" }}>
			<h4>Bookmarks</h4>
			<ul>
				{bookmarks.map((item, index) => (
					<li key={index}>
						<strong>{item.query}</strong>: {item.response}
					</li>
				))}
			</ul>
		</div>
	);
}

export default BookmarkList;
