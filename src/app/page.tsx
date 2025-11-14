'use client'

import {
  GraduationCap,
  DollarSign,
  Calendar,
  CheckCircle,
  TrendingUp,
  FileText,
  Bell,
  Target
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">✨</span>
              <span className="text-2xl font-bold">
                <span className="text-blue-600">m</span>
                <span className="text-green-600">a</span>
                <span className="text-cyan-600">g</span>
                <span className="text-purple-600">i</span>
                <span className="text-orange-500">c</span>
                <span className="text-red-600">S</span>
                <span className="text-blue-600">c</span>
                <span className="text-green-600">h</span>
                <span className="text-cyan-600">o</span>
                <span className="text-purple-600">l</span>
                <span className="text-orange-500">a</span>
                <span className="text-red-600">r</span>
              </span>
              <span className="text-2xl">✨</span>
            </div>

            {/* CTA Button */}
            <a
              href="https://app.magicscholar.com"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Launch App
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Navigate College Applications with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Confidence TEST
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Track college applications, discover scholarships, and manage deadlines—all in one place.
            AI-powered tools for pennies. Built for students, counselors, and families navigating higher education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.magicscholar.com"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              Get Started Free
            </a>
            <a
              href="#pricing"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            College Planning Shouldn't Be Overwhelming
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Missed Deadlines</h3>
              <p className="text-gray-600">
                Important dates scattered across emails, websites, and sticky notes
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lost Opportunities</h3>
              <p className="text-gray-600">
                Scholarships and aid that families never discover or apply for
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Uncertainty</h3>
              <p className="text-gray-600">
                Unclear costs make it impossible to plan and compare real options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-xl text-gray-600">
            Simple tools that help you stay organized and make informed decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* College Application Tracking */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="text-blue-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              College Application Tracking
            </h3>
            <p className="text-gray-600 mb-4">
              Monitor every application from research to enrollment. Track status, deadlines,
              and requirements for all your target schools.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Real-time application status tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Deadline management and reminders</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Requirements checklist for each school</span>
              </li>
            </ul>
          </div>

          {/* Scholarship Discovery */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="text-green-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Scholarship Discovery & Tracking
            </h3>
            <p className="text-gray-600 mb-4">
              Find scholarships that match your profile. Track applications, deadlines,
              and requirements—never miss an opportunity.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Curated scholarship database</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Application status tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Deadline alerts and reminders</span>
              </li>
            </ul>
          </div>

          {/* AI-Powered Profile */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Target className="text-purple-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              AI-Powered Resume Parsing
            </h3>
            <p className="text-gray-600 mb-4">
              Upload your resume and let AI automatically extract your achievements,
              activities, and qualifications to match you with opportunities.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Instant profile building from resume</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Automatic scholarship matching</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Profile completion tracking</span>
              </li>
            </ul>
          </div>

          {/* Financial Planning */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="text-cyan-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Financial Transparency
            </h3>
            <p className="text-gray-600 mb-4">
              Access real tuition data and financial information for every institution.
              Make informed decisions based on actual costs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Current tuition and fee data</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">In-state vs out-of-state costs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Compare costs across schools</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ridiculously Affordable
            </h2>
            <p className="text-xl text-gray-600">
              Pay only for what you use. No subscriptions. No hidden fees.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Main Pricing Card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 md:p-12 border-2 border-blue-200 mb-12">
              <div className="text-center mb-8">
                <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  USAGE-BASED PRICING
                </div>
                <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-2">
                  4¢
                </div>
                <p className="text-2xl text-gray-700 font-medium">per AI analysis</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Resume Analysis</h4>
                    <p className="text-gray-600">
                      Upload a resume, AI extracts all information and builds a complete profile—for just 4 cents.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Future AI Features</h4>
                    <p className="text-gray-600">
                      As we add more AI capabilities, you'll pay the same low rate—only when you use them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                <h4 className="font-bold text-gray-900 mb-4 text-center">What This Means:</h4>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">$0.04</div>
                    <p className="text-sm text-gray-600">AI resume analysis</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">$0.00</div>
                    <p className="text-sm text-gray-600">College tracking</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">$0.00</div>
                    <p className="text-sm text-gray-600">Scholarship tracking</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Comparison */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Compare the Value
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Traditional college counseling (per hour)</span>
                  <span className="text-2xl font-bold text-gray-900">$100-300</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Other SaaS platforms (per month)</span>
                  <span className="text-2xl font-bold text-gray-900">$20-50</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-2 border-green-300">
                  <span className="text-gray-900 font-semibold">MagicScholar AI resume analysis</span>
                  <span className="text-3xl font-bold text-green-600">$0.04</span>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-6">
                Use the platform for free. Pay pennies only when you use AI features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for Everyone in the Journey
            </h2>
            <p className="text-xl text-blue-100">
              Whether you're applying or helping someone apply
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Students</h3>
              <p className="text-blue-100">
                Take control of your college applications. Track deadlines, discover
                scholarships, and stay organized throughout the process.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Parents & Families</h3>
              <p className="text-blue-100">
                Support your student with visibility into their applications and finances.
                Find opportunities to make college more affordable.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Counselors & Advisors</h3>
              <p className="text-blue-100">
                Help multiple students stay on track. Access comprehensive tools to guide
                students through applications and financial planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CampusConnect for Institutions */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur-lg px-6 py-2 rounded-full text-white font-semibold mb-6">
              FOR INSTITUTIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CampusConnect: Coming Soon
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A comprehensive directory platform connecting institutions with prospective students.
              Reach families, counselors, and independent advisors actively searching for the right college fit.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-left">
                <h3 className="text-xl font-bold text-white mb-3">Enhanced Visibility</h3>
                <p className="text-blue-100">
                  Premium listings in our growing network of students and families actively
                  using MagicScholar for college planning.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-left">
                <h3 className="text-xl font-bold text-white mb-3">Admin Dashboard</h3>
                <p className="text-blue-100">
                  Manage your institution's profile, update information, and track engagement
                  with prospective students.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why CampusConnect?</h3>
              <p className="text-blue-100 mb-4">
                With college enrollment down and competition increasing, institutions need better
                ways to reach qualified prospective students. CampusConnect connects you directly
                with families actively planning their college journey.
              </p>
              <p className="text-lg text-blue-200 font-semibold">
                Directory of 6,000+ US institutions • Featured listings • Direct student engagement
              </p>
            </div>

            <a
              href="mailto:contact@magicscholar.com?subject=CampusConnect%20Interest"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
            >
              Contact Us About CampusConnect
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Effective Process
          </h2>
          <p className="text-xl text-gray-600">
            Get started in minutes, stay organized throughout
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Create Account</h3>
            <p className="text-gray-600">
              Sign up with your email or social account
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-600">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Build Profile</h3>
            <p className="text-gray-600">
              Upload resume or fill in your information
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-purple-600">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Add Schools</h3>
            <p className="text-gray-600">
              Track applications and discover scholarships
            </p>
          </div>
          <div className="text-center">
            <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-cyan-600">
              4
            </div>
            <h3 className="text-xl font-semibold mb-2">Stay Organized</h3>
            <p className="text-gray-600">
              Never miss a deadline or opportunity
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join families and students navigating college applications with confidence
          </p>
          <a
            href="https://app.magicscholar.com"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            Launch MagicScholar
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">✨</span>
                <span className="text-xl font-bold text-white">MagicScholar</span>
                <span className="text-xl">✨</span>
              </div>
              <p className="text-sm">
                Making college applications and financial planning accessible for everyone.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="https://app.magicscholar.com" className="hover:text-white transition-colors">
                    Launch App
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Institutions</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-blue-300">CampusConnect (Coming Soon)</span>
                </li>
                <li>
                  <a href="mailto:contact@magicscholar.com?subject=CampusConnect%20Interest" className="hover:text-white transition-colors">
                    Request Information
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} MagicScholar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
