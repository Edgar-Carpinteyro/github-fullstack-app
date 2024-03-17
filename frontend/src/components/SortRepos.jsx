const SortRepos = ({ onSort, sortType }) => {
    const BUTTONS = [
		{ type: "recent", text: "Most Recent" },
		{ type: "stars", text: "Most Stars" },
		{ type: "forks", text: "Most Forks" },
	];
    
    return (
		<div className="sort-buttons">
			{BUTTONS.map((button) => (
				<button
					key={button.type}
					type='button'
					onClick={() => onSort(button.type)}
				>
					{button.text}
				</button>
			))}
		</div>
	);
}

export default SortRepos