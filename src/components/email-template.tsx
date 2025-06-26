import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  inquiryId: string;
}

export function EmailTemplates({ name, email, message, inquiryId }: EmailTemplateProps) {
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000").trim();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "24px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        backgroundColor: "#f8fafc",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ color: "#1e293b", textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
        New Contact Inquiry
      </h2>

      <div style={{ marginTop: "20px", padding: "16px", backgroundColor: "#ffffff", borderRadius: "8px" }}>
        <p style={{ fontSize: "16px", color: "#475569", marginBottom: "8px" }}>
          <strong style={{ color: "#1e293b" }}>Name:</strong> {name}
        </p>
        <p style={{ fontSize: "16px", color: "#475569", marginBottom: "8px" }}>
          <strong style={{ color: "#1e293b" }}>Email:</strong> {email}
        </p>
        <p style={{ fontSize: "16px", color: "#475569", marginBottom: "8px" }}>
          <strong style={{ color: "#1e293b" }}>Message:</strong> {message}
        </p>
      </div>

      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <a
          href={`${baseUrl}/api/handle-inquiry?id=${encodeURIComponent(inquiryId)}&status=accepted&email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`}
          style={{
            textDecoration: "none",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            padding: "12px 20px",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            display: "inline-block",
            boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          ✅ Accept Inquiry
        </a>
        <a
          href={`${baseUrl}/api/handle-inquiry?id=${encodeURIComponent(inquiryId)}&status=rejected&email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`}
          style={{
            textDecoration: "none",
            backgroundColor: "#e11d48",
            color: "#ffffff",
            padding: "12px 20px",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            display: "inline-block",
            marginLeft: "10px",
            boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          ❌ Reject Inquiry
        </a>
      </div>
    </div>
  );
}
