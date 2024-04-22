import { FC, useEffect } from "react";
import Input from "../input/Input";
import Dropdown from "../dropdown/Dropdown";
import useAppContext from "../../hooks/useAppContext";
import useTranslate from "../../hooks/useTranslate";
import useItems from "../../hooks/useItems";
import "./jobForm.style.scss";

type JobFormType = {
  formTitle: string;
  onChange: () => void;
  actionButtons: () => React.ReactNode;
  inputId: string;
  inputLabel: string;
};

const JobForm: FC<JobFormType> = ({
  onChange,
  actionButtons,
  formTitle,
  inputId,
  inputLabel,
}) => {
  const { filter } = useAppContext();
  const { translate } = useTranslate();
  const { statusItems, typeItems, sortItems } = useItems();

  return (
    <section className="form">
      <h3 className="form-title">{formTitle}</h3>
      <div>
        <form>
          <div className="form-wrapper">
            <Input
              onchange={onChange}
              value={filter.search}
              name={inputId}
              id={inputId}
              label={inputLabel}
              small
            />
            <Dropdown
              selected={filter.status}
              items={statusItems}
              onSelect={onChange}
              label={translate("status")}
            />
            <Dropdown
              selected={filter.type}
              items={typeItems}
              onSelect={onChange}
              label={translate("type")}
            />
            <Dropdown
              selected={filter.sort}
              items={sortItems}
              onSelect={onChange}
              label={translate("sort")}
            />
          </div>
          {actionButtons()}
        </form>
      </div>
    </section>
  );
};

export default JobForm;
