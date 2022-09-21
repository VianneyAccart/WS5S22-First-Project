import { useState, useEffect } from "react";
import { createWilder, fetchSchools } from "./rest";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getErrorMessage } from "../../utils";
import { School } from "../../types";

const CreateWilder = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [schools, setSchools] = useState<null | School[]>(null);
  const [school, setSchool] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const schools = await fetchSchools();
        setSchools(schools);
      } catch (error) {
        toast.error(getErrorMessage(error), {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    })();
  }, []);

  const submit = async (): Promise<void> => {
    try {
      await createWilder(firstname, lastname, school);
      toast.success(`Wilder ${firstname} ${lastname} created successfully !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setFirstname("");
      setLastname("");
      setSchool("");
    } catch (error) {
      toast.error(getErrorMessage(error), {
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
            required
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
            required
          ></input>
        </label>
        <br />
        <label htmlFor="school">
          School
          <br />
          <select
            name="school"
            id="school"
            onChange={(event) => {
              setSchool(event.target.value);
            }}
            value={school ? school : ""}
          >
            <option value="" disabled>
              Select a school
            </option>
            {schools?.map((school: School) => (
              <option key={school.id} value={school.id}>
                {school.schoolName}
              </option>
            ))}
          </select>
        </label>
        <br />
        <input className="mt-2" type="submit" value="Submit" />
      </form>
      <ToastContainer />
    </>
  );
};

export default CreateWilder;
