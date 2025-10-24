import React from 'react';
import '../css/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Information</h3>
          <div className="contact-info">
            <p>Robothania A/S<br />
              CVR: 44 81 18 47<br />
              <p><strong>Adresse:</strong></p>
              Landbrugsvej 6<br />
              5260 Hjallese<br />
              Danmark</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact information</h3>
          <div className="contact-details">
            <p><strong>Telefon:</strong> +45 00 00 00 00</p>
            <p><strong>Email:</strong> info@robothania.dk</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <div className="legal-links">
            <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Links</h3>
          <div className="links">
            <a href="https://www.linkedin.com/company/robothania-a-s/" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/icons/linkedin.png" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://www.youtube.com/@Robothania" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/icons/youtube.png" alt="YouTube" className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Robothania A/S.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;