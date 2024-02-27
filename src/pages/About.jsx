import React from 'react';

import Mission from '../images/Mission.png'
import TeamImage from '../images/Team.png'
import ApproachImage from '../images/Approach.png'
import {CommanCard} from '../components/common/CommanCard';
    
const About = () => (
  <div className='Comman-cart'>
    <CommanCard
      title="IDHS Mission"
      description="We are committed to providing top-notch health services to our users within their city. Our mission is to help people achieve optimal health and wellness through personalized plans and ongoing support."
      imageSrc={Mission}
      altText="Mission Logo"
      action2Label="More"
    />
    <CommanCard
      title="IDHS Team"
      description="We are committed to providing top-notch health services to our users within their city. Our mission is to help people achieve optimal health and wellness through personalized plans and ongoing support."
      imageSrc={TeamImage}
      altText="Mission Logo"
      action2Label="More"
    />
    <CommanCard
      title="IDHS Approch"
      description="We are committed to providing top-notch health services to our users within their city. Our mission is to help people achieve optimal health and wellness through personalized plans and ongoing support."
      imageSrc={ApproachImage}
      altText="Mission Logo"
      action2Label="More"
    />
  </div>
  );

export default About;