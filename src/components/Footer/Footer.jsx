import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css'
const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookIcon/>
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
                <li>AudioDescriptionIcon</li>
                <li>InvestorRelationsIcon</li>
                <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
               <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
            </ul>    
          </div>

          <div>
            <ul>
               <li>Gift Card</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
            </ul>    
          </div>

          <div>
            <ul>
               <li>Media Center</li>
                <li>Privacy</li>
                <li>Conatct Us</li>
            </ul>    
          </div>
        </div>
        <div className="service_code">
          Service Code
        </div>
        <div className="copy-write">
          © 1997-2025 Netflix, Inc.
        </div>
      </div>
    </div>
  )
}

export default Footer
