import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export default function SmsConsent() {
  const tollFreeNumber = import.meta.env.VITE_PUBLIC_TWILIO_TOLL_FREE_NUMBER || null;

  return (
    <Layout>
      <SEO
        title="SMS Consent - OptiBay AI"
        description="Learn about OptiBay AI's SMS notification program, how to opt in, message types, and how to stop receiving messages."
        path="/sms-consent"
      />
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">SMS Consent &amp; Notifications</h1>
          <p className="text-lg font-semibold text-primary mb-8">
            Transactional service messages only. No marketing or promotional texts.
          </p>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">
              <em>Last updated: March 1, 2026</em>
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">SMS Program Information</h2>
              <p><strong>Program Name:</strong> OptiBay AI SMS Notifications</p>
              <p><strong>Operated By:</strong> OptiBay AI LLC</p>
              <p>
                <strong>Contact:</strong>{" "}
                <a href="mailto:joe@optibayai.com" className="text-primary hover:underline">
                  joe@optibayai.com
                </a>{" "}
                or visit our{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  Contact Page
                </Link>
              </p>
              <p>
                <strong>SMS Number:</strong>{" "}
                {tollFreeNumber ? tollFreeNumber : "Available upon request"}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What Messages You May Receive</h2>
              <p>
                When you opt in to OptiBay AI SMS notifications, you may receive the following types of messages:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Appointment confirmations and reminders</li>
                <li>Vehicle repair status updates</li>
                <li>Scheduling changes or notifications</li>
                <li>Two-way customer support communications</li>
              </ul>
              <p className="mt-4">
                <strong>Important:</strong> We do not send marketing or promotional messages unless you separately 
                opt in to marketing communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How to Opt In</h2>
              <p>You can opt in to receive SMS notifications in two ways:</p>

              <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="font-medium text-foreground mb-2">Method 1: In-App Consent</p>
                <p>
                  During the appointment booking or service intake process in the OptiBay platform, you will be asked to 
                  provide your mobile phone number and check a consent checkbox to receive SMS notifications.
                  The checkbox is unchecked by default and requires an affirmative user action to opt in.
                </p>
              </div>

              <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="font-medium text-foreground mb-2">Method 2: Text to Opt In</p>
                <p>
                  You can text <strong>START</strong> or <strong>UNSTOP</strong> to{" "}
                  {tollFreeNumber ? <strong>{tollFreeNumber}</strong> : "our toll-free number"}{" "}
                  to opt in or resubscribe to SMS notifications.
                </p>
              </div>

              <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm font-medium text-foreground mb-2">Consent Checkbox Language:</p>
                <blockquote className="italic border-l-4 border-primary pl-4 text-sm">
                  "I agree to receive SMS messages from OptiBay AI regarding my vehicle service appointments, 
                  including appointment confirmations, reminders, and status updates. Message frequency varies. 
                  Message and data rates may apply. Reply STOP to cancel, HELP for help. Consent is not a 
                  condition of purchase."
                </blockquote>
              </div>

              <p className="mt-4">
                Consent can be revoked at any time by replying <strong>STOP</strong> to any message.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Two-Way Messaging</h2>
              <p>
                OptiBay supports two-way conversational SMS between the shop and the customer. 
                When you receive a message, you may reply directly. Your reply will be delivered 
                to the shop for follow-up. Standard message and data rates apply to any messages you send.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Supported Keywords</h2>
              <p>The following keywords are supported (case-insensitive):</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border">Keyword(s)</th>
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3"><strong>STOP, STOPALL, UNSUBSCRIBE, END, QUIT</strong></td>
                      <td className="p-3">Opt out of all SMS notifications</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3"><strong>HELP, INFO</strong></td>
                      <td className="p-3">Receive help and program information</td>
                    </tr>
                    <tr>
                      <td className="p-3"><strong>START, UNSTOP</strong></td>
                      <td className="p-3">Opt in / resubscribe to SMS notifications</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Consent Terms</h2>
              <p>
                <strong>Consent is not a condition of purchase.</strong> You may complete your appointment booking 
                or service intake without opting in to SMS notifications. If you choose not to opt in, we will 
                communicate with you through other means such as email or phone calls.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Message Frequency</h2>
              <p>
                Message frequency varies based on your appointment activity and service status. You will typically 
                receive messages related to appointment confirmations, reminders, and status updates as they occur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Rates</h2>
              <p>
                Message and data rates may apply. Please contact your mobile carrier for information about your 
                text messaging plan and any applicable charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How to Opt Out</h2>
              <p>You can opt out of SMS notifications at any time by:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Text STOP</strong> — Reply STOP (or STOPALL, UNSUBSCRIBE, END, QUIT) to any message to cancel all future SMS notifications
                </li>
                <li>
                  <strong>Text HELP</strong> — Reply HELP (or INFO) to any message for assistance and support information
                </li>
                <li>
                  <strong>Contact Us</strong> — Email{" "}
                  <a href="mailto:joe@optibayai.com" className="text-primary hover:underline">
                    joe@optibayai.com
                  </a>{" "}
                  or visit our{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    Contact Page
                  </Link>
                </li>
              </ul>
              <p className="mt-4">
                After opting out, you will receive a confirmation message and will no longer receive SMS 
                notifications from OptiBay AI. You can re-subscribe at any time by texting <strong>START</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Your Data</h2>
              <p>
                Your phone number is used only for the purposes described above. We do not sell or share your 
                personal information with third parties for marketing purposes. For complete details on how we 
                handle your data, please review our{" "}
                <Link to="/legal/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Carrier Disclaimer</h2>
              <p>
                Carriers are not liable for delayed or undelivered messages. Message delivery is subject to 
                carrier network availability and other factors outside our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Related Policies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Link to="/legal/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/legal/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Questions?</h2>
              <p>
                If you have questions about our SMS notifications program, please contact us at{" "}
                <a href="mailto:joe@optibayai.com" className="text-primary hover:underline">
                  joe@optibayai.com
                </a>{" "}
                or visit our{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  Contact Page
                </Link>
                .
              </p>
            </section>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/30">
              <p className="text-sm font-medium text-foreground">
                <strong>Quick Reference:</strong>
              </p>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Text <strong>STOP</strong> to cancel</li>
                <li>• Text <strong>HELP</strong> for assistance</li>
                <li>• Text <strong>START</strong> to resubscribe</li>
                <li>• Message frequency varies</li>
                <li>• Message and data rates may apply</li>
                <li>• Consent is not required for purchase</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
