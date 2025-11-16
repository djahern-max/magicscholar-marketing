'use client'

import {
  GraduationCap,
  DollarSign,
  Calendar,
  CheckCircle,
  TrendingUp,
  FileText,
  Target,
  Users,
  BarChart3,
  Globe,
  Sparkles,
  ArrowRight,
  Play
} from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [campusConnectNoticeOpen, setCampusConnectNoticeOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                MagicScholar
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#for-institutions"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                For Institutions
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Pricing
              </a>
              <a
                href="mailto:dane@magicscholar.com?subject=MagicScholar%20and%20CampusConnect%20Inquiry"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </a>
            </nav>


            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <a
                href="https://app.magicscholar.com"
                className="bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-sm hover:shadow-md text-sm sm:text-base"
              >
                MagicScholar
              </a>
              <button
                type="button"
                onClick={() => setCampusConnectNoticeOpen(true)}
                className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold text-sm sm:text-base bg-white"
              >
                CampusConnect
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* CampusConnect Coming Soon Popup */}
      {campusConnectNoticeOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setCampusConnectNoticeOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              CampusConnect is Coming Soon
            </h3>
            <p className="text-gray-600 mb-4">
              We&apos;re putting the finishing touches on CampusConnect&mdash;the portal that lets
              colleges and scholarship providers build rich pages students discover inside MagicScholar.
            </p>
            <p className="text-gray-600 mb-6">
              In the meantime, you can explore the student experience in MagicScholar today.
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setCampusConnectNoticeOpen(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium"
              >
                Close
              </button>
              <a
                href="https://app.magicscholar.com"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-semibold"
              >
                Open MagicScholar
              </a>
            </div>
          </div>
        </div>
      )}


      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles size={16} />
                MagicScholar for students • CampusConnect for institutions
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                College Planning Made Clear for Everyone
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                MagicScholar helps students discover colleges and scholarships while giving institutions CampusConnect&mdash;a modern way to reach qualified prospective students right as they plan their future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://app.magicscholar.com"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all text-lg font-semibold shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                >
                  Get Started Free
                  <ArrowRight size={20} />
                </a>
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all text-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  <Play size={20} />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Vibrant Campus Visuals</div>
                      <div className="text-sm text-gray-600">Help students picture life on your campus</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Smart Scholarship Discovery</div>
                      <div className="text-sm text-gray-600">Surface opportunities students actually qualify for</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                    <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">AI-Assisted Profiles</div>
                      <div className="text-sm text-gray-600">Turn activities and achievements into a polished profile</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - MOVED TO TOP */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See MagicScholar & CampusConnect in Action
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Watch how independent college advisors, guidance counselors, high schools, and families use{" "}
            <span className="font-semibold">MagicScholar</span> to support students&mdash;and how colleges and scholarship providers use{" "}
            <span className="font-semibold">CampusConnect</span> to power the pages those students discover.
          </p>

          {/* Video Placeholder */}
          <div className="bg-gray-800 rounded-2xl aspect-video flex items-center justify-center border-2 border-gray-700 shadow-2xl">
            <div className="text-center">
              <Play className="text-white mx-auto mb-4" size={64} />
              <p className="text-white text-xl font-semibold">Video Coming Soon</p>
              <p className="text-gray-400 mt-2">
                This demo will cover both the student-facing MagicScholar app and the CampusConnect portal for colleges and scholarship providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">Growing</div>
              <div className="text-gray-400">Institution & Scholarship Network</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">AI-Assisted</div>
              <div className="text-gray-400">Profile & Application Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Free Core Tools for Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Visual</div>
              <div className="text-gray-400">Campus & Scholarship Discovery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - The Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bridging the Gap in Higher Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Students need guidance to find the right fit. Institutions need efficient ways to reach the right students. MagicScholar connects both sides of the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="text-red-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Students Need Support</h3>
              <p className="text-gray-700 leading-relaxed">
                The college application process is complex and fragmented. Students need a single place to organize deadlines, requirements, and opportunities that align with who they are.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 border border-orange-200">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="text-orange-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Unclaimed Opportunities</h3>
              <p className="text-gray-700 leading-relaxed">
                An estimated $100 million in scholarships and billions in federal grants go unclaimed every year. Many awards are small, local, or niche&mdash;and students simply never find them.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enrollment Challenges</h3>
              <p className="text-gray-700 leading-relaxed">
                Demographic shifts are shrinking traditional applicant pools. Institutions need more targeted, student-friendly ways to stand out and build relationships early in the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Institutions Section - PRIMARY VALUE PROP */}
      <section
        id="for-institutions"
        className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full text-blue-300 font-semibold mb-6 border border-blue-400/30">
              FOR COLLEGES & SCHOLARSHIP PROVIDERS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CampusConnect: Reach the Right Students at the Right Time
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Show up where students are actively planning their future. Refresh your profile, showcase programs with rich visuals, and connect with qualified prospects&mdash;without a heavy lift from your team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* For Colleges */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">For Colleges & Universities</h3>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-blue-100">
                    <strong className="text-white">Complete Profile Control:</strong> Keep tuition, admission requirements, programs, and campus details accurate and up to date.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-blue-100">
                    <strong className="text-white">Visual Showcase:</strong> Share campus photos and YouTube videos that help students imagine themselves on campus.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-blue-100">
                    <strong className="text-white">Enhanced Visibility:</strong> Gain featured placement when students search for schools that match their academic and financial goals.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-blue-100">
                    <strong className="text-white">Analytics Dashboard:</strong> Understand profile views and engagement so you can refine messaging over time.
                  </p>
                </div>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400/30">
                <div className="text-3xl font-bold text-white mb-1">$39.99/month</div>
                <div className="text-blue-200">30-day free trial &bull; Cancel anytime</div>
              </div>
            </div>

            {/* For Scholarships */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">For Scholarship Providers</h3>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-blue-100">
                    <strong className="text-white">Targeted Reach:</strong> Connect with students whose profiles align with your eligibility criteria.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-blue-100">
                    <strong className="text-white">Easy Management:</strong> Edit requirements, deadlines, and award amounts in minutes.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-blue-100">
                    <strong className="text-white">Rich Content:</strong> Add photos, videos, and detailed descriptions so students truly understand your opportunity.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-blue-100">
                    <strong className="text-white">Qualified Applicants:</strong> Reach students already searching for scholarships that match their goals and background.
                  </p>
                </div>
              </div>
              <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
                <div className="text-3xl font-bold text-white mb-1">$19.99/month</div>
                <div className="text-green-200">30-day free trial &bull; Cancel anytime</div>
              </div>
            </div>
          </div>

          {/* Why Now Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Why CampusConnect Matters Now
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">Shifting</div>
                <div className="text-white font-semibold mb-2">Demographics</div>
                <p className="text-blue-200 text-sm">
                  Smaller graduating classes mean more competition for each qualified student. A modern, student-centric presence helps you stand out.
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">Active</div>
                <div className="text-white font-semibold mb-2">Student Engagement</div>
                <p className="text-blue-200 text-sm">
                  Reach students at the exact moment they&apos;re researching schools, comparing costs, and building their college lists.
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">Simple</div>
                <div className="text-white font-semibold mb-2">Setup Process</div>
                <p className="text-blue-200 text-sm">
                  No complex integrations or IT projects. We&apos;ll help you set up, launch, and optimize your profile for visibility.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="mailto:dane@magicscholar.com?subject=CampusConnect%20Institution%20Interest"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Get Started with CampusConnect
            </a>
            <p className="text-blue-200 mt-4">
              Or email us directly at{" "}
              <a
                href="mailto:dane@magicscholar.com?subject=CampusConnect%20Institution%20Interest"
                className="underline hover:text-white"
              >
                dane@magicscholar.com
              </a>
              .
            </p>

            <p className="text-blue-200 mt-4">
              We&apos;ll personally help you set up and optimize your profile &bull; Free onboarding support
            </p>
          </div>
        </div>
      </section>

      {/* Student Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything Students Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Free tools to organize applications, discover funding, and navigate the college journey with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                College Application Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track every school from first interest to final decision. Keep requirements, documents, and status updates together in one organized view.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Scholarship Discovery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Discover scholarships that match your profile&mdash;including small, local, and niche awards that are often overlooked.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI-Assisted Profile Creation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Use AI to turn your activities, coursework, and achievements into a polished profile that supports applications and scholarship searches.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Deadline Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Never miss an important date again. Stay ahead of school deadlines, scholarship due dates, and key financial aid milestones.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="text-indigo-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Comprehensive Institution Data
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Explore detailed information on institutions&mdash;from tuition and programs to admissions data and campus visuals&mdash;in a single place.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-pink-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Financial Planning Tools
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Compare costs across schools with transparent tuition data. Understand in-state vs. out-of-state pricing and build realistic financial plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Students use the platform for free. Institutions and scholarship providers pay only for enhanced visibility and tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Students */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                FOR STUDENTS
              </div>
              <div className="text-center mb-8 pt-4">
                <div className="text-5xl font-bold text-gray-900 mb-2">$0</div>
                <p className="text-gray-600 font-medium">Core Platform</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Unlimited college tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Scholarship discovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Deadline management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">AI-assisted profile creation</span>
                </li>
              </ul>
              <a
                href="https://app.magicscholar.com"
                className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Started Free
              </a>
            </div>

            {/* Scholarship Providers */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                SCHOLARSHIPS
              </div>
              <div className="text-center mb-8 pt-4">
                <div className="text-5xl font-bold text-gray-900 mb-2">$19.99</div>
                <p className="text-gray-600 font-medium">per month</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Complete profile control</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Photo &amp; video uploads</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Student matching</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Setup support included</span>
                </li>
              </ul>
              <a
                href="mailto:dane@magicscholar.com?subject=Scholarship%20Provider%20Signup"
                className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Start Free Trial
              </a>
            </div>

            {/* Institutions */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-300 relative shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                COLLEGES
              </div>
              <div className="text-center mb-8 pt-4">
                <div className="text-5xl font-bold text-gray-900 mb-2">$39.99</div>
                <p className="text-gray-600 font-medium">per month</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Full institutional profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Campus photo gallery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Video showcase (YouTube)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Dedicated onboarding</span>
                </li>
              </ul>
              <a
                href="mailto:dane@magicscholar.com?subject=Institution%20Signup"
                className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold shadow-md"
              >
                Start Free Trial
              </a>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12 text-lg">
            All plans include 30-day free trial &bull; No credit card required &bull; Cancel anytime
          </p>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for the Entire College Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you&apos;re applying, supporting, or recruiting&mdash;MagicScholar helps everyone stay aligned.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Students</h3>
              <p className="text-gray-600">
                Take control of your applications, track deadlines, and discover opportunities tailored to your goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Families</h3>
              <p className="text-gray-600">
                Get visibility into applications, costs, and financial aid so you can support decisions with clarity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Counselors</h3>
              <p className="text-gray-600">
                Guide multiple students efficiently with organized tracking and a shared language around deadlines.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Institutions</h3>
              <p className="text-gray-600">
                Reach qualified prospects who are actively building lists and comparing options, not just browsing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section id="about" className="bg-gradient-to-br from-blue-50 to-cyan-50 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We believe college planning should be accessible, transparent, and less stressful. MagicScholar gives students powerful tools for free while helping institutions connect with the right students at the right moment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Students &amp; Families</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide free tools to organize every step of the college application process. Our AI-assisted features save time and reduce stress, without the price tag of traditional consulting or expensive software.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Institutions</h3>
              <p className="text-gray-600 leading-relaxed">
                We help colleges and scholarship providers reach students who are actively planning their future. No complex integrations, no long enterprise sales cycles&mdash;just affordable, effective tools to showcase your opportunities.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              The Future: AI-Powered Guidance
            </h3>
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              We&apos;re building advanced AI capabilities with Retrieval-Augmented Generation (RAG) and vector databases to power an intelligent assistant that students, counselors, and families can rely on for personalized, up-to-date guidance throughout the entire college journey.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join students, families, and institutions navigating college planning with clarity and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.magicscholar.com"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold inline-flex items-center justify-center gap-2"
            >
              Launch App
              <ArrowRight size={20} />
            </a>
            <a
              href="mailto:dane@magicscholar.com?subject=MagicScholar%20and%20CampusConnect%20Inquiry"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold text-white">MagicScholar</span>
              </div>
              <p className="text-sm leading-relaxed">
                Empowering students with free planning tools while helping institutions reach qualified prospects.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
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
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#for-institutions" className="hover:text-white transition-colors">
                    CampusConnect
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:dane@magicscholar.com?subject=Institution%20Interest"
                    className="hover:text-white transition-colors"
                  >
                    College Signup
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:dane@magicscholar.com?subject=Scholarship%20Interest"
                    className="hover:text-white transition-colors"
                  >
                    Scholarship Signup
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:dane@magicscholar.com?subject=MagicScholar%20and%20CampusConnect%20Inquiry"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="mailto:dane@magicscholar.com" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p>&copy; {new Date().getFullYear()} MagicScholar. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">MagicScholar Demo</h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close video"
              >
                <span className="text-3xl">&times;</span>
              </button>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <Play className="text-gray-400 mx-auto mb-4" size={64} />
                <p className="text-gray-600">Video placeholder &mdash; Your YouTube embed will go here.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
