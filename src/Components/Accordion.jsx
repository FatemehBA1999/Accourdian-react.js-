import { useState } from "react";

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
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {item.title}
      </div>
      {/* <div className="accordion-item__content">{item.text}</div> */}
      {isOpen && <div className="accordion-item__content">{item.text}</div>} 
      {/* // second way */}
    </div>
  );
}
