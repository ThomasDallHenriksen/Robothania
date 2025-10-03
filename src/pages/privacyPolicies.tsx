import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../css/privacyPolicies.module.css';

const PrivacyPolicies: React.FC = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>PRIVACY POLICY</h1>
          
          <div className={styles.section}>
            <h2>Owner and Data Controller</h2>
            <p>Robothania A/S, Odense, Denmark</p>
            <p>Owner contact email: <a href="mailto:info@robothania.dk">info@robothania.dk</a></p>
            <p>Robothania respects your privacy. We do not share, sell, or rent any of the information collected to any third parties and do not intend to do so in the future.</p>
          </div>

          <div className={styles.section}>
            <h2>Information collected</h2>
            <p>If you request or submit information to Robothania by sending an email via the "mail to:" function or completing our contact form, we may save your email address as well as any other information you may provide. This information may be used to contact you in the future by mail, email, or phone to convey information about our solutions or services that we feel may benefit you. Your email and other information you provide will not be sold to any third party.</p>
          </div>

          <div className={styles.section}>
            <h2>Information collected by others</h2>
            <p>This notice addresses only the policy of the Robothania website and not the sites that users access via links from our site. Robothania is not responsible for the information collection policies of other sites, nor for the practices employed by websites linked to or from our website, nor for the information or content contained therein. Often links to other websites are provided solely as pointers to information on topics that may be useful to our visitors. Users are advised to review the privacy policy of other websites.</p>
          </div>

          <div className={styles.section}>
            <h2>Third-party applications</h2>
            <p>Here on this website, we collect and use statistics about which pages have been visited here on our website. All data is anonymously collected through third-party applications called Google Analytics. These data are shared only with Google Analytics.</p>
            <p>When you use and complete our contact form, you enter information about yourself. This information is used solely for the purpose of following up your inquiry.</p>
          </div>

          <div className={styles.section}>
            <h2>Cookies</h2>
            <p>Robothania itself does not employ cookies; however, cookies are used by Google Analytics, which Robothania does use. Users are advised to review these company's privacy policies.</p>
          </div>

          <div className={styles.section}>
            <h2>How to avoid cookies</h2>
            <p>You can avoid cookies at any time when you visit our website. What you need to do is select the Advanced Cookie settings in your browser under Internet settings. You can easily add our website to the list of websites you do not want cookies from. However, this can result in you not being able to use the website optimally.</p>
          </div>

          <div className={styles.section}>
            <h2>Updating, correcting, and deleting personal information</h2>
            <p>If you would like to have your personal information removed from our database, please send an email via the contact form, with "Remove personal information" in the subject line. To update, change, or correct your personal information, please send an email to <a href="mailto:info@robothania.dk">info@robothania.dk</a>.</p>
          </div>

          <div className={styles.section}>
            <h2>Applicability of broader protection standards regarding some Users</h2>
            <p>While most provisions of this document concern all Users, some provisions expressly only apply if the processing of Personal Data is subject to broader protection standards.</p>
            <p>Such broader protection standards apply when the processing:</p>
            <ul>
              <li>is performed by an Owner based within the EU;</li>
              <li>concerns the Personal Data of Users who are in the EU and is related to the offering of paid or unpaid goods or services, to such Users;</li>
              <li>concerns the Personal Data of Users who are in the EU and allows the Owner to monitor such Users' behaviour taking place in the EU.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>System logs and maintenance</h2>
            <p>For operation and maintenance purposes, our Website and any third-party services may collect files that record interaction with this Website (System logs) use other Personal Data (such as the IP Address) for this purpose.</p>
          </div>

          <div className={styles.section}>
            <h2>Information not contained in this policy</h2>
            <p>More details concerning the collection or processing of Personal Information may be requested from the Owner at any time. Please see the contact information at the beginning of this document.</p>
          </div>

          <div className={styles.section}>
            <h2>How "Do Not Track" requests are handled</h2>
            <p>Our Website does not support "Do Not Track" requests. To determine whether any of the third-party services it uses honour the "Do Not Track" requests, please read their privacy policies.</p>
          </div>

          <div className={styles.section}>
            <h2>Legally compelled disclosure of information</h2>
            <p>Robothania may disclose information when legally compelled to do so; in other words, when we, in good faith, believe that the law requires it or for the protection of our legal rights.</p>
          </div>

          <div className={styles.section}>
            <h2>Periodic policy changes</h2>
            <p>Please note that Robothania reviews its privacy practices from time-to-time (i.e. to track technology and/or legal changes), and that these practices are subject to change. To ensure continuing familiarity with the most current version of our privacy policy, please bookmark and periodically review this page. This policy statement is made in the name of Robothania and is effective as of October 3, 2025. This statement does not create an agreement between you and Robothania, and as such, does not create any legal rights for any party.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicies;