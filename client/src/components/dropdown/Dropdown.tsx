import { FC, useState } from "react";
import "./dropdown.style.scss";

type DropdownType = {
  selected: string;
  action: () => void;
  items: DropdownItem[];
};

type DropdownItem = {
  id: string;
  text: string;
  icon?: any;
};

const Dropdown: FC<DropdownType> = ({ selected, action, items }) => {
  const [show, setShow] = useState(false);

  const renderDropdownItem = (item: DropdownItem, takeAction: () => void) => {
    const { id, icon, text } = item;
    return (
      <section key={id} onClick={takeAction}>
        {icon && icon}
        <span>{text}</span>
      </section>
    );
  };

  const selectedItem = items.find((i) => i.id === selected);

  return (
    <section className="dropdown">
      <div className="dropdown__selected" onClick={() => setShow(!show)}>
        {selectedItem && renderDropdownItem(selectedItem, action)}
      </div>
      {show && (
        <div className="dropdown__items">
          {items.map((item) => renderDropdownItem(item, action))}
        </div>
      )}
    </section>
  );
};

export default Dropdown;
