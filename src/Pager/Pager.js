import { useState } from "react";
import "./Pager.css";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";

const Pager = ({ pageCt, buttonCt }) => {

  // Track the current page in state
  const [currentPage, setCurrentPage] = useState(null);

  // Function to update current page in state 
  const setPage = (e) => {
    setCurrentPage(e.target.dataset.pg);
  };

  // Function to calculate the previous page
  const prevPage = (pg) => {
    return pg > 1 ? parseInt(pg) - 1 : 1;
  }

  // Function to calculate the next page
  const nextPage = (pg) => {
    return pg < parseInt(pageCt) ? parseInt(pg) + 1 : pageCt;
  }

  // TO DO:  Set the initial page

  // To do: refactor to generate list based on provided values, rewrite the list based on the current page
  return <Panel>
    {/* TEMP FOR TESTING */}
    <div>Total Buttons: {buttonCt}, Total Pages:  {pageCt},  Current Page:  {currentPage}</div>
    <Button text="<" data-pg={prevPage(currentPage)} onClick={setPage} />
    <Button text="1" data-pg="1" active={currentPage === "1"} onClick={setPage} />
    <Button text="2" data-pg="2" active={currentPage === "2"} onClick={setPage} />
    <Button text="..." data-pg="3" active={currentPage === "3"} onClick={setPage} />
    <Button text={pageCt} data-pg={pageCt} active={currentPage === pageCt} onClick={setPage} />
    <Button text=">" data-pg={nextPage(currentPage)} onClick={setPage} />
  </Panel>;
};

export default Pager;
