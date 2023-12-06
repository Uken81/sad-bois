import { Dispatch } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export const SizeDropdown: React.FC<{
  setSize: Dispatch<React.SetStateAction<string>>;
  size: string;
  display: boolean;
}> = ({ setSize, size, display }) => {
  const title = size.toUpperCase();

  const handleSelect = (eventKey: string | null) => {
    if (!eventKey) {
      console.error('Size dropdown event key is null or undefined');
      return;
    }

    setSize(eventKey);
  };

  return display ? (
    <DropdownButton id="dropdown-item-button" title={title} onSelect={handleSelect}>
      <Dropdown.Item eventKey="xs">XS</Dropdown.Item>
      <Dropdown.Item eventKey="s">S</Dropdown.Item>
      <Dropdown.Item eventKey="m">M</Dropdown.Item>
      <Dropdown.Item eventKey="l">L</Dropdown.Item>
      <Dropdown.Item eventKey="xl">XL</Dropdown.Item>
      <Dropdown.Item eventKey="xxl">XXL</Dropdown.Item>
    </DropdownButton>
  ) : null;
};
