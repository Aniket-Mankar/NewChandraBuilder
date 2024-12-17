import './index.css'

const ChandraHomePage = () => {

return(
  <div className="main-product-page">
  <h1 className="product-page-first-head">
      Personalized Jewelry
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
  <div className='display-img-container'>
        <div className='first-block-img'>
              <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/Group-464.png" alt="display-img" className='display-img' />
              <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/Group-463.png" alt="display-img" className='display-img' />
              <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/Group-470-1.png" alt="display-img" className='display-img' />
        </div>
        <div className='first-block-img'>
              <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/Group-467.png" alt="display-img" className='display-img' />
              <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/Group-466.png" alt="display-img" className='display-img' />
              <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/Group-469.png" alt="display-img" className='display-img' />
        </div>
        <div className='first-block-img'>
              <img src="https://therunawaycrew.com/wp-content/uploads/2024/08/Group-503.png" alt="display-img" className='display-img' />
              <img src="https://therunawaycrew.com/wp-content/uploads/2024/08/Group-503.png" alt="display-img" className='display-img' />
              <img src="https://therunawaycrew.com/wp-content/uploads/2024/08/Group-500.jpg" alt="display-img" className='display-img' />
        </div>
        
  </div>
  <div className="hr-container">
    <img
      src="https://therunawaycrew.com/wp-content/uploads/2024/07/Line-65.png"
      alt="line"
      className="hr-line"
    />
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
        className='ledies-img'
       
      />
    </div>
    <div className="contact-from-container">
      <p>Use the form below to drop us an email.</p>
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
        <p className="phone">Home</p>
        <p>Product Page</p>
      </div>
    </div>
    <div className="main-mai-and-phone-container">
      <div className="mai-and-phone-container phone">
        <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/352510_local_phone_icon-2.png" alt='img' />
        <p>+91 86557 79700</p>
      </div>
      <div className="mai-and-phone-container">
        <img src="https://therunawaycrew.com/wp-content/uploads/2024/07/5402397_email_inbox_mail_message_envelope_icon-2.png" alt='img' />
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
        <b >Contact Us:</b>
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
    className="hr-last-line" alt='img'
  />
  <div className="term-and-condition">
    <p>Privacy Policy | Disclaimer</p>
    <p>©2024 Chandra Jewels</p>
  </div>
</div>

)
}

export default ChandraHomePage