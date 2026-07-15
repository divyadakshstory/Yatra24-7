import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "Terms & Conditions | Yatra24-7",
  description: "Terms and Conditions for Yatra24-7 Taxi Booking Services",
};

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lastUpdated="15 July 2026"
    >
      <p>
        Welcome to <strong>Yatra24-7</strong>. By accessing our website or using
        our mobile application, you agree to these Terms & Conditions. If you do
        not agree, please do not use our services.
      </p>

      <h2>1. Our Services</h2>
      <p>
        Yatra24-7 provides taxi booking services that connect customers with
        drivers for local, outstation, airport and scheduled rides.
      </p>

      <h2>2. User Responsibilities</h2>
      <ul>
        <li>Provide accurate booking information.</li>
        <li>Maintain respectful behavior with drivers.</li>
        <li>Use the service only for lawful purposes.</li>
        <li>Pay applicable fares and additional charges.</li>
      </ul>

      <h2>3. Booking & Cancellation</h2>
      <p>
        Bookings are subject to driver availability. Customers may cancel rides
        according to the cancellation policy displayed in the application.
      </p>

      <h2>4. Fare & Payments</h2>
      <ul>
        <li>Estimated fares are shown before booking.</li>
        <li>Toll, parking and state taxes may be charged separately.</li>
        <li>Payment can be made using the available payment methods.</li>
      </ul>

      <h2>5. Driver Availability</h2>
      <p>
        We do not guarantee immediate driver availability. Waiting time may vary
        depending on demand and location.
      </p>

      <h2>6. Prohibited Activities</h2>
      <ul>
        <li>Providing false information.</li>
        <li>Misuse of the application.</li>
        <li>Fraudulent bookings.</li>
        <li>Harassment of drivers or customers.</li>
      </ul>

      <h2>7. Limitation of Liability</h2>
      <p>
        Yatra24-7 is not responsible for delays caused by traffic, weather,
        road closures, accidents or other events beyond our reasonable control.
      </p>

      <h2>8. Privacy</h2>
      <p>
        Your personal information is handled according to our Privacy Policy.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update these Terms & Conditions at any time. Continued use of our
        services indicates acceptance of the revised terms.
      </p>

      <h2>10. Contact</h2>

      <p>
        <strong>Email:</strong> Kumarshushant844@gmail.com
      </p>

      <p>
        <strong>Website:</strong> https://yatra24-7.com
      </p>
    </LegalPage>
  );
}
