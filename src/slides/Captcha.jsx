import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = ({ onChange }) => {
  const siteKey = process.env.REACT_APP_SITE_KEY;

  return (
    <div style={{ display: 'flex', justifyContent: 'start', margin: '20px  0px 20px 60px' }} id='captcha'>
  <div style={{ transform: 'scale(1)', transformOrigin: '0 0' }}>
    <ReCAPTCHA
      sitekey={siteKey}
      onChange={onChange}
    />
  </div>
</div>


  );
};

export default Captcha;
