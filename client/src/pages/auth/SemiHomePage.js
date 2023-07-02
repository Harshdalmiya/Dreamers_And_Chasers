import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import Modal from "../../Modals/modal";
import moment from "moment";
import API from "../../sevices/api";

const HomePage = () => {
    const { error, user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    //get function
    const getBloodRecords = async () => {
        try {
            const { data } = await API.get("/blood/bloodHistory");
            if (data?.success) {
                setData(data?.inventory);
                console.log(data)

            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBloodRecords();
    }, []);
    return (
        <Home>
            {user?.role === "admin" && navigate("/admin")}
            {error && <span>{alert(error)}</span>}

            <>
                <div className="container">
                    <h4
                        className="ms-4"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer" }}
                    >
                        <i className="fa-solid fa-plus text-success py-4"></i>
                        Add Blood Group
                    </h4>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th scope="col">Blood Group</th>
                                <th scope="col">Blood Type</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Email</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>A+</td>
                                <td>in</td>
                                <td>20 (ML)</td>
                                <td>renu@gmail.com</td>

                            </tr>

                        </tbody>
                        <tbody>

                            <tr>
                                <td>B+</td>
                                <td>in</td>
                                <td>30 (ML)</td>
                                <td>harsh@gmail.com</td>

                            </tr>

                        </tbody>
                        <tbody>

                            <tr>
                                <td>0-</td>
                                <td>in</td>
                                <td>50 (ML)</td>
                                <td>shreya@gmail.com</td>

                            </tr>

                        </tbody>

                    </table>

                    <Modal />
                </div>
            </>

        </Home>
    );
};

export default HomePage;