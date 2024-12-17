import { Component } from 'react';
import CustomerDetailsPopup from '../CustomerDetailsPopup';
import './index.css';

class ShowImagesData extends Component {
  state = {
    quentity: '',
    metalColor: '',
    metalKarat: '',
    DiamondQuality: '',
    fontStyle: '',
    letterHeight: '',
    customName: '',
    isFinalized: false,
    finalValues: {},
    activeButton: {},
      showPopup: false,
      clientName: '',
      clientPhone: '',
  };

  openCustomerPopup = () => {
    this.setState({ showPopup: true });
  };

  closeCustomerPopup = () => {
    this.setState({ showPopup: false });
  };

  handleCustomerSubmit = (data) => {
    this.setState({
      clientName: data.customerFullName,
      clientPhone: data.contactNumber,
    });
    console.log('Customer Information:', data);
  };
  // Helper to check if any field has changed since finalization
  hasChanges = () => {
    const {
      quentity,
      metalColor,
      metalKarat,
      DiamondQuality,
      fontStyle,
      letterHeight,
      customName,
      finalValues,
    } = this.state;

    return (
      quentity !== finalValues.quentity ||
      metalColor !== finalValues.metalColor ||
      metalKarat !== finalValues.metalKarat ||
      DiamondQuality !== finalValues.DiamondQuality ||
      fontStyle !== finalValues.fontStyle ||
      letterHeight !== finalValues.letterHeight ||
      customName !== finalValues.customName
    );
  };

  // Get the quantity value with validation
  getQuentityValue = (e) => {
    const value = e.target.value.trim();
    let errorMessage = '';

    // Validation: Check for blank, non-numeric, non-positive, and values >= 10
    if (!value || isNaN(value) || parseInt(value) <= 0) {
      errorMessage = 'Please enter a valid quantity greater than 0.';
    } else if (parseInt(value) >= 11) {
      errorMessage = 'Quantity must be less than 10.';
    }

    // Update state with value and any error message
    this.setState((prevState) => ({
      quentity: errorMessage ? '' : value, // Reset the value if invalid
      errorMessages: {
        ...prevState.errorMessages,
        quentity: errorMessage, // Set the error message
      },
      isUpdated: prevState.isFinalized && this.hasChanges(), // Check if there are changes
      isFinalized: false, // Reset finalized status
    }));
  };

  // Handle metal color value
  getMetalColorValueRoseGold = (event) => {
    this.setState({
      metalColor: 'Rose Gold',
      activeButton: { ...this.state.activeButton, metalColor: 'Rose Gold' },
      isUpdated: this.state.isFinalized && this.hasChanges(),
      isFinalized: false,
    });
    console.log(event.target.value);
  };

  getMetalColorValueGold = (event) => {
    this.setState({
      metalColor: 'Gold',
      activeButton: { ...this.state.activeButton, metalColor: 'Gold' },
      isUpdated: this.state.isFinalized && this.hasChanges(),
      isFinalized: false,
    });
    console.log(event.target.value);
  };

  getMetalColorValuePlatinum = (event) => {
    this.setState({
      metalColor: 'Platinum',
      activeButton: { ...this.state.activeButton, metalColor: 'Platinum' },
      isUpdated: this.state.isFinalized && this.hasChanges(),
      isFinalized: false,
    });
    console.log(event.target.value);
  };

  // Handle metal karat value
  getMetalColorValue10KT = (event) => {
    this.setState({
      metalKarat: '10KT',
      activeButton: { ...this.state.activeButton, metalKarat: '10KT' },
      isUpdated: this.state.isFinalized && this.hasChanges(),
      isFinalized: false,
    });
    console.log(event.target.value);
  };

  getMetalColorValue14KT = (event) => {
    this.setState({
      metalKarat: '14KT',
      activeButton: { ...this.state.activeButton, metalKarat: '14KT' },
      isUpdated: this.state.isFinalized && this.hasChanges(),
      isFinalized: false,
    });
    console.log(event.target.value);
  };

  getMetalColorValue18KT = (event) => {
    this.setState({
      metalKarat: '18KT',
      activeButton: { ...this.state.activeButton, metalKarat: '18KT' },
      isUpdated: this.state.isFinalized && this.hasChanges(),
      isFinalized: false,
    });
    console.log(event.target.value);
  };

