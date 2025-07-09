import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { formatDate } from "../../utils";

import "./styles.css";

const Filters = ({ value, onChange }) => {
  const { categories } = useContext(AppContext);

  return (
    <div className="filters">
      <label>Category</label>
      <select
        name="category"
        value={value.category || ""}
        onChange={(ev) => onChange({ ...value, category: ev.target.value })}
        required
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <label>From</label>
      <input
        type="date"
        name="dateFrom"
        value={formatDate(value.from)}
        onChange={(ev) => {
          if (
            new Date(ev.target.value).getTime() > new Date(value.to).getTime()
          ) {
            alert("Date From must be less than or equal Date To.");
            return;
          }

          onChange({ ...value, from: new Date(ev.target.value) });
        }}
      />

      <label>To</label>
      <input
        type="date"
        name="dateTo"
        value={formatDate(value.to)}
        onChange={(ev) => {
          if (
            new Date(ev.target.value).getTime() < new Date(value.from).getTime()
          ) {
            alert("Date To must be greater than or equal Date From.");
            return;
          }

          onChange({ ...value, to: new Date(ev.target.value) });
        }}
      />
    </div>
  );
};

export default Filters;
