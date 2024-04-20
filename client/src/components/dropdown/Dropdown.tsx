import React, { useState, useRef, useEffect } from "react";
import "./dropdown.style.scss";
import {
  DropdownProps,
  DropdownItem,
} from "../../@types/components/componentTypes";

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item.id);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const temp = selected ? selected : items[0];
    setSelectedItem(temp);
  }, [items, selected]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer", marginBottom: "10px" }}
        className="dropdown__selected"
      >
        {selectedItem && selectedItem.text}
      </div>
      {isOpen && (
        <div className="dropdown__items">
          {items.map((item) => (
            <div
              className={`dropdown__item ${
                selected?.id === item.id ? "selected" : ""
              }`}
              key={item.id}
              onClick={() => handleSelect(item)}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
