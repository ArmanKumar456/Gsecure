import React from 'react';
import { Shield } from 'lucide-react';

export const metadata = {
  title: "Terms of Service | G-Secure",
  description: "Terms of Service for G-Secure. Read about our acceptable usage, service limitations, and account security policies.",
};

const TermsOfService = () => {
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
            <div className="p-4 bg-gradient-to-br from-amber-900/50 via-orange-900/50 to-amber-900/50 rounded-2xl border border-amber-500/30">
              <Shield className="w-12 h-12 text-amber-400" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-orange-300 to-white bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: May 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the G-Secure platform, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. User Responsibilities</h2>
            <p>
              As a user of G-Secure, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Provide accurate and complete information during registration.</li>
              <li>Use the platform exclusively for lawful purposes.</li>
              <li>Not attempt to disrupt, exploit, or bypass the security features of the platform.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Account Security & Master Password</h2>
            <p>
              You are entirely responsible for maintaining the confidentiality of your master password. Because G-Secure uses a zero-knowledge architecture, <strong>we cannot recover or reset your master password if it is lost.</strong> It is solely your responsibility to secure your account credentials.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Acceptable Usage</h2>
            <p>
              You may use G-Secure to store your passwords and personal secure notes. You may not use our services to store illicit, illegal, or heavily restricted materials that violate applicable international, federal, or state laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Service Limitations</h2>
            <p>
              While we strive to provide continuous, high-quality service, G-Secure is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We reserve the right to modify, suspend, or discontinue any part of the service at any time with or without notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Liability Disclaimer</h2>
            <p>
              To the maximum extent permitted by applicable law, G-Secure and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, resulting from your use of the service or any loss of data due to forgotten master passwords or unauthorized access resulting from user negligence.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Termination Conditions</h2>
            <p>
              We reserve the right to suspend or terminate your account at our sole discretion, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section className="space-y-4 border-t border-white/10 pt-8 mt-12">
            <h2 className="text-xl font-semibold text-white">Questions?</h2>
            <p>
              If you have any questions regarding these terms, please contact us at <span className="text-amber-400">legal@gsecure.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
