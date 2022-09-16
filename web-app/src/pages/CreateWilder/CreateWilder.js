import { useState } from "react";
import { createWilder } from "./rest";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateWilder = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const submit = async () => {
    try {
      await createWilder(firstname, lastname);
      toast.success(`Wilder ${firstname} ${lastname} created successfully !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setFirstname("");
      setLastname("");
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <>
      <h2>Add new wilder</h2>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await submit();
        }}
      >
        <label htmlFor="firstname">
          Firstname
          <br />
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={(event) => {
              setFirstname(event.target.value);
            }}
          ></input>
        </label>
        <br />
        <label htmlFor="lastname">
          Lastname
          <br />
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastname}
            onChange={(event) => {
              setLastname(event.target.value);
            }}
          ></input>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <ToastContainer />
    </>
  );
};

export default CreateWilder;
