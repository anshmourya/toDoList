import React, { useContext } from "react";
import { ListData } from "../../../hooks/ListHooks/ListData";
import SectionNav from "../../../components/NavBar/SectionNav";
import Lists from "../../../components/List/Lists.jsx";
import RightBar from "../../../components/NavBar/RightBar";

function Content() {
  const { lists } = useContext(ListData);

  return (
    <>
      <div className="aa">
        <SectionNav />
        <div className="grid justify-center grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {lists.map((list) => {
            return (
              <>
                <Lists key={list.id} data={list} />
              </>
            );
          })}
          <Lists />
        </div>
      </div>
      <RightBar />
    </>
  );
}

export default Content;
