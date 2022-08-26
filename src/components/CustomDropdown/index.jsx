import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CustomDropdown = ({ title, firstText, secondText, thirdText }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);

	return (
		<div className='CustomDropdown'>
			<Dropdown isOpen={dropdownOpen} toggle={toggle} direction='down'>
				<DropdownToggle caret className='CustomDropdown-text'>
					{title}
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem>{firstText}</DropdownItem>
					<DropdownItem>{secondText}</DropdownItem>
					<DropdownItem>{thirdText}</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default CustomDropdown;
