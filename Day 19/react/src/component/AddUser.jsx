// AddUser.jsx
import React, { useState } from "react";
import { createUser } from "../api/userApi"; 

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear field error on typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validation function
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Name
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.length < 3) {
      tempErrors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    // Email
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    // Password
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    // Confirm Password
    if (formData.confirmPassword !== formData.password) {
      tempErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    // Phone
    if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone must be 10 digits";
      isValid = false;
    }

    // Terms
    if (!formData.terms) {
      tempErrors.terms = "You must accept the terms";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop API if invalid

    setLoading(true);
    setSuccess(false);

    try {
      // Call your API
      await createUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      });

      setSuccess(true);

      // Clear form
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        terms: false,
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("API call failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1>Add User</h1>

      {loading && <p>Submitting...</p>}
      {success && <p style={{ color: "green" }}>User added successfully!</p>}

      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{ borderColor: errors.name ? "red" : "#ccc" }}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ borderColor: errors.email ? "red" : "#ccc" }}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{ borderColor: errors.password ? "red" : "#ccc" }}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={{ borderColor: errors.confirmPassword ? "red" : "#ccc" }}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <input
          type="text"
          name="phone"
          placeholder="Phone (10 digits)"
          value={formData.phone}
          onChange={handleChange}
          style={{ borderColor: errors.phone ? "red" : "#ccc" }}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <label>
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />{" "}
          Accept Terms & Conditions
        </label>
        {errors.terms && <p className="error">{errors.terms}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{ marginTop: "10px", padding: "8px 12px" }}
        >
          {loading ? "Submitting..." : "Add User"}
        </button>
      </form>
    </main>
  );
};

export default AddUser;
