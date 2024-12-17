import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import './index.css'; // Add styles for the popup

class CustomerDetailsPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerFullName: '',
      contactNumber: '',
    };
    this.formRef = React.createRef();
  }

  updateCustomerName = (e) => {
    this.setState({ customerFullName: e.target.value });
  };

  updateContactNumber = (e) => {
    this.setState({ contactNumber: e.target.value });
  };

  sendMail = (e) => {
    e.preventDefault();
    const { customerFullName, contactNumber } = this.state;

    if (!customerFullName || !contactNumber) {
      alert('Please fill in all fields');
      return;
    }

    if (!/^\d{10}$/.test(contactNumber)) {
      alert('Please enter a valid 10-digit contact number');
      return;
    }

    // Send the email using EmailJS
    emailjs
      .sendForm(
        'service_byu2w8x',
        'template_tljo9o6',
        this.formRef.current,
        'n_8vb_UL7ivoogsmu'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          this.props.onConfirm({ customerFullName, contactNumber });
          this.props.onClosePopup();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  render() {
    const { isVisible, onClosePopup } = this.props;
    const { customerFullName, contactNumber } = this.state;

    if (!isVisible) return null;

    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <h2 className="number-head">WE GOT YOU</h2>
          <p className="number-para">Leave your details and we will reach out to you</p>
          <form ref={this.formRef} onSubmit={this.sendMail}>
            <input
              type="text"
              placeholder="Full Name"
              value={customerFullName}
              onChange={this.updateCustomerName}
              className="popup-input"
              name="user_name"
            />
            <input
              type="text"
              placeholder="Phone No."
              value={contactNumber}
              onChange={this.updateContactNumber}
              className="popup-input"
              name="user_number"
            />
            <div className="popup-buttons">
              <button className="popup-submit" type="submit">
                Call Me Back
              </button>
              <button onClick={onClosePopup} className="popup-cancel" type="button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

CustomerDetailsPopup.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClosePopup: PropTypes.func.isRequired,
};

export default CustomerDetailsPopup;
