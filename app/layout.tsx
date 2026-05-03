import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewReply AI — AI-Powered Restaurant Review Responses",
  description: "Generate personalized, on-brand responses to Google and Yelp reviews in seconds. Built for restaurant owners and hospitality managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fe6fb3c7-b017-42c5-8031-87d871b753d7"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
