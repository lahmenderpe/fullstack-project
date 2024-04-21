import { FC, useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import Dropdown from "../dropdown/Dropdown";
import useAppContext from "../../hooks/useAppContext";
import "./filterForm.style.scss";

const FilterForm: FC = () => {
  const { updateFilterSet, filter } = useAppContext();

  const onFilterChange = () => {
    const temp = { ...filter };
  };

  const handleClearFilter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined
  ) => {
    e?.preventDefault();
  };

  const statusItems = [
    {
      id: "all",
      text: "all",
    },
    {
      id: "pending",
      text: "pending",
    },
    {
      id: "interview",
      text: "interview",
    },
    {
      id: "rejected",
      text: "rejected",
    },
    {
      id: "job-offer",
      text: "job offer",
    },
  ];

  const typeItems = [
    {
      id: "all",
      text: "all",
    },
    {
      id: "full-time",
      text: "full time",
    },
    {
      id: "part-time",
      text: "part time",
    },
  ];

  const sortItems = [
    {
      id: "latest",
      text: "latest",
    },
    {
      id: "earliest",
      text: "earliest",
    },
  ];

  return (
    <section className="filter-form">
      <h3>Filter Form</h3>
      <div>
        <form>
          <div className="form-wrapper">
            <Input
              onchange={onFilterChange}
              value={filter.search}
              name="search"
              id="search"
              label="Search"
              small
            />
            <Dropdown
              selected={filter.status}
              items={statusItems}
              onSelect={onFilterChange}
              label="Status"
            />
            <Dropdown
              selected={filter.type}
              items={typeItems}
              onSelect={onFilterChange}
              label="Type"
            />
            <Dropdown
              selected={filter.sort}
              items={sortItems}
              onSelect={onFilterChange}
              label="Sort"
            />
          </div>
          <Button action={handleClearFilter} deleteBtn small>
            Clear Filter
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FilterForm;
