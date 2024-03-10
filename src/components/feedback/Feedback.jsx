import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { createUser, getToken } from "../../gateway/usersGateway";
import { validateForm } from "../../utils/validateForm";
import { getPositionsData } from "../../redux/positions/positions.actions";
import { memoizedPositionsDataSelector } from "../../redux/positions/positions.selectors";
import FeedbackPositions from "./FeedbackPositions";
import { getUsersData } from "../../redux/users/users.actions";
import FeedbackPhotoReg from "./FeedbackPhotoReg";

import "./feedback.scss";

const Feedback = ({ getPositionsData, getUsersData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position_id: "",
    position: "",
    photo: null,
  });
  const [succesRegistration, setSuccesRegistration] = useState(false);
  const [fileName, setFileName] = useState("");
  const positionsList = useSelector(memoizedPositionsDataSelector);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (name === "photo") {
      setFileName(files[0].name);
    }

    if (name === "position") {
      const selectedPosition = positionsList.find(
        (position) => position.name === value
      );

      setFormData((prevData) => ({
        ...prevData,
        position_id: selectedPosition ? selectedPosition.id : "",
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "file" ? files[0] : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const { position_id, name, email, phone, photo } = formData;
    const formDataForRequest = new FormData();
    formDataForRequest.append("position_id", position_id);
    formDataForRequest.append("name", name);
    formDataForRequest.append("email", email);
    formDataForRequest.append("phone", phone);
    formDataForRequest.append("photo", photo);

    const tokenData = await getToken();

    await createUser(formDataForRequest, tokenData.token);
    const page = 1;
    await getUsersData(page);

    setSuccesRegistration(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      position_id: "",
      position: "",
      photo: null,
    });

    setTimeout(() => {
      setSuccesRegistration(false);
    }, 10000);
  };

  useEffect(() => {
    getPositionsData();
  }, [getPositionsData]);

  return (
    <section className="feedback">
      <h1 className="feedback__title">{!succesRegistration && 'Working with POST request'}</h1>
      {succesRegistration ? (
        <FeedbackPhotoReg />
      ) : (
        <form className="feedback__form" onSubmit={handleSubmit}>
          <input
            className={`feedback__form-input ${errors.name && "error"}`}
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <div className="error-message">{errors.name}</div>}

          <input
            className={`feedback__form-input ${errors.email && "error"}`}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="error-message">{errors.email}</div>}

          <input
            className={`feedback__form-input ${errors.phone && "error"}`}
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          {errors.phone ? (
            <div className="error-message">{errors.phone}</div>
          ) : (
            <div className="feedback__form-input-text">
              {"+38 (xxx) xxx-xx-xx"}
            </div>
          )}

          <fieldset
            className={`feedback__form-position ${errors.position && "error"}`}
          >
            <legend
              className={`feedback__form-position-title ${errors.position && "error"}`}
            >
              Select your position:
            </legend>
            {positionsList.map((position) => (
              <FeedbackPositions
                key={position.id}
                positionData={position}
                handleChange={handleChange}
              />
            ))}
          </fieldset>

          {errors.position && (
            <div className="error-message">{errors.position}</div>
          )}

          <label htmlFor="image_upload" className="feedback__load-container">
            <input
              id="image_upload"
              className="feedback__load-image"
              type="file"
              name="photo"
              onChange={handleChange}
              accept="image/*"
              style={{ display: "none" }}
            />
            <div className="upload-button">
              <div className={`button-text ${errors.photo && "error"}`}>
                Upload
              </div>
              {
                <div className={`label-text ${errors.photo && "error"}`}>
                  {fileName ? fileName : "Upload your photo"}
                </div>
              }
            </div>
          </label>
          {errors.photo && <div className="error-message">{errors.photo}</div>}
        </form>
      )}
      {succesRegistration ? (
        ""
      ) : (
        <button
          className="action-button feedback__action-btn"
          type="submit"
          onClick={handleSubmit}
        >
          Sign up
        </button>
      )}
    </section>
  );
};

const mapDispatch = {
  getPositionsData,
  getUsersData,
};

Feedback.propTypes = {
  getPositionsData: PropTypes.func.isRequired,
  getUsersData: PropTypes.func.isRequired
};

export default connect(null, mapDispatch)(Feedback);
