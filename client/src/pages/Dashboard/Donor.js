import React, { useEffect, useState } from 'react'
import Home from '../auth/Home'
import API from '../../sevices/api'
import moment from "moment";

const Donor = () => {
    const [data, setData] = useState([])
    const getDonors = async () => {
        try {
            const { data } = await API.get('/blood/donor-record')
            console.log(data);
            if (data?.success) {
                setData(data?.donors)
            }


        } catch (error) {
            console.log(error)

        }
    };
    useEffect(() => {
        getDonors();
    }, []);
    return (
        <div>
            <Home>
                <table className="table ">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>


                        </tr>
                    </thead>
                    <tbody>

                        <tr >
                            <td>harsh</td>
                            <td>harsh@gmail.com</td>
                            <td>7518501011</td>



                        </tr>
                        <tr >
                            <td>renu</td>
                            <td>renu@gmail.com</td>
                            <td>7518501012</td>



                        </tr>
                        <tr >
                            <td>shreya</td>
                            <td>shreya@gmail.com</td>
                            <td>7512501012</td>



                        </tr>

                    </tbody>
                </table>

            </Home>


        </div>
    )
}

export default Donor
