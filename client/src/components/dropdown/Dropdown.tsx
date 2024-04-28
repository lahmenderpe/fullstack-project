import React, { useState, useRef, useEffect } from "react";
import "./dropdown.style.scss";
import {
  DropdownProps,
  DropdownItem,
} from "../../@types/components/componentTypes";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown: React.FC<DropdownProps> = ({
  name,
  items,
  onSelect,
  selected,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect({ name, item });
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
      {label ? (
        <div className="dropdown__label" onClick={() => setIsOpen(!isOpen)}>
          {label}
        </div>
      ) : (
        ""
      )}
      <section>
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer", marginBottom: "10px" }}
          className="dropdown__selected"
        >
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
      </section>
    </div>
  );
};

export default Dropdown;
