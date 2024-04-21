import { FC, useEffect, useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import Dropdown from "../dropdown/Dropdown";
import useAppContext from "../../hooks/useAppContext";
import { GrPowerReset } from "react-icons/gr";
import useTranslate from "../../hooks/useTranslate";

import "./filterForm.style.scss";

const FilterForm: FC = () => {
  const { updateFilterSet, filter, setInitialFilters } = useAppContext();
  const { translate, language } = useTranslate();

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
      text: translate("all"),
    },
    {
      id: "pending",
      text: translate("pending"),
    },
    {
      id: "interview",
      text: translate("interview"),
    },
    {
      id: "rejected",
      text: translate("rejected"),
    },
    {
      id: "job-offer",
      text: translate("job_offer"),
    },
  ];

  const typeItems = [
    {
      id: "all",
      text: translate("all"),
    },
    {
      id: "full-time",
      text: translate("full_time"),
    },
    {
      id: "part-time",
      text: translate("part_time"),
    },
  ];

  const sortItems = [
    {
      id: "latest",
      text: translate("latest"),
    },
    {
      id: "earliest",
      text: translate("earliest"),
    },
  ];

  useEffect(() => {
    const filterState = {
      search: "",
      status: { id: "all", text: translate(filter.status.id) },
      type: { id: "all", text: translate(filter.type.id) },
      sort: { id: "latest", text: translate(filter.sort.id) },
    };
    console.log("first");
    setInitialFilters(filterState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <section className="filter-form">
      <h3 className="filter-form-title">{translate("filter_form_title")}</h3>
      <div>
        <form>
          <div className="form-wrapper">
            <Input
              onchange={onFilterChange}
              value={filter.search}
              name="search"
              id="search"
              label={translate("search")}
              small
            />
            <Dropdown
              selected={filter.status}
              items={statusItems}
              onSelect={onFilterChange}
              label={translate("status")}
            />
            <Dropdown
              selected={filter.type}
              items={typeItems}
              onSelect={onFilterChange}
              label={translate("type")}
            />
            <Dropdown
              selected={filter.sort}
              items={sortItems}
              onSelect={onFilterChange}
              label={translate("sort")}
            />
          </div>
          <Button action={handleClearFilter} deleteBtn small>
            <div className="reset-wrapper">
              <GrPowerReset />
              {translate("clear_filters_button")}
            </div>
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FilterForm;
