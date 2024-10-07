export default function TermsOfCondition() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="mt-10">
        <h1 className="text-2xl ">Terms of Condition</h1>
      </div>

      <div className="flex flex-col w-5/6 my-10 p-8 shadow-2xl bg-white">
        <p>
          Welcome to <span className="text-primaryColor">blueshine</span>. By
          using our website and services, you agree to be bound by the following
          terms and conditions. Please read these Terms carefully before using
          our website or engaging our services.
        </p>

        {/* 1 */}
        <div className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">1. Acceptance of Terms</h2>
          <p>
            By accessing or using blueshine’s website and services, you agree to
            comply with these Terms and Conditions. If you do not agree to these
            Terms, you should not use this website or any of our services.
          </p>
        </div>

        {/* 2 */}
        <div className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">2. Changes to Terms</h2>
          <p>
            We reserve the right to modify or update these Terms at any time
            without prior notice. Any changes to these Terms will be effective
            upon posting. It is your responsibility to review the Terms
            periodically for any updates or changes.
          </p>
        </div>

        {/* 3 */}
        <div className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">3. Services Provided</h2>
          <div>
            <p className="my-2">
              blueshine offers services related to real estate including but not
              limited to:
            </p>
            <ul>
              <li>• Property listings</li>
              <li>• Property management services</li>
              <li>• Real estate consultancy</li>
              <li>• Legal advisory on property matters</li>
              <li>
                • Mortgage and financing advice We do not guarantee the
                accuracy, completeness, or availability of any property listings
                or information provided on the website.
              </li>
            </ul>
          </div>
        </div>

        {/* 4 */}
        <div className="mt-10 flex flex-col gap-2">
          <h3 className="text-2xl">4. User Responsibilities</h3>

          <div>
            <p className="my-2">As a user of this website, you agree to:</p>
            <ul>
              <li>
                • Provide accurate and truthful information when creating an
                account or submitting property details.
              </li>
              <li>
                • Use the website for lawful purposes and in compliance with all
                applicable laws and regulations.
              </li>
              <li>
                • Not engage in any fraudulent activity, including but not
                limited to false advertising, misrepresentation of property
                details, or submitting false financial information.
              </li>
            </ul>
          </div>
        </div>

        {/* 5 */}
        <div className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">5. Property Listings</h2>
          <p>
            All property listings provided on our website are for informational
            purposes only. blueshine does not own, manage, or control the
            properties listed unless explicitly stated. We do not guarantee the
            accuracy of the property information, including but not limited to
            property prices, availability, dimensions, or location.
          </p>
        </div>

        {/* 6 */}
        <div className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">6. Intellectual Property</h2>
          <p>
            All content provided on this website, including but not limited to
            text, images, graphics, logos, and videos, is the intellectual
            property of blueshine or its licensors. You may not copy, reproduce,
            distribute, or use any content without our prior written consent.
          </p>
        </div>
      </div>
    </div>
  );
}
