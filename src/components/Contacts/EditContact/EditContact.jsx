import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

let EditContact = () => {
  const [data, setData] = useState({});
  let params = useParams();
  let id = params.id;
  const navigate = useNavigate();

  const fechData = async () => {
    const response = await fetch(`http://localhost:9000/contacts/${id}`);
    const data = await response.json();
    setData(data);
  };
  
  const updateContact = async (item) => {
    navigate("/Contacts/list")
    const response = await fetch(`http://localhost:9000/contacts/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    console.log('data', data);
    if (data){navigate("/Contacts/list")} 
  };

  useEffect(() => {
    fechData();
  }, [id]);

  return (
    <>
      <h3
        className="text-center"
      >EditContact</h3> 
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-success fw-bold">Update Contact</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => {
                      setData({ ...data, name: e.target.value });
                    }}
                    className="form-control"
                    value={data.name}
                  ></input>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Photo url"
                    className="form-control"
                    value={data.imgUrl}
                    onChange={(e) => {
                      setData({ ...data, imgUrl: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    placeholder="Mobile"
                    className="form-control"
                    value={data.mobile}
                    onChange={(e) => {
                      setData({ ...data, mobile: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="mb-2">
                  <input
                    type="Email"
                    placeholder="Email"
                    className="form-control"
                    value={data.email}
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="form-control"
                    value={data.companyName}
                    onChange={(e) => {
                      setData({ ...data, companyName: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="mb-2">
                  <select
                    className="form-control"
                    value={data.group}
                    onChange={(e) => {
                      setData({ ...data, group: e.target.value });
                    }}
                  >
                    <option>Select Group</option>
                    <option>friends</option>
                    <option>family</option>
                    <option>collegue</option>
                  </select>
                </div>
                <div className="mb-2">
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      updateContact(data);
                    }}
                  >
                 Update 
                  </button>
                  <Link to={"/contacts/list"} className="btn btn-dark">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img
                className="contact-img"
                src="data:image/png;base64,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"
                alt="img"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default EditContact;
