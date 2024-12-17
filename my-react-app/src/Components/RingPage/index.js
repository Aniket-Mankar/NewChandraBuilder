import {Component} from 'react'
import './index.css'
import Popup from './ringPop';
import CustomerDetailsPopup from '../CustomerDetailsPopup';


class RingPage extends Component {
  state = {
    quentity: '',
    metalColor: '',
    metalKarat: '',
    DiamondQuality: '',
    fontStyle: '',
    letterHeight: '',
    customName: '',
    priceOf: '',
    braceletImages: " ",
    width: " " ,
    path: [],
    activeButton: {
      metalColor: null,
      metalKarat: null,
      DiamondQuality: null,
      letterHeight: null
    },
    errorMessages: { 
      quentity: '',
      fontStyle: "Please select a font style." // Add fontStyle error message
    },
    isUpdated: false, // Track changes after finalization
    updatedFields: {
      quentity: false,
      metalColor: false,
      metalKarat: false,
      DiamondQuality: false,
      fontStyle: false,
      letterHeight: false,
      customName: false,
    }, 
    isFinalized: false, // Track whether the result is finalized
    isPopupOpen: false,
    showPopup: false,
    clientName: '',
    clientPhone: '',
  }



  checkIfAnyFieldUpdated = () => {
    const { updatedFields } = this.state;

    // Check if at least one field is updated
    const anyFieldUpdated = Object.values(updatedFields).some((field) => field);
  
    if (anyFieldUpdated) {
      this.setState({ isUpdated: true });
    }
  };
  

  validateField = (field, value) => {
    let error = '';

    switch (field) {
      case 'quentity':
        if (!value.trim() || isNaN(value) || parseInt(value) <= 0) {
          error = '* Please enter a valid quantity greater than 0.';
        }
        break;
        case 'fontStyle':
          if (!value.trim()) {
            error = '* Please select a font style.';
          }
          break; 
      case 'metalKarat':
      case 'DiamondQuality':
      case 'letterHeight':
      case 'customName':
      case 'metalColor':
        if (!value.trim()) {
          error = `${field} is required.`;
        }
        break;
      default:
        break;
    }

    return error;
  };

