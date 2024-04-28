import { FC, useEffect } from "react";
import Input from "../input/Input";
import Dropdown from "../dropdown/Dropdown";
import useAppContext from "../../hooks/useAppContext";
import useTranslate from "../../hooks/useTranslate";
import useItems from "../../hooks/useItems";
import "./jobForm.style.scss";

type JobFormType = {
  formTitle: string;
  onChange: (state?: any) => void;
  actionButtons: () => React.ReactNode;
  sort?: boolean;
  location?: boolean;
  company?: boolean;
  state: any;
  search?: boolean;
  jobTitle?: boolean;
};

const JobForm: FC<JobFormType> = ({
  onChange,
  actionButtons,
  formTitle,
  sort,
  company,
  location,
  state,
  search,
  jobTitle,
}) => {
  const { translate } = useTranslate();
  const { statusItems, typeItems, sortItems } = useItems();

  const handleOnChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      const { name, value } = e.target;
      const tempState = { ...state, [name]: value };
      console.log(tempState);
      onChange(tempState);
    }
  };

  const handleOnChangeDropdown = (e: {
    name: string;
    item: { id: string; text: string };
  }) => {
    const tempState = {
      ...state,
      [e.name]: { id: e.item.id, text: e.item.text },
    };
    onChange(tempState);
  };

  return (
    <section className="form">
      <h3 className="form-title">{formTitle}</h3>
      <div>
        <form>
          <div className="form-wrapper">
            {search && (
              <Input
                onchange={handleOnChange}
                value={state.search!}
                name={"search"}
                id={"search"}
                label={translate("search")}
                small
              />
            )}
            {jobTitle && (
              <Input
                onchange={handleOnChange}
                value={state.jobTitle!}
                name={"jobTitle"}
                id={"jobTitle"}
                label={translate("add_job")}
                small
              />
            )}
            {location && (
              <Input
                onchange={handleOnChange}
                value={state.location!}
                name={"location"}
                id={"location"}
                label={translate("location")}
                small
              />
            )}
            {company && (
              <Input
                onchange={handleOnChange}
                value={state.company!}
                name={"company"}
                id={"company"}
                label={translate("company")}
                small
              />
            )}
            <Dropdown
              name="status"
              selected={state.status}
              items={statusItems}
              onSelect={handleOnChangeDropdown}
              label={translate("status")}
            />
            <Dropdown
              name="type"
              selected={state.type}
              items={typeItems}
              onSelect={handleOnChangeDropdown}
              label={translate("type")}
            />
            {sort && (
              <Dropdown
                name="sort"
                selected={state.sort}
                items={sortItems}
                onSelect={handleOnChangeDropdown}
                label={translate("sort")}
              />
            )}
          </div>
          {actionButtons()}
        </form>
      </div>
    </section>
  );
};

export default JobForm;
