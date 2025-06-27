"use client";

import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "@/components/Newsletter";

export const MailchimpForm = () => {
  const postUrl = `https://localhost:8000/subscribe`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }: { subscribe: (data: { EMAIL: string }) => void; status: string; message: string; }) => (
        <Newsletter
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};