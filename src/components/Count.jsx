import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Count() {
  const [count, setcount] = useState(0);
  const [isButtonDisable, setisButtonDisable] = useState(false);

  const inc = () => {
    setcount(count + 1);
    console.log(count);
    if (isButtonDisable && true) {
      setisButtonDisable(false);
    }
  };
  const dec = () => {
    setcount(count - 1);
    if (count === 0) {
      setcount(count);
      setisButtonDisable(!isButtonDisable);
      console.log("count is zero");
      toast.error(" Button Disabled", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    console.log(count);
  };

  return (
    <>
      <h1 className="logo ">Hello world</h1>
      <h1>{count}</h1>
      <button className="logo" onClick={inc}>
        ➕
      </button>

      <button className="logo" onClick={dec} disabled={isButtonDisable}>
        {isButtonDisable ? "🚫" : "➖"}
      </button>
      <ToastContainer />
    </>
  );
}

export default Count;
