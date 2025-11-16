const EventBubbleComponent = () => {
	const onParentClick = () => {
		alert("Parent Div Clicked");
	};
	const onChildClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		alert("Child Button Clicked");
	};

	return (
		<div className="bg-red-400 size-48" onClick={onParentClick}>
			<button onClick={onChildClick}> Press me </button>
		</div>
	);
};

export default EventBubbleComponent;
