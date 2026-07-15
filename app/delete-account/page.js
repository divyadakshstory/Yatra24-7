import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "Delete Account | Yatra24-7",
  description: "Request deletion of your Yatra24-7 account and personal data.",
};

export default function DeleteAccount() {
  return (
    <LegalPage
      title="Delete Account"
      lastUpdated="15 July 2026"
    >
      <p>
        At <strong>Yatra24-7</strong>, we respect your privacy and your right to
        control your personal information. If you no longer wish to use our
        services, you may request deletion of your account.
      </p>

      <h2>How to Request Account Deletion</h2>

      <ol>
        <li>Send an email to <strong>Kumarshushant844@gmail.com</strong>.</li>
        <li>Use the subject line <strong>"Delete My Yatra24-7 Account"</strong>.</li>
        <li>Include your registered mobile number in the email.</li>
      </ol>

      <h2>What Will Be Deleted</h2>

      <ul>
        <li>Your account profile.</li>
        <li>Your personal information associated with the account.</li>
        <li>Your saved preferences.</li>
      </ul>

      <h2>What May Be Retained</h2>

      <p>
        Certain records, such as completed booking history, invoices, or
        information required by applicable laws, may be retained for legal,
        tax, fraud prevention, or regulatory purposes.
      </p>

      <h2>Processing Time</h2>

      <p>
        Account deletion requests are generally processed within 7 business
        days after verification.
      </p>

      <h2>Need Help?</h2>

      <p>
        <strong>Email:</strong> Kumarshushant844@gmail.com
      </p>

      <p>
        <strong>Website:</strong> https://yatra24-7.com
      </p>

      <p>
        If you need assistance regarding your account or data, please contact
        us using the email above.
      </p>
    </LegalPage>
  );
}
