import { Dispatch } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
export type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export const SizeDropdown: React.FC<{
  setSize: Dispatch<React.SetStateAction<Size | undefined>>;
  size: string | undefined;
  display: boolean;
}> = ({ setSize, size, display }) => {
  const title = size ? size.toUpperCase() : '-';

  function isSize(eventKey: string): eventKey is Size {
    return ['xs', 's', 'm', 'l', 'xl', 'xxl'].includes(eventKey);
  }

  const handleSelect = (eventKey: string | null) => {
    if (eventKey && isSize(eventKey)) {
      setSize(eventKey);
    }
  };
  //   const handleSelect = (eventKey: string | null) => {
  //     if (eventKey && isSize(eventKey)) {
  //       setSize(eventKey);
  //     }
  //   };
  //   const handleSelect = (eventKey: string | null) => {
  //     if (eventKey && isSize(eventKey)) {
  //       setProductOrder((prev) => ({
  //         ...prev,
  //         size: eventKey
  //       }));
  //     }
  //   };

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
