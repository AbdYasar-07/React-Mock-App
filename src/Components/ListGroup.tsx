import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  itemsLength: number;
  alias: string;
  onSelectItem: (item: string) => void;
}

function ListGroupComponent({
  items,
  itemsLength,
  heading,
  alias,
  onSelectItem,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleItemClick = (index: number, item: string) => {
    setSelectedIndex(index);
    onSelectItem(item);
  };

  return (
    <>
      <h3>
        {heading}{" "}
        <span className="badge bg-primary rounded-pill">{itemsLength}</span>
      </h3>
      <ul className="list-group">
        {itemsLength === 0 && <p>No city found.</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active d-flex justify-content-between align-items-start"
                : "list-group-item d-flex justify-content-between align-items-start"
            }
            key={item}
            onClick={() => handleItemClick(index, item)}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                {alias} {index + 1}
              </div>
              {item}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupComponent;
