import React, { useState, useContext } from "react";

import { ListData } from "../../hooks/ListHooks/ListData";
import PlusBtn from "../buttons/Editbtns/PlusBtn";

function AddList({ title }) {
  const { addList, lists } = useContext(ListData);
  const [singleListData, setSingleListData] = useState({ id: 0, title: title });

  const handleAddList = () => {
    if (!title) {
      if (!singleListData.title) {
        alert("Please select a title");
      } else {
        const newList = {
          id: singleListData.title,
          title: singleListData.title,
        };
        addList(newList);
        setSingleListData({ id: "", title: "" });
        console.log(lists);
      }
    } else {
      console.log("ansh");
    }
  };

  return (
    <>
      <div className="flex items-center font-semibold bg-gray-600 rounded-xl placeholder:text-gray-400 addlist ">
        <input
          type="text"
          name="addlist"
          id="addlist"
          placeholder="Add Todo-List"
          className="text-lg capitalize bg-transparent outline-none"
          value={singleListData.title || ""}
          onChange={(e) =>
            setSingleListData({ ...singleListData, title: e.target.value })
          }
        />
        {!title && <PlusBtn fun={handleAddList} />}
      </div>
    </>
  );
}

export default AddList;
