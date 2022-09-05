import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

let ContactList = () => {
  const [contact, setContact] = useState();

  const fetchData = async () => {
    const response = await fetch("http://localhost:9000/contacts");
    const data = await response.json();
    setContact(data);
  };

  const deleteContact = async (id) => {
    const response = await fetch(`http://localhost:9000/contacts/${id}`, {
      method: "DELETE",
    }); 
    const data = await response.json();
    if(data){
      fetchData()
      alert("Contact deleted successfully")
    }

    
  };

  useEffect(() => {
    fetchData();
  }, []);

 

  return (
    <>
      <section className="contact-search">
        <div className="container">
          <div className="">
            <div className="grid">
              <div className="row">
                <div className="col">
                  <p className="h3">
                    Contact Manager
                    <Link to={"/Contacts/add"} className="btn btn-primary ms-2">
                      <i className="fa fa-plus-circle me-2"></i>
                      New
                    </Link>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 my-2">
                  <form className="row">
                    <form class="d-flex" role="search">
                      <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button class="btn btn-outline-primary" type="submit">
                        Search
                      </button>
                    </form>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {contact &&
        contact.map((item) => (
          <section className="contact-list">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row ">
                        <div className="col-md-4">
                          <img
                            className="contact-img"
                            src={item.imgUrl}
                            alt="img"
                          />
                        </div>
                        <div className="col-md-6 ">
                          <ul className="list-group">
                            <li className="list-group-item list-group-item-action">
                              Name:
                              <span className="fw-bold ms-2">{item.name}</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                              Mobile:
                              <span className="fw-bold ms-2">
                                {item.mobile}
                              </span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                              Email:
                              <span className="fw-bold ms-2">{item.email}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-2">
                          <Link
                            to={`/Contacts/view/${item.id}`}
                            className="btn btn-warning "
                          >
                            <i className="fa fa-eye"></i>
                          </Link>
                          <Link
                            to={`/Contacts/edit/${item.id}`}
                            className="btn btn-warning my-1"
                          >
                            <i className="fa fa-pen"></i>
                          </Link>
                          <button
                            className="btn btn-primary "
                            onClick={() => {
                              deleteContact(item.id);
                              fetchData();
                            }}
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  );
};
export default ContactList;
