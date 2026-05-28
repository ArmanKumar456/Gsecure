import React from 'react';
import { Shield } from 'lucide-react';

export const metadata = {
  title: "Cookie Policy | G-Secure",
  description: "Cookie Policy for G-Secure. Understand how we use cookies for authentication, session management, and analytics.",
};

const CookiePolicy = () => {
  return (
    <div className="min-h-screen relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto backdrop-blur-xl bg-gradient-to-b from-white/5 to-white/10 rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12 lg:p-16">
        
        {/* Header */}
        <div className="text-center mb-12 border-b border-white/10 pb-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-emerald-900/50 via-green-900/50 to-emerald-900/50 rounded-2xl border border-emerald-500/30">
              <Shield className="w-12 h-12 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-300 via-green-300 to-white bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: May 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device by a web server when you visit a website. They are widely used to make websites work more efficiently and to provide essential functionality.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. How We Use Cookies</h2>
            <p>
              G-Secure uses cookies primarily for security and functionality. We categorize our cookie usage as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong>Strictly Necessary Cookies:</strong> These are essential for you to browse G-Secure and use its features. Without these cookies, services like secure login and vault access cannot be provided.</li>
              <li><strong>Authentication & Session Cookies:</strong> We use secure, HTTP-only cookies to verify your identity and maintain your active session safely while you interact with your vault.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Analytics and Tracking</h2>
            <p>
              To maintain our zero-knowledge promise and prioritize your privacy, G-Secure <strong>does not</strong> use intrusive third-party tracking or advertising cookies. Any analytics data collected is strictly anonymized and used only for improving platform performance and fixing bugs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Managing and Disabling Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser. 
            </p>
            <p>
              Please note that because we only use strictly necessary cookies, disabling them through your browser will likely prevent you from logging in and accessing your G-Secure vault.
            </p>
            <p>
              To learn how to manage cookies, you can visit the help pages of your respective browser (e.g., Google Chrome, Mozilla Firefox, Apple Safari).
            </p>
          </section>

          <section className="space-y-4 border-t border-white/10 pt-8 mt-12">
            <h2 className="text-xl font-semibold text-white">Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page regularly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
