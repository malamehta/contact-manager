import React,{useState,useEffect} from "react";
import {Link,useParams} from 'react-router-dom';

let ViewContact=()=>{
    const [data, setData] = useState({});

    let params = useParams();
    let id = params.id;

    const fetchData = async () => {
        const response = await fetch(`http://localhost:9000/contacts/${id}`);
        const data = await response.json();
        setData(data);
    }
    useEffect(() => {
        fetchData();
    } , [id]);
    return(
        <>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={data.imgUrl} alt="img"></img>
                        </div>
                        <div className="col-md-8">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action">
                                Name:<span className="fw-bold ms-2" >{data.name}</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Mobile:<span className="fw-bold ms-2" >{data.mobile}</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Email:<span className="fw-bold ms-2" >{data.email}</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Company:<span className="fw-bold ms-2" >{data.companyName}</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Group:<span className="fw-bold ms-2" >{data.group}</span>
                            </li>
                         </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
};
export default ViewContact;