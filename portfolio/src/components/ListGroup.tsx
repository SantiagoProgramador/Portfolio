import { useState } from "react";

interface Props{
    onSelectItem: (item: string) => void;
    items: string[];
    heading: string;
}

function ListGroup({items,heading,onSelectItem}: Props) {
  const [isActive, setSelectedIndex] = useState(-1);
  
  
  return (
    <>
      <h2 className="text-center">{heading}</h2>
      <ul className="list-group">
        {items.map((language,index) => (
          <li key={language} className={isActive === index ? "list-group-item active" : "list-group-item"} onClick={() => {setSelectedIndex(index)
            onSelectItem(language)
          }}>
            {language}
          </li>
        ))}
      </ul>
      
    </>
  );
}

export default ListGroup;
