import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "Contact Us | Yatra24-7",
  description: "Contact Yatra24-7 Customer Support",
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact Us"
      lastUpdated="15 July 2026"
    >
      <p>
        Thank you for using <strong>Yatra24-7</strong>. If you have any
        questions, feedback, complaints, or need assistance regarding our
        taxi booking services, feel free to contact us.
      </p>

      <h2>Customer Support</h2>

      <p>
        <strong>Email:</strong> Kumarshushant844@gmail.com
      </p>

      <p>
        <strong>Website:</strong>{" "}
        <a
          href="https://yatra24-7.com"
          className="text-blue-600 hover:underline"
        >
          https://yatra24-7.com
        </a>
      </p>

      <h2>Support Services</h2>

      <ul>
        <li>Ride booking assistance</li>
        <li>Booking cancellation support</li>
        <li>Lost & found requests</li>
        <li>Account-related queries</li>
        <li>Privacy & data requests</li>
        <li>Technical support</li>
        <li>General feedback and suggestions</li>
      </ul>

      <h2>Support Hours</h2>

      <p>
        Our support team aims to respond to all emails within
        <strong> 24–48 business hours</strong>.
      </p>

      <h2>Business Information</h2>

      <p>
        <strong>Brand Name:</strong> Yatra24-7
      </p>

      <p>
        <strong>Service:</strong> Taxi Booking & Ride Services
      </p>

      <p>
        <strong>Coverage:</strong> Bihar, India (Expanding Soon)
      </p>

      <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="mb-2 text-xl font-bold text-blue-900">
          Need Immediate Help?
        </h3>

        <p className="text-gray-700">
          For urgent ride-related issues, booking support, or account
          assistance, please email us at{" "}
          <strong>Kumarshushant844@gmail.com</strong>. We will do our best
          to assist you as quickly as possible.
        </p>
      </div>
    </LegalPage>
  );
}
