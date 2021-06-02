//npm packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//project files

export const MenuFilter = ({ view,onChange }) => {
	const handleClick = (e) => {
		return onChange(e);
	};
	return (
		<div className="filtering-menu mb-2">
			<FontAwesomeIcon
				size="lg"
				icon={view? "border-all":"list"}
				className="clickable hoverable"
				onClick={handleClick}
			/>
		</div>
	);
};
