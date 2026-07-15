import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "Privacy Policy | Yatra24-7",
  description: "Privacy Policy for Yatra24-7 Taxi Booking App",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="15 July 2026"
    >
      <p>
        Welcome to <strong>Yatra24-7</strong>. Your privacy is important to us.
        This Privacy Policy explains how we collect, use, store and protect your
        information when you use our website and mobile application.
      </p>

      <h2>Information We Collect</h2>

      <ul>
        <li>Name</li>
        <li>Mobile Number</li>
        <li>Email Address (if provided)</li>
        <li>Pickup and Destination Locations</li>
        <li>Device Information</li>
        <li>GPS Location (with your permission)</li>
        <li>Booking History</li>
      </ul>

      <h2>How We Use Your Information</h2>

      <ul>
        <li>Provide taxi booking services.</li>
        <li>Connect customers with drivers.</li>
        <li>Calculate fares and routes.</li>
        <li>Improve our services.</li>
        <li>Provide customer support.</li>
        <li>Prevent fraud and misuse.</li>
      </ul>

      <h2>Location Permission</h2>

      <p>
        Yatra24-7 uses your device location only to provide ride booking,
        navigation and driver tracking. Your location is never accessed without
        your permission.
      </p>

      <h2>Information Sharing</h2>

      <p>
        We do not sell your personal information. Information may be shared only
        with drivers assigned to your booking or when required by law.
      </p>

      <h2>Data Security</h2>

      <p>
        We use reasonable technical and organizational measures to protect your
        information from unauthorized access or disclosure.
      </p>

      <h2>Your Rights</h2>

      <ul>
        <li>Request correction of your information.</li>
        <li>Request deletion of your account.</li>
        <li>Contact us regarding privacy concerns.</li>
      </ul>

<h2>Contact Us</h2>

<p>
  <strong>Email:</strong> Kumarshushant844@gmail.com
</p>

<p>
  <strong>Website:</strong> https://yatra24-7.com
</p>

<p>
  If you have any questions regarding this Privacy Policy, please contact us at{" "}
  <strong>Kumarshushant844@gmail.com</strong>.
</p>

    </LegalPage>
  );
}
