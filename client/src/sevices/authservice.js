// // import { userLogin, userRegister } from "../redux/features/auth/authActions";
// // import store from "../redux/store";

// // export const handleLogin = (e, email, password, role) => {
// //     e.preventDefault();
// //     try {
// //         if (!role || !email || !password) {
// //             return alert("Please Privde All Feilds");
// //         }
// //         // store.dispatch(userLogin({ email, password, role }));
// //         console.log("login",e,email,password,role)
// //     } catch (error) {
// //         console.log(error);
// //     }
// // };

export const handleRegister = (
    e,
    userName,
    role,
    email,
    password,
    phone,
    organizationName,
    address,
    hospitalName,
    props

) => {
    e.preventDefault();
    try {
        console.log("Register=>", { userName },
            { role },
            { email },
            { password },
            { phone },
            { organizationName },
            { address },
            { hospitalName });
    } catch (error) {
        console.log(error);
    }
};