import React from 'react';
import { Shield } from 'lucide-react';

export const metadata = {
  title: "Privacy Policy | G-Secure",
  description: "Privacy Policy for G-Secure. Learn how we handle, store, and protect your data using zero-knowledge architecture.",
};

const PrivacyPolicy = () => {
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
            <div className="p-4 bg-gradient-to-br from-blue-900/50 via-cyan-900/50 to-blue-900/50 rounded-2xl border border-blue-500/30">
              <Shield className="w-12 h-12 text-cyan-400" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: May 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
            <p>
              At G-Secure, your privacy and security are our highest priorities. This Privacy Policy outlines how we collect, use, and protect your information when you use our platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Zero-Knowledge Architecture</h2>
            <p>
              G-Secure operates on a strict <strong>zero-knowledge architecture</strong>. This means we cannot see, access, or decipher the passwords and secure data you store in your vault. Your master password encrypts all your data locally on your device before it is ever transmitted to our servers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Data Collection Practices</h2>
            <p>
              To provide you with our services, we collect minimal necessary information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong>Account Information:</strong> We collect the email address used during registration solely for account recovery, security notices, and authentication purposes.</li>
              <li><strong>Encrypted Vault Data:</strong> We store the encrypted blob of your vault data. We have no means to decrypt or read this data.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Password Encryption & Security Details</h2>
            <p>
              All vault data is encrypted locally using industry-standard 256-bit AES encryption. Your master password is never stored on our servers. Authentication is managed using advanced cryptographic hashing (such as bcrypt/Argon2) combined with secure salting mechanisms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Use of Cookies and Local Storage</h2>
            <p>
              G-Secure uses strictly necessary cookies and local storage mechanisms to manage your secure session and store preferences. We do not use third-party tracking cookies. Please refer to our <a href="/cookies" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">Cookie Policy</a> for detailed information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Third-Party Services</h2>
            <p>
              We do not sell, rent, or share your personal data with third parties for marketing purposes. We may use trusted third-party infrastructure providers to host our services, but they only have access to encrypted data blobs that they cannot read.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. User Rights and Data Deletion Requests</h2>
            <p>
              You have full control over your data. You hold the right to access, modify, or completely delete your account and associated data at any time from within your account settings. Upon deletion, your encrypted vault and email address are permanently removed from our active servers.
            </p>
          </section>

          <section className="space-y-4 border-t border-white/10 pt-8 mt-12">
            <h2 className="text-xl font-semibold text-white">Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please contact our security team at <span className="text-cyan-400">privacy@gsecure.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
