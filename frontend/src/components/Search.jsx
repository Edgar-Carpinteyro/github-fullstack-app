import { useState } from "react";

const Search = ({ onSearch }) => {
	const [username, setUsername] = useState("");

	return (
		<form onSubmit={(e) => onSearch(e, username)}>
			<br />
			<label htmlFor='default-search' className="search-label">
				Search For a Github User Below
			</label>
			<div className="submit-input">
				<input
					type='search'
					id='default-search'
					placeholder='i.e. johndoe'
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				
				<button
					type='submit'
					className="search-button"
				>
					Search
				</button>
			</div>
		</form>
	);
};
export default Search;
