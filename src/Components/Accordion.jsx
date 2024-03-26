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
  const [open, setOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item) => (
        <AcordionItem item={item} key={item.id} setOpen={setOpen} open={open} />
      ))}
    </div>
  );
}

export default Accordion;
function AcordionItem({ item, setOpen, open }) {
  // const [isOpen, setIsOpen] = useState(false);
  // a state undependency of other state

  // all state are dependency || it is a state give id => 1,2,3,....
  const style = {
    width: "1.2rem",
    transition: "all 0.2s ease-out",
  };
  // const isOpen = item.id === open ? true : false; // this or below
  const isOpen = item.id === open;

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        // onClick={() => setIsOpen((isOpen) => !isOpen)}
        onClick={() => setOpen(item.id === open ? null : item.id)}
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
