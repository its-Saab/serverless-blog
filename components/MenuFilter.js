//npm packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//project files

const LIST_VIEW_ICONS = ["list", "border-all"];
const DATE_FILTERING_ICONS = ["sort-numeric-down", "sort-numeric-up"];

export const MenuFilter = ({ onChange, filter }) => {

	return (
		<div className="filtering-menu mb-2">
			<FontAwesomeIcon
				size="lg"
				icon={LIST_VIEW_ICONS[filter.view.list]}
				className="clickable hoverable mr-3"
				onClick={()=> onChange('view', {list: +!filter.view.list})}
			/>
			<FontAwesomeIcon
				className="clickable hoverable mr-3"
				size="lg"
				icon={DATE_FILTERING_ICONS[filter.date.asc]}
				onClick={() => onChange('date', {asc: +!filter.date.asc})}
			/>
		</div>
	);
};
