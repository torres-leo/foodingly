import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Icon from '../Icon';

const CustomDropdown = ({ element, selected, selectedDefault, customClass }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);
	const [value, setValue] = useState(selected);

	const handleClick = (item) => () => {
		setValue(item);
	};

	const renderItems = () =>
		element.map((item) => (
			<DropdownItem key={item} onClick={handleClick(item)}>
				{item}
			</DropdownItem>
		));

	return (
		<div className={`CustomDropdown ${customClass}`}>
			<Dropdown isOpen={dropdownOpen} toggle={toggle} direction='down'>
				<DropdownToggle caret>
					{selected ? (
						<span className='CustomDropdown-options'>
							{value} <Icon className='fa-solid fa-angle-down' />
						</span>
					) : (
						selectedDefault
					)}
				</DropdownToggle>
				<DropdownMenu>{renderItems()}</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default CustomDropdown;
