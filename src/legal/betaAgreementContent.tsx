import { Link } from "react-router-dom";

export function BetaAgreementContent() {
  return (
    <>
      <p>
        Thank you for agreeing to beta test the OptiBay App. Please read the following carefully. It includes terms that apply specifically to the beta test period.
      </p>

      <h2>Terms We Use</h2>
      <p>How we identify individuals and businesses:</p>
      <ul>
        <li>"You," or "your" refers to the automotive repair shop, whether a business entity or a sole proprietorship, that has agreed to be a beta test site.</li>
        <li>"User" means individual users of the software under your license.</li>
      </ul>
      <p>Other terms:</p>
      <ul>
        <li>"Agreement" means this Beta Testing Agreement, the <Link to="/legal/terms/shop">Repair Shop Terms of Service</Link>, and our <Link to="/legal/privacy">Privacy Policy</Link>.</li>
        <li>"App" means the OptiBay progressive web app.</li>
        <li>"Beta Test Period" means the period from your execution of our Agreement up to the public launch of the App.</li>
        <li>"Confidential Information" means the beta version(s) of the App and any and all OptiBay AI non-public, proprietary information concerning the App that we provide to you or that is developed during the Beta Test Period. Confidential Information includes the pre-launch version of the App, any supporting documentation, beta test reports and feedback, and any other non-public information concerning the App and its development.</li>
      </ul>

      <h2>What This Beta Testing Agreement Covers</h2>
      <p>
        This Beta Testing Agreement includes special terms that apply to the Beta Test Period. The applicable <Link to="/legal/terms/shop">Terms of Service</Link> and our <Link to="/legal/privacy">Privacy Policy</Link> are part of our Agreement and are incorporated into this Beta Testing Agreement by reference. In the event of a conflict between these terms and the applicable Terms of Service or Privacy Policy, this Beta Testing Agreement takes precedence.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The primary purpose of beta testing is to get quantitative and qualitative feedback on the App's real time performance and to identify any unknown issues. Please use caution when beta testing and back up any essential information that you save in the App.
      </p>

      <h2>Feedback</h2>
      <p>
        You agree to provide us with reasonable suggestions, comments and feedback regarding the OptiBay App, including but not limited to usability, bug reports and test results.
      </p>

      <h2>5. Limited Purpose</h2>
      <p>
        During the Beta Test period, you agree that you and your Users will use the App and Confidential Information solely for the purpose of testing the App and providing feedback to us.
      </p>

      <h2>6. Confidentiality</h2>
      <p>
        You agree that you and your Users will keep the App and other Confidential Information strictly confidential and will not disclose such Confidential Information to third parties without written authorization from OptiBay AI, until such time as such information is no longer confidential.
      </p>
      <p>
        Testing reports and feedback will remain the Confidential Information of OptiBay AI after the Beta Test Period concludes unless subject to an exception.
      </p>
      <p>Confidentiality obligations will not apply to any information that:</p>
      <ul>
        <li>you knew or possessed before the Beta Test Period;</li>
        <li>is or becomes public knowledge through no fault of yours or your Users;</li>
        <li>becomes available to you from a source not subject to confidentiality obligations;</li>
        <li>becomes available to you on a nonconfidential basis; or</li>
        <li>must be disclosed pursuant to a court or government order, provided that you give us notice and an opportunity to oppose the order.</li>
      </ul>

      <h2>Discount</h2>
      <p>
        Participants in the OptiBay Beta Program will receive special subscription pricing following the Beta Test Period.
      </p>
    </>
  );
}
