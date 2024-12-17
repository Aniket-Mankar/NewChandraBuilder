import React from 'react';

class Popup extends React.Component {
  render() {
    if (!this.props.isOpen) return null;

    return (
      <div style={styles.overlay}>
        <div className='margin-right' style={styles.modal}>
          <div className='top-background'>
            <div className='close-button-cont'>
            <h2 className='top-head'>CUSTOM QUOTE</h2>
                  <button onClick={this.props.onClose} className='close-button'>
               <img src="https://therunawaycrew.com/wp-content/uploads/2024/12/icons8-close-window-24.png" alt='close' />
          </button>
          </div>
          </div>
          <div className='field-control-con'>
          <div className='first-popup-section'>
                <p className="style-num">Ref, Style #:</p>
                <div className="style-cont-name-popup">CN6KONk-SPO</div>
          </div>
          <div className='first-popup-section'>
                <p className="style-num"> Subject:</p>
                <div className="style-cont-name-subject">
                  <span>Please select subject</span>
                  <select className='popup-selsct-input'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
          </div>
          <div className="first-popup-color-button">
                <span className="quantity">Metal Color :</span>{' '}&nbsp;
                <div className='popup-button-container'>
                  <span>Please select metal color</span>
                <div className='color-button-container'>
                  <button className='Rose-Gold-button' onClick={this.getMetalColorValueRoseGold} value="Rose Gold">
                    <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/Clip-path-group.png" alt="color" value="Rose Gold" />
                  </button>
                  <button className='Rose-Gold-button' onClick={this.getMetalColorValueGold} value="Gold">
                  <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/Clip-path-group-1.png" alt="color" value="Gold" />
                  </button>
                  <button v onClick={this.getMetalColorValuePlatinum} value="Platinum">
                  <img src="https://therunawaycrew.com/wp-content/uploads/2024/09/Clip-path-group.png" alt="color" value="Platinum" className='platinum-but-img' />
                  </button>
                </div>
                </div>
              </div>
              <div className="first-popup-color-button">
                <span className="quantity">Metal Karat :</span>{' '}&nbsp;
                <div className='popup-button-container'>
                  <span>Please select metal Karat</span>
                  <div className='color-button-container'>
                  <button className="t10kt-button x" onClick={this.getMetalColorValue10KT} value="10KT">10KT</button>
                  <button className="t10kt-button " onClick={this.getMetalColorValue14KT} value="14KT"> 14KT</button>
                  <button className="t10kt-button " onClick={this.getMetalColorValue18KT} value="18KT">18KT</button>
                </div>
                </div>
              </div>
              <div className="first-popup-section margin">
                <span className="quantity">Cost Budget $ : <br></br>(Appx.)</span>{' '}&nbsp;
                <div className='style-cont-name-file'>
                <input
                  type="number"
                  placeholder="Cost Budget $ (Appx.)"
                  className='popup-cost'
                />
                </div>
              </div>
              <div className="first-popup-section">
                <span className="quantity">Ref.Image :<br></br>Upload</span>{' '}&nbsp;
                <div className='style-cont-name-file upload'>
                <input
                  type="file"
                  placeholder="Cost Budget $ (Appx.)"
                  className='popup-cost'
                />
                </div>
              </div>
              <div className='style-cont-name-lastmessage'>
                <input type='text' className='popup-cost-comment' placeholder='Comments - 200 characters limit...' />
              </div>
              <div>

              </div>
                <button type='button' className='popup-button'>
                    Submit
                </button>
              </div>
              <p className='note'>Please Note: Custom Styles are not returnable.</p>
        </div>
      </div>
    );
  }
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    textAlign: 'left',
    
    
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    width: '440px',
    textAlign: 'center',
    
  },
 
};

export default Popup;
