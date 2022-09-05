import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

let AddContact = () => {
  let navigate = useNavigate();
  const [emp, setEmp] = useState({
    name: "",
    email: "",
    mobile: "",
    companyName: "",
    imgUrl: "",
    group: "",
  });

  const addContact = async () => {
    navigate("/Contacts/list");
    const response = await fetch("http://localhost:9000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emp),
    });
    const data = await response.json(); 
    if(data){
      navigate("/Contacts/list")
      alert("Contact added successfully")
    }
    
  }



  return (
    <>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-success fw-bold">Create Contact</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={emp.name}
                    onChange={(e) => setEmp({ ...emp, name: e.target.value })}
                  ></input>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Photo url"
                    className="form-control"
                    value={emp.imgUrl}
                    onChange={(e) => setEmp({ ...emp, imgUrl: e.target.value })}
                  ></input>
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    placeholder="Mobile"
                    className="form-control"
                    value={emp.mobile}
                    onChange={(e) => setEmp({ ...emp, mobile: e.target.value })}
                  ></input>
                </div>
                <div className="mb-2">
                  <input
                    type="Email"
                    placeholder="Email"
                    className="form-control"
                    value={emp.email}
                    onChange={(e) => setEmp({ ...emp, email: e.target.value })}
                  ></input>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="form-control"
                    value={emp.companyName}
                    onChange={(e) =>
                      setEmp({ ...emp, companyName: e.target.value })
                    }
                  ></input>
                </div>
                <div className="mb-2">
                  <select
                    className="form-control"
                    value={emp.group}
                    onChange={(e) => setEmp({ ...emp, group: e.target.value })}
                  >

                    <option  >Select Group</option>
                    <option>Friend</option>
                    <option>Family</option>
                    <option>Collegue</option>
                  </select>
                </div>
                <div className="mb-2">
                  {/* <input type="submit" value="Create" className="form-control bg-success"></input> */}
                  <button className="btn btn-success me-2"
                    onClick={() => {
                      addContact();
                      setEmp({
                        name: "",
                        email: "",
                        mobile: "",
                        companyName: "",
                        imgUrl: "",
                        group: "",
                      });
                    }
                    }
                  >Create</button>
                  <Link to={"/contacts/list"} className="btn btn-dark">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AddContact;
