import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    userName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Registrazione avvenuta con successo");
        alert("Registrazione avvenuta con successo");
        navigate("/home");
      } else {
        console.log("Errore durante la registrazione " + formData);
        alert("Errore durante la registrazione");
      }
    } catch (error) {
      console.log(
        "Si è verificato un errore durante la richiesta di registrazione"
      );
      alert(error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <div className="centered-container">
        <form
          className="formReg"
          onSubmit={handleSubmit}
          noValidate
          validated={validated.toString()} // Convert boolean to string
        >
          <p className="title text-center fs-3">Registrati</p>
          <p className="message">
            Registrati e accedi a tutti gli utilizzi dell'app:
          </p>
          <div className="flex">
            <label>
              <span>Nome</span>
              <input
                required
                placeholder=""
                type="text"
                className="input"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </label>
            <label>
              <span>Cognome</span>
              <input
                required
                placeholder=""
                type="text"
                className="input"
                name="cognome"
                value={formData.cognome}
                onChange={handleChange}
              />
            </label>
          </div>
          <label>
            <span>UserName</span>
            <input
              required
              placeholder=""
              type="text"
              className="input mb-3"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              required
              placeholder=""
              type="email"
              className="input mb-3"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              required
              placeholder=""
              type="password"
              className="input mb-3"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <button className="submit my-4 text-dark">Conferma</button>
          <p className="signin">
            Hai già un account?{" "}
            <Link to="/login-page">
              <span>Accedi</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
