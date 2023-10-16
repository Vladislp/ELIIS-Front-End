// DropdownMenu.js
import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownMenu({ id, title, items }) {
  return (
    <DropdownButton id={id} title={title}>
      {items.map((item, index) => (
        <Dropdown.Item key={index} href={item.link}>
          {item.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default DropdownMenu;
