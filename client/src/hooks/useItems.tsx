import useTranslate from "./useTranslate";

const useItems = () => {
  const { translate } = useTranslate();
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
      id: "declined",
      text: translate("declined"),
    },
    {
      id: "job_offer",
      text: translate("job_offer"),
    },
  ];

  const typeItems = [
    {
      id: "all",
      text: translate("all"),
    },
    {
      id: "full_time",
      text: translate("full_time"),
    },
    {
      id: "part_time",
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

  return { statusItems, typeItems, sortItems };
};

export default useItems;
