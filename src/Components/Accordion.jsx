import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "lorem ipeos klkfrdwqe hello every one lorem ipeos klkfrdwqe hello every onelorem ipeos klkfrdwqe hello every onelorem ipeos klkfrdwqe hello every onelorem ipeos klkfrdwqe hello every onelorem ipeos klkfrdwqe hello every one",
  },
  {
    id: 2,
    title: "Accordion two",
    text: "lorem ipeos klkfrdwqe hello every one lorem ipeos klkfrdwqe hello every onelorem ipeos klkfrdwqe hello every onelorem ipeos klkfrdwqe hello every onelorem ipeos klkfrdwqe hello every onelorem ipeos klkfrdwqe hello every one",
  },
  {
    id: 3,
    title: "Accordion three",
    text: "lorem ipeos klkfrdwqe hello every one lorem ipeos klkfrdwqe hello every onelorem ipeos klkfrdwqe hello every onelorem ipeos klkfrdwqe hello every onelorem ipeos klkfrdwqe hello every onelorem ipeos klkfrdwqe hello every one",
  },
];
function Accordion() {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AcordionItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Accordion;
function AcordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const style = {
    width: "1.2rem",
    transition: "all 0.2s ease-out",
  };
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div>{item.title}</div>
        <ChevronDownIcon 
        className="accordion-item__chevron"
          // style={{
          //   width: "1.2rem",
          //   transition: "all 0.6s ease-in-out",
          //   transformOrigin: "center",
          //   rotate: isOpen ? "180deg" : "0deg",
          // }}
        />
        {/* <ChevronDownIcon style={style} /> */}
      </div>
      {/* <div className="accordion-item__content">{item.text}</div> */}
      {isOpen && <div className="accordion-item__content">{item.text}</div>}
      {/* // second way */}
    </div>
  );
}
