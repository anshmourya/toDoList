import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ListData } from "../../hooks/ListHooks/ListData";
import PlusBtn from "../buttons/Editbtns/PlusBtn";

function AddList({ title }) {
  // Accessing the lists data and addList function from the ListData context
  const { addList, lists } = useContext(ListData);

  // State to store the data of a single list item
  const [singleListData, setSingleListData] = useState({ id: 0, title: title });

  // Function to handle adding a new list
  const handleAddList = () => {
    if (!title) {
      if (!singleListData.title) {
        toast("List Can't Be Empty", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
        });
      } else {
        const newList = {
          id: singleListData.title,
          title: singleListData.title,
        };
        addList(newList);
        setSingleListData({ id: "", title: "" });
        console.log(lists);
      }
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
        {/* Render the PlusBtn component only if the title prop is not provided */}
        {!title && <PlusBtn fun={handleAddList} />}
      </div>
      <ToastContainer />
    </>
  );
}

export default AddList;
