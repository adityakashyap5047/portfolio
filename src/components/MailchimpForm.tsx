"use client";

import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "@/components/Newsletter";

export const MailchimpForm = () => {
  const postUrl = `https://localhost:8000/subscribe`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <Newsletter
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};