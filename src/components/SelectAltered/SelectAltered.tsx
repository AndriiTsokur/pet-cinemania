import { useSelector } from 'react-redux';
import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { selectLocal } from '@/redux';

type PropsT = {
	list: string[];
	label: string;
	onChange: (e: SelectChangeEvent) => void;
	value: string;
};

export const SelectAltered: React.FC<PropsT> = ({
	list,
	label,
	onChange,
	value,
}) => {
	const { isDarkMode } = useSelector(selectLocal);

	const bgColor = isDarkMode ? '#111111' : '#ffffff';
	const colorPrimary = isDarkMode ? '#ffffff' : '#111111';
	const colorSecondary = isDarkMode ? '#f8f8f8' : '#282828';
	const colorGreyReverted = !isDarkMode ? '#b7b7b7' : '#595959';
	const colorAccent = '#f87719';

	return (
		<FormControl sx={{ mb: 3, minWidth: 200 }} size="small">
			<Select
				value={value}
				onChange={onChange}
				IconComponent={KeyboardArrowDownIcon}
				displayEmpty
				sx={{
					marginTop: '0px',
					borderRadius: '8px',
					backgroundColor: 'transparent',
					fontFamily: 'Roboto',
					fontSize: '14px',
					fontWeight: 500,
					color: colorSecondary,

					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: colorPrimary,
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: colorPrimary,
					},
					'& .MuiSelect-icon': {
						color: colorSecondary,
					},
				}}
				MenuProps={{
					PaperProps: {
						sx: {
							backgroundColor: bgColor,
							border: `1px solid ${colorPrimary}`,
							borderRadius: '8px',
							marginTop: '4px',
							'& .MuiMenuItem-root': {
								fontFamily: 'Roboto',
								fontSize: '14px',
								fontWeight: 500,
								color: colorSecondary,
								borderBottom: `1px solid ${colorPrimary}`,
								'&:last-child': {
									borderBottom: 'none',
								},
								'&:hover': {
									color: colorAccent,
								},
							},
						},
					},
					MenuListProps: {
						sx: {
							'& .Mui-selected': {
								backgroundColor: colorGreyReverted,
								color: colorAccent,
							},
						},
					},
				}}
			>
				<MenuItem value="">
					<em>{label}</em>
				</MenuItem>
				{list.map((item) => (
					<MenuItem key={item} value={item}>
						{item}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
