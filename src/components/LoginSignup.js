import React, { useState } from "react";

const LoginSignup = () => {
  const [signupFormData, setSignupFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userArray, setUserArray] = useState([]);
  const [signupFormerr, setSignupFormerr] = useState({});
  const [updateStatus, setUpdateStatus] = useState(false);
  const [updateIndex, setUpdateIndex] = useState();
  const validationsignup = () => {
    let err = {};
    // we will validate each input field over here step by step
    //validation code
    if (signupFormData.fullName === "") {
      err.fullName = "Name Required !";
    } else {
      if (signupFormData.fullName.length <= 1) {
        err.fullName = "Name should be atleast 2 character";
      }
    }
    if (signupFormData.email === "") {
      err.email = "E-mail Required !";
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(signupFormData.email)) {
        err.email = "Email not valid!";
      }
    }
    if (signupFormData.password === "") {
      err.password = "password Required !";
    } else {
      if (signupFormData.password.length <= 5) {
        err.password = "password should be Atleast 6 characters!";
      }
    }
    if (signupFormData.confirmPassword === "") {
      err.confirmPassword = "confirmPassword Required !";
    } else {
      if (signupFormData.confirmPassword !== signupFormData.password) {
        err.confirmPassword = "password and confirm password deos not match !";
      }
    }

    setSignupFormerr({ ...err });
    return Object.keys(err).length < 1;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const isvalid = validationsignup();
    if (isvalid) {
      setUserArray([...userArray, signupFormData]);
      setSignupFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  //update functionality.
  const handleUpdate = (index) => {
    //function work is just to show data in the form in order to update.
    setUpdateIndex(index);
    setUpdateStatus(true);
    setSignupFormData(userArray[index]);
  };
  const handleupdateclick = () => {
    const isvalid = validationsignup();
    if (isvalid) {
      const updatedUserArray = [...userArray];
      const updatedItem = {
        ...signupFormData,
      };
      updatedUserArray[updateIndex] = updatedItem;
      setUserArray(updatedUserArray);
      setUpdateStatus(false);
      setSignupFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  // Delete Functionality.
  const handleDelete = (index) => {
    const updatedUserArray = userArray.filter((item, ind) => ind !== index);
    setUserArray(updatedUserArray);
  };
  return (
    <div className="loginsignup-page">
      <div className="auth-container">
        <div>
          <input
            type="text"
            placeholder="Enter full name"
            value={signupFormData.fullName}
            onChange={(e) =>
              setSignupFormData({
                ...signupFormData,
                fullName: e.target.value,
              })
            }
          />
          <span className="formhandle">{signupFormerr.fullName}</span>
        </div>
        <div>
          <input
            placeholder="Enter email"
            value={signupFormData.email}
            onChange={(e) =>
              setSignupFormData({
                ...signupFormData,
                email: e.target.value,
              })
            }
          />
          <span className="formhandle">{signupFormerr.email}</span>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={signupFormData.password}
            onChange={(e) =>
              setSignupFormData({
                ...signupFormData,
                password: e.target.value,
              })
            }
          />
          <span className="formhandle">{signupFormerr.password}</span>
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm password"
            value={signupFormData.confirmPassword}
            onChange={(e) =>
              setSignupFormData({
                ...signupFormData,
                confirmPassword: e.target.value,
              })
            }
          />
          <span className="formhandle">{signupFormerr.confirmPassword}</span>
        </div>
        {updateStatus ? (
          <button onClick={handleupdateclick} variant="primary">
            Update
          </button>
        ) : (
          <button onClick={handleSignupSubmit} variant="primary">
            Sign Up
          </button>
        )}
      </div>
      {/* Table Component Here. */}

      <br />
      <hr />
      <hr />
      <br />
      <table>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Password</th>
            <th>delete</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          {userArray?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleUpdate(index)}>Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        
      </div>
    </div>
  );
};

export default LoginSignup;