  handleInputChange = (field) => (event) => {
    const value = event.target.value;
    const errorMessage = this.validateField(field, value);

    this.setState((prevState) => ({
      [field]: value,
      errorMessages: {
        ...prevState.errorMessages,
        [field]: errorMessage,
      },
      isUpdated: this.state.isFinalized, // Show message only if finalized
      isFinalized: false,
    }));
  };





 
  getQuentityValue = e => {
    const value = e.target.value.trim(); // Trim whitespace to handle blank inputs
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
        quentity: errorMessage, // Update the error message
      },
      updatedFields: { ...prevState.updatedFields, quentity: true },
      isUpdated: prevState.isFinalized,
    }),this.checkIfAnyFieldUpdated);
  }


  getMetalColorValueRoseGold = event => {
    this.setState({
      metalColor: event.currentTarget.value,
      activeButton: { ...this.state.activeButton, metalColor: 'Rose Gold' },
      updatedFields: { ...this.state.updatedFields, metalColor: true },
      isUpdated: this.state.isFinalized,
    }, this.checkIfAnyFieldUpdated)
    console.log(event.currentTarget.value)
    
    
  }
  getMetalColorValueGold = event => {
    this.setState({
      metalColor: event.currentTarget.value,
      activeButton: { ...this.state.activeButton, metalColor: 'Gold' },
      updatedFields: { ...this.state.updatedFields, metalColor: true },
      isUpdated: this.state.isFinalized,
    }, this.checkIfAnyFieldUpdated)
    console.log(event.currentTarget.value)
   
  }
  getMetalColorValuePlatinum =  event => {
    this.setState({
      metalColor: event.currentTarget.value,
      activeButton: { ...this.state.activeButton, metalColor: 'Platinum' },
      updatedFields: { ...this.state.updatedFields, metalColor: true },
      isUpdated: this.state.isFinalized,
    }, this.checkIfAnyFieldUpdated)
    console.log(event.currentTarget.value)
    
  }

  getMetalColorValue10KT = event => {
    this.setState({
      metalKarat: event.target.value,
      activeButton: { ...this.state.activeButton, metalKarat: '10KT' },
      updatedFields: { ...this.state.updatedFields, metalKarat: true },
      isUpdated: this.state.isFinalized,
    }, this.checkIfAnyFieldUpdated)
    console.log(event.target.value)
   
  }
  getMetalColorValue14KT = event => {
    this.setState({
      metalKarat: event.target.value,
      activeButton: { ...this.state.activeButton, metalKarat: '14KT' },
      updatedFields: { ...this.state.updatedFields, metalKarat: true },
      isUpdated: this.state.isFinalized,
    }, this.checkIfAnyFieldUpdated)
    console.log(event.target.value)
    
  }
  getMetalColorValue18KT =  event => {
    this.setState({
      metalKarat: event.target.value,
      activeButton: { ...this.state.activeButton, metalKarat: '18KT' },
      updatedFields: { ...this.state.updatedFields, metalKarat: true },
      isUpdated: this.state.isFinalized,
    }, this.checkIfAnyFieldUpdated)
    console.log(event.target.value)
    
  }


  getMetalColorValueVS = event => {
    this.setState({
      DiamondQuality: event.target.value, 
      activeButton: { ...this.state.activeButton, DiamondQuality: 'VS' },  
      updatedFields: { ...this.state.updatedFields, DiamondQuality: true },
      isUpdated: this.state.isFinalized,
    }, this.checkIfAnyFieldUpdated)
    console.log(event.target.value)
    
  }
  getMetalColorValueSI = event => {
    this.setState({
      DiamondQuality: event.target.value, 
      activeButton: { ...this.state.activeButton, DiamondQuality: 'SI' },  
      updatedFields: { ...this.state.updatedFields, DiamondQuality: true },
      isUpdated: this.state.isFinalized,
    }, this.checkIfAnyFieldUpdated)
    console.log(event.target.value)
    
  }
  getMetalColorValueLAB =  event => {
    this.setState({
      DiamondQuality: event.target.value, 
      activeButton: { ...this.state.activeButton, DiamondQuality: 'LAB' },  
      updatedFields: { ...this.state.updatedFields, DiamondQuality: true },
      isUpdated: this.state.isFinalized,
    }, this.checkIfAnyFieldUpdated)
    console.log(event.target.value)
    
  }
  
  getFontStyleValue = e => {
    const fontStyle = e.target.value;

    // Validate font style (optional, for example, if no option is selected)
    let errorMessage = '';
    if (!fontStyle) {
      errorMessage = 'Please select a font style.';
    }

    this.setState((prevState) => ({
      fontStyle,
      errorMessages: {
        ...prevState.errorMessages,
        fontStyle: errorMessage,
      },
      updatedFields: { ...prevState.updatedFields, fontStyle: true },
      isUpdated: prevState.isFinalized,
    }), this.checkIfAnyFieldUpdated);   
  }



getMetalColorValueMediun = event => {
    this.setState({
      letterHeight: event.target.value, 
      activeButton: { ...this.state.activeButton, letterHeight: 'Medium' }, 
      updatedFields: { ...this.state.updatedFields, letterHeight: true },
      isUpdated: this.state.isFinalized,
    }, this.checkIfAnyFieldUpdated)
    console.log(event.target.value)
   
  }
  
getMetalColorValueLarge =  event => {
    this.setState({
      letterHeight: event.target.value,  
      activeButton: { ...this.state.activeButton, letterHeight: 'Large' },  
      updatedFields: { ...this.state.updatedFields, letterHeight: true },
      isUpdated: this.state.isFinalized,
    }, this.checkIfAnyFieldUpdated)
    console.log(event.target.value)
   
  }

  getCustomNameValue = (e) => {
  const inputValue = e.target.value; // Get the value from the input field

  // Regular expression to allow only alphabets
  const alphabetOnlyRegex = /^[a-zA-Z]*$/;

  if (alphabetOnlyRegex.test(inputValue) && inputValue.length <= 10) {
    // Update state only if input is valid and length is 10 or less
    this.setState({
      customName: inputValue,
      updatedFields: { ...this.state.updatedFields, customName: true },
      isUpdated: this.state.isFinalized,
    }, this.checkIfAnyFieldUpdated);
  } else {
    console.log("Invalid input! Only alphabets are allowed, and max length is 10.");
  }
};

