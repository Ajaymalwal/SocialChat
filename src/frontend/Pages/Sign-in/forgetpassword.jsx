import React, { useState } from "react";
import { autho } from "../../../backend/firebase";
import { confirmPasswordReset } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

import "../../Styles/Sign-in/Login.css";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const actionCode = new URLSearchParams(location.search).get("oobCode");
      await confirmPasswordReset(autho, actionCode, newPassword);
      alert("Password reset successful. You can now log in with your new password.");
      navigate("/Login");
    } catch (error) {
      console.error("Error resetting password:", error);
      setErrorMessage("Error resetting password. Please try again.");
    }
  };

  return (
    <div className="l-container">
    <div className="login-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword} className="login-form">
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm New Password:</label>
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit" id="continue-btn">Reset Password</button>
      </form>
    </div>
    </div>
  );
}

export default ResetPassword;
