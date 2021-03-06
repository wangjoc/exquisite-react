import React from 'react';
import './PlayerSubmissionForm.css';
import SubmissionField from './SubmissionField';
import PropTypes from 'prop-types';

const generateFields = (fields, formFields, onChangeHandler) => {
  const inputFields = fields.map(field => 
    field.key ? 
    <SubmissionField 
      key={field.key}
      className={formFields[field.key] === '' ? "PlayerSubmissionFormt__input--invalid" : null}
      name={field.key} 
      placeholder={field.placeholder} 
      type="text" 
      value={formFields[field.key]}
      onChangeHandler={onChangeHandler}
    />
    :
    field
  );
  return inputFields;
}

const PlayerSubmissionForm = ({ playerNum, 
                                fields,
                                formFields, 
                                showForm, 
                                onChangeHandler, 
                                onSubmitForm }) => {

  const testFields = generateFields(fields, formFields, onChangeHandler)

  const subForm = () => {
    return (
      <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{playerNum}</h3>

      <form id="testForm" className="PlayerSubmissionForm__form">

        <div className="PlayerSubmissionForm__poem-inputs">
          {testFields}
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input 
            type="submit" 
            value="Submit Line"
            onClick={onSubmitForm}
            className="PlayerSubmissionForm__submit-btn" />
        </div>

      </form>
    </div>
    );
  }

  return showForm ? subForm() : null;
};

PlayerSubmissionForm.propTypes = {
  playerNum: PropTypes.number.isRequired,
  fields: PropTypes.array.isRequired,
  formFields: PropTypes.object.isRequired,
  showForm: PropTypes.bool.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