  // Handle diamond quality value
  getMetalColorValueVS = (event) => {
    this.setState({
      DiamondQuality: 'VS',
      activeButton: { ...this.state.activeButton, DiamondQuality: 'VS' },
      isUpdated: this.state.isFinalized && this.hasChanges(),
      isFinalized: false,
    });
    console.log(event.target.value);
  };

  getMetalColorValueSI = (event) => {
    this.setState({
      DiamondQuality: 'SI',
      activeButton: { ...this.state.activeButton, DiamondQuality: 'SI' },
      isUpdated: this.state.isFinalized && this.hasChanges(),
      isFinalized: false,
    });
    console.log(event.target.value);
  };

  getMetalColorValueLAB = (event) => {
    this.setState({
      DiamondQuality: 'LAB',
      activeButton: { ...this.state.activeButton, DiamondQuality: 'LAB' },
      isUpdated: this.state.isFinalized && this.hasChanges(),
      isFinalized: false,
    });
    console.log(event.target.value);
  };

  // Handle font style value
  getFontStyleValue = (e) => {
    const fontStyle = e.target.value;
    this.setState({
      fontStyle,
      isUpdated: this.state.isFinalized && this.hasChanges(),
      isFinalized: false,
    });
    console.log(e.target.value);
  };

  // Handle letter height value
  getMetalColorValueMediun = (event) => {
    this.setState({
      letterHeight: 'Medium',
      activeButton: { ...this.state.activeButton, letterHeight: 'Medium' },
      isUpdated: this.state.isFinalized && this.hasChanges(),
      isFinalized: false,
    });
    console.log(event.target.value);
  };

  getMetalColorValueLarge = (event) => {
    this.setState({
      letterHeight: 'Large',
      activeButton: { ...this.state.activeButton, letterHeight: 'Large' },
      isUpdated: this.state.isFinalized && this.hasChanges(),
      isFinalized: false,
    });
    console.log(event.target.value);
  };

  // Handle custom name value
  getCustomNameValue = (e) => {
    this.setState({
      customName: e.target.value,
      isUpdated: this.state.isFinalized && this.hasChanges(),
      isFinalized: false,
    });
    console.log(e.target.value);
  };

  // Make the API call for preview
  makeimggg = async () => {
    const { quentity, metalKarat, DiamondQuality, fontStyle, letterHeight, customName, metalColor } = this.state;
    const make = parseInt(quentity);

    const url = `https://chandrajewellery.api.ls2.kenmarkserver.com/costing?quantity=${make}&metalColor=Rose%20Gold&metalKarat=18KT&DiamondQuality=SI&fontStyle=Regular&letterHeight=Medium&customName=aniket`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const findData = await response.json();
      console.log(findData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  componentDidMount() {
    this.makeimggg();
  }

  render() {
    const { showPopup, clientName, clientPhone } = this.state;
    return (
      <div>
        <h1>Hello</h1>
        <div className="values-container">
          <h1 className="value-head">DIAMOND NAME NECKLACE</h1>
          {/* Other Content */}
          <div className="input-container">
            <span className="quantity">Quantity :</span>
            <input
              type="text"
              placeholder="1"
              onChange={this.getQuentityValue}
              className="quali"
            />
          </div>
          {/* Metal Color */}
          <div className="input-container">
            <span className="quantity">Metal Color :</span>
            <div className="color-button-container">
              <button onClick={this.getMetalColorValueRoseGold} value="Rose Gold">Rose Gold</button>
              <button onClick={this.getMetalColorValueGold} value="Gold">Gold</button>
              <button onClick={this.getMetalColorValuePlatinum} value="Platinum">Platinum</button>
            </div>
          </div>
          {/* Other Fields */}
          <div>
        <h1>Welcome to the App</h1>
        <button onClick={this.openCustomerPopup}>Add Customer Details</button>
        <CustomerDetailsPopup
          isVisible={showPopup}
          onClosePopup={this.closeCustomerPopup}
          onConfirm={this.handleCustomerSubmit}
        />
        {clientName && (
          <p>
            Customer Name: {clientName} <br />
            Phone Number: {clientPhone}
          </p>
        )}
      </div>
        </div>
      </div>
    );
  }
}

export default ShowImagesData;