handleGetQuote = () => {
  this.setState({
    isFinalized: true, // Marks the result as finalized
    updatedFields: {
      quentity: false,
      metalColor: false,
      metalKarat: false,
      DiamondQuality: false,
      fontStyle: false,
      letterHeight: false,
      customName: false,
    },
    isUpdated: false, // Reset "updated" flag
  });
};




  makeCallForFont = async () => {
    const {
      quentity,
      metalKarat,
      DiamondQuality,
      fontStyle,
      letterHeight,
      customName,
      metalColor,
    } = this.state;
  






    const errors = {};

    // Validate all fields
    ['quentity', 'metalKarat', 'DiamondQuality', 'fontStyle', 'letterHeight', 'customName', 'metalColor'].forEach(
      (field) => {
        const value = this.state[field];
        const error = this.validateField(field, value);
        if (error) {
          errors[field] = error;
        }
      }
    );

    // If any errors exist, update state and exit
    if (Object.keys(errors).length > 0) {
      this.setState({ errorMessages: errors });
      return;
    }

    // Reset errors if validation passes
    this.setState({ errorMessages: {},});





    const make = parseInt(quentity);
  
    const url = `https://chandrajewellery.api.ls2.kenmarkserver.com/costing?quantity=${make}&metalColor=${metalColor}&metalKarat=${metalKarat}&DiamondQuality=${DiamondQuality}&fontStyle=${fontStyle}&letterHeight=${letterHeight}&customName=${customName}`;
  
    try {
      const getData = await fetch(url);
      const findData = await getData.json();
      
      if (findData && findData.paths) {
        this.setState({ 
          path: findData.paths, 
          priceOf: findData.price, 
          braceletImages: findData.braceletImages, 
          width: findData.width ,
          isFinalized: true, // Mark result as finalized
          isUpdated: false, // Reset updated status
          updatedFields: {
            quentity: false,
            metalColor: false,
            metalKarat: false,
            DiamondQuality: false,
            fontStyle: false,
            letterHeight: false,
            customName: false,
          },
        
        
        });
        
      } else {
        console.error("Failed to fetch paths or price data.");
      }
      
    } catch (error) {
      console.error("Error fetching data: ", error);
    }

   
    
  }


  

  componentDidMount() {
    this.makeCallForFont()
  }

  makeImagesContainer = () => {
    const { path, braceletImages} = this.state;
   
    if (!path || path.length === 0) {
      return (
        <div className="option-container">
          <img
            src="https://therunawaycrew.com/wp-content/uploads/2024/11/Group-4911.png"
            alt="option"
            className="option-img"
          />
          
        </div>
      );
    }
  
    // Exclude the last two elements
    const {letterHeight, width} = this.state
    return (
      <div>
      <div className="img-bracelet-container">
        <img
          src='https://therunawaycrew.com/wp-content/uploads/2024/12/101.largex2-1-2.png'
          alt="left"
          className='ring-img'
        />
        <ul type="none" className="list-of-img-ring">
          {path.map((each, index) => (
            <img key={index} src={each} alt={each} className={`${letterHeight === "Medium" ? "finel-img-bracelet" : "finel-img-bracelet-large"}`} />
          ))}
        </ul>
      </div>
      <div className='measurment-container'>
        <div className='details-container-height'>
          <img src="https://therunawaycrew.com/wp-content/uploads/2024/08/Arrow-2.png" alt="arrow-up"/>
         {letterHeight === "Large" ? <p>0.35 INCH</p>: <p>0.30 INCH</p>}
          <img src="https://therunawaycrew.com/wp-content/uploads/2024/08/Arrow-3.png" alt="arrow-down" />
          <p>(Appx. Height)</p>
        </div>
        <div className='details-container-width'>
          <p>{width} INCH</p>
          <img src="https://therunawaycrew.com/wp-content/uploads/2024/08/Arrow-1.png" alt='arrow1' />
          <p className='width'>(Appx. Width)</p>
        </div>
      </div>
      <p className='measurment-para'>Style may vary as it is not exatct rendition<br></br>
      Please review the intial thumbnail for a more detailed font design </p>
      </div>
    );
  };
  


  //POP-up section
  openPopup = () => {
    this.setState({ isPopupOpen: true });
  };

  closePopup = () => {
    this.setState({ isPopupOpen: false });
  };

  openCustomerPopup = () => {
    this.setState({ showPopup: true });
  };

  closeCustomerPopup = () => {
    this.setState({ showPopup: false });
  };

  handleCustomerSubmit = (details) => {
    console.log('Customer Details Submitted:', details);
    // Handle the details here, such as saving to the database
  };

  render() {
    const {priceOf,customName,quentity, errorMessages, fontStyle,isUpdated, isFinalized, showPopup} = this.state
    return (
      <div className="main-product-page">
        <h1 className="product-page-first-head">
          BESPOKE NAME PENDANT BUILDER
        </h1>
        <p className="products-page-first-para">
          Create your personalized name necklace with our Bespoke Name Pendant
          Builder. Each pendant is individually master crafted to order,
          <br />
          especially for you. Select your diamond quality, metal color and karat
          along with pendant size to be set in one of our signature font <br />
          styles, and tailor your personalized name pendant to suit your
          personal preferences.
        </p>
        <div className="hr-container">
          <img
            src="https://therunawaycrew.com/wp-content/uploads/2024/07/Line-65.png"
            alt="line"
            className="hr-line"
          />
        </div>
        <div className="card-container-and-values-container">
          <div className="left-img-container">
            <div>
              <img
                src="https://therunawaycrew.com/wp-content/uploads/2024/07/Group-484.png"
                alt="gordan"
                className="jordan-img"
              />
            </div>
            <div>
              <img
                src="https://therunawaycrew.com/wp-content/uploads/2024/07/Group-482.png"
                alt="gordan"
                className="jordan-img"
              />
            </div>
            <div>
              <img
                src="https://therunawaycrew.com/wp-content/uploads/2024/07/Group-483.png"
                alt="gordan"
                className="jordan-img"
              />
            </div>
          </div>
          <div className="result-and-input-container">
            <div className="result-img-container">
              {this.makeImagesContainer()}
            </div>
            <div className="values-container">
              <div className='head-and-extra-info-container'>
              <h1 className="value-head">DIAMOND NAME BRACELET</h1>
              <button onClick={this.openPopup} className="icon-call-btn">
                <img src="https://therunawaycrew.com/wp-content/uploads/2024/12/information.png" alt="info" className='info-icon'/>
              </button>
          <Popup isOpen={this.state.isPopupOpen} onClose={this.closePopup} />
              </div>
              <div>
                <p className="style-num"> Style Number :&nbsp;&nbsp;####&nbsp;&nbsp;<span className='week-deli'>Approximately # Week Delivery</span>
                </p>
              </div>
              <div>
                <p className="style-num pri">
                  Price :<span className='price-size'>&nbsp;&nbsp;<b>${priceOf}</b></span>&nbsp;&nbsp;<span className='incl-taxes'>(incl. of all
                  taxes)</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className='week-deli'>Custom Quote</span>
                </p>
              </div>
              <div className="input-container">
                <span className="quantity">Quantity :</span>{' '}&nbsp;
                <input
                  type="number"
                  placeholder="0"
                  onChange={this.getQuentityValue}
                  className='quali'
                  value={quentity}
                  min="1" // Optional safeguard: Minimum value
                  max="9"
                />
                 {errorMessages.quentity && (
                  <p className="error-message">{errorMessages.quentity}</p>
                )}

              </div>
              <div className="input-container">
                <span className="quantity">Metal Color :</span>{' '}&nbsp;
                <div className='color-button-container'>
                  <button className={`Rose-Gold-button ${this.state.activeButton.metalColor === 'Rose Gold' ? 'active' : ''}`} onClick={this.getMetalColorValueRoseGold} value="Rose Gold">
                    <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/Clip-path-group.png" alt="color" value="Rose Gold" />
                  </button>
                  <button className={`Gold-button ${this.state.activeButton.metalColor === 'Gold' ? 'active' : ''}`} onClick={this.getMetalColorValueGold} value="Gold">
                  <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/Clip-path-group-1.png" alt="color" value="Gold" />
                  </button>
                  <button className={`Platinum-button ${this.state.activeButton.metalColor === 'Platinum' ? 'active' : ''}`} onClick={this.getMetalColorValuePlatinum} value="Platinum">
                  <img src="https://therunawaycrew.com/wp-content/uploads/2024/09/Clip-path-group.png" alt="color" value="Platinum" className='platinum-but-img' />
                  </button>
                  
                </div>
              </div>
              <div className="input-container">
                <span className="quantity">Metal Karat :</span>{' '}&nbsp;
                <div className='color-button-container'>
                  <button className={`t10kt-button x ${this.state.activeButton.metalKarat === '10KT' ? 'active' : ''}`} onClick={this.getMetalColorValue10KT} value="10KT">10KT</button>
                  <button className={`t10kt-button ${this.state.activeButton.metalKarat === '14KT' ? 'active' : ''}`} onClick={this.getMetalColorValue14KT} value="14KT"> 14KT</button>
                  <button className={`t10kt-button ${this.state.activeButton.metalKarat === '18KT' ? 'active' : ''}`} onClick={this.getMetalColorValue18KT} value="18KT">18KT</button>
                </div>
               
              </div>
              <div className="input-container">
                <span className="quantity">Diamond Quality :</span>{' '}&nbsp;
                <div className='color-button-container'>
                <button
                  className={`t10kt-button x ${this.state.activeButton.DiamondQuality === 'VS' ? 'active' : ''}`}
                  onClick={this.getMetalColorValueVS}
                  value="VS"
                >
                  VS
                </button>
                <button
                  className={`t10kt-button ${this.state.activeButton.DiamondQuality === 'SI' ? 'active' : ''}`}
                  onClick={this.getMetalColorValueSI}
                  value="SI"
                >
                  SI
                </button>
                <button
                  className={`t10kt-button ${this.state.activeButton.DiamondQuality === 'LAB' ? 'active' : ''}`}
                  onClick={this.getMetalColorValueLAB}
                  value="LAB"
                >
                  LAB
                </button>

                </div>
                
              </div>
              <div className="input-container">
                <span className="quantity">Font Style :</span>{' '}&nbsp;
                <select onChange={this.getFontStyleValue} className="qua" value={fontStyle}>
                  <option>Regular</option>
                  <option>Sport</option>
                </select>
                {errorMessages.fontStyle && (
                  <p className="error-message">{errorMessages.fontStyle}</p>
                )}
              </div>
              <div className="input-container">
                <span className="quantity">Letter Height :</span>{' '}&nbsp;
                <div className='color-button-container'>
                <button
                      className={`t10kt-button x ${this.state.activeButton.letterHeight === 'Medium' ? 'active' : ''}`}
                      onClick={this.getMetalColorValueMediun}
                      value="Medium"
                    >
                      Medium
                    </button>
                    <button
                      className={`t10kt-button ${this.state.activeButton.letterHeight === 'Large' ? 'active' : ''}`}
                      onClick={this.getMetalColorValueLarge}
                      value="Large"
                    >
                      Large
                    </button>

                </div>
                
              </div>
              <div>
                <p className="style-num cat">Chain Type :&nbsp;&nbsp;<span className='week-deli'>Cat 30 Cable Chain with Lobster Lock</span></p>
              </div>
              <div className="style-cont-name">
                <span className="quantity">Custom name :</span>
                <input
                  type="text"
                  placeholder="Enter Name"
                  onChange={this.getCustomNameValue}
                  className="name-input"
                  maxLength={10}
                  value={this.state.customName}
                />
                <button onClick={this.makeCallForFont} className="call-button">
                  Preview Name
                </button>
              </div>
              <div>
              {isFinalized && isUpdated && (
        <p className="error-message">Click "Get Quote" again to update the quote.</p>
      )}
       <p className='number-remain'>{10 - customName.length} characters remaining</p>
      <div>
        <button onClick={this.openCustomerPopup}className="call-button call-number">Get Quote</button>
        <CustomerDetailsPopup
          isVisible={showPopup}
          onClosePopup={this.closeCustomerPopup}
          onConfirm={this.handleCustomerSubmit}
        />
      </div>
        </div>
            </div>
          </div>
        </div>
        <div className="our-process-and-guarentee-container">
          <div className="our-process-card">
            <h1 className="process-guarentee-head">OUR PROCESS</h1>
            <img
              src="https://therunawaycrew.com/wp-content/uploads/2024/07/Line-65-1.png"
              alt="process-hr-line"
              className="process-hr-line"
            />
            <p className="process-guarentee-para">
              From finding the perfect stone within our procured inventory of{' '}
              <br />
              diamonds to selecting your solitaire setting and metal preference,{' '}
              <br />
              our Bespoke Ring Builder allows you to create your very own <br />
              LOUISE JEAN piece from start-to-finish.
            </p>
            <img
              src="https://therunawaycrew.com/wp-content/uploads/2024/07/Group-23.png"
              alt="button"
              className="process-button"
            />
          </div>
          <div className="our-process-card">
            <h1 className="process-guarentee-head">OUR GUARANTEE TO YOU</h1>
            <img
              src="https://therunawaycrew.com/wp-content/uploads/2024/07/Line-65-1.png"
              alt="process-hr-line"
              className="process-hr-line gau"
            />
            <div className="diamond-para-conta">
              <div className="diamond-para-conta">
                <img
                  src="https://therunawaycrew.com/wp-content/uploads/2024/07/Isolation_Mode.png"
                  alt="di"
                />
                <p className="guarentee-para">
                  Individually handcrafted to order, especially for you
                </p>
              </div>
            </div>
            <div className="diamond-para-conta">
              <img
                src="https://therunawaycrew.com/wp-content/uploads/2024/07/Isolation_Mode.png"
                alt="di"
              />
              <p className="guarentee-para">Diamond certification provided</p>
            </div>
            <div className="diamond-para-conta">
              <img
                src="https://therunawaycrew.com/wp-content/uploads/2024/07/Isolation_Mode.png"
                alt="di"
              />
              <p className="guarentee-para">
                Responsibly crafted with high-quality materials
              </p>
            </div>
            <div className="diamond-para-conta">
              <img
                src="https://therunawaycrew.com/wp-content/uploads/2024/07/Isolation_Mode.png"
                alt="di"
              />
              <p className="guarentee-para">Complimentary resizing</p>
            </div>
            <div className="diamond-para-conta">
              <img
                src="https://therunawaycrew.com/wp-content/uploads/2024/07/Isolation_Mode.png"
                alt="di"
              />
              <p className="guarentee-para">Worldwide express shipping</p>
            </div>
            <p className="guarentee-para-last last">
              *Refer to Ring Size Guide for terms and conditions.
            </p>
          </div>
        </div>
        <div className="contact-us-container">
          <div className="ledies-container">
            <img
              src="https://therunawaycrew.com/wp-content/uploads/2024/07/image-22.png"
              alt="ledies-img"
              className="ledies-img"
            />
          </div>
          <div className="contact-from-container">
            <form>
              <div>
              <input type='text' placeholder='Name' required className='Name-from' />
              <input type='text' placeholder='Email' required className='Email-from' />
              </div>
              <div>
              <textarea id="message" name="message" rows="10" required placeholder='Message'className='message-from' />
              </div>
              <button type="submit" className="send-button">
                Send
                <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/Vector-10.png" alt="img" className='arrow-img' />
              </button>
            </form>
          </div>
        </div>
        <div className="footer-container-one">
          <div className="home-and-product-container">
            <div className="home-product-adjust">
              <p className="phone">HOME</p>
              <p>PRODUCT PAGE</p>
            </div>
          </div>
          <div className="main-mai-and-phone-container">
            <div className="mai-and-phone-container phone">
              <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/352510_local_phone_icon-2.png" alt="img" className='pho' />
              <p>+91 86557 79700</p>
            </div>
            <div className="mai-and-phone-container">
              <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/5402397_email_inbox_mail_message_envelope_icon-2.png" alt="img" className='mailtoo' />
              <p>info@chandrajewels.com</p>
            </div>
          </div>
        </div>
        <div className="footer-container-second">
          <div className="subscribe-container">
            <p>
              <b>Subscribe:</b>
            </p>
            <p className='sub-head'>Subscribe to receive our latest news and product updates.</p>
            <form className="mail-form" onSubmit="handleSubscribe(event)">
              <input
                type="email"
                className="mail-input"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </form>
          </div>
          <div className="contact-us-container-new">
            <p className='contactUs'>
              <b>Contact Us:</b>
            </p>
            <p className='info'>info@chandrajewels.com</p>
            <p>+91 86557 79700</p>
          </div>
          <div className="our-address-container">
            <p>
              <b>Our Address:</b>
            </p>
            <p className='addrs'>
                  Unit.12, SDF-1,
                  <br />
                  Seepz-SEZ, Andheri (East).
                  <br />
                  Mumbai 400096
            </p>
          </div>
          <div className="social-media-container">
            <p>
              <b>Follow Us:</b>
            </p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Pinterest</p>
          </div>
        </div>
        <img
          src="https://therunawaycrew.com/wp-content/uploads/2024/07/Line-65-1.png"
          className="hr-last-line" alt="img"
        />
        <div className="term-and-condition">
          <p>Privacy Policy | Disclaimer</p>
          <p>©2024 Chandra Jewels</p>
        </div>
      </div>
    )
  }
}

export default RingPage
