'use client'

import {
  GraduationCap,
  DollarSign,
  Calendar,
  CheckCircle,
  FileText,
  Target,
  Users,
  BarChart3,
  Globe,
  Sparkles,
  ArrowRight,
  Play,
  Menu,
  X,
  Copy,
  Check
} from 'lucide-react'
import { useState, type ReactNode } from 'react'

export default function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('dane@magicscholar.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 group">
              <Sparkles
                className="h-4 w-4 text-indigo-500 opacity-80 group-hover:opacity-100 group-hover:rotate-12 transition-all"
                aria-hidden="true"
              />

              <span className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Magic
                </span>
                <span>Scholar</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
              >
                For Students
              </a>
              <a
                href="#for-institutions"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
              >
                For Institutions
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
              >
                About
              </a>
              <button
                onClick={() => setContactModalOpen(true)}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
              >
                Contact
              </button>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://app.magicscholar.com"
                className="bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-sm hover:shadow-md text-sm sm:text-base"
              >
                Open MagicScholar
              </a>
              <a
                href="https://thecollegedirectory.com/"
                className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold text-sm sm:text-base bg-white"
              >
                Visit The College Directory
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <nav className="flex flex-col gap-3">
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 hover:bg-gray-50 rounded"
                >
                  For Students
                </a>
                <a
                  href="#for-institutions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 hover:bg-gray-50 rounded"
                >
                  For Institutions
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 hover:bg-gray-50 rounded"
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 hover:bg-gray-50 rounded"
                >
                  About
                </a>
                <button
                  onClick={() => {
                    setContactModalOpen(true)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 hover:bg-gray-50 rounded w-full"
                >
                  Contact
                </button>
                <div className="border-t border-gray-200 pt-3 mt-2 flex flex-col gap-3">
                  <a
                    href="https://app.magicscholar.com"
                    className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center shadow-sm"
                  >
                    Open MagicScholar
                  </a>
                  <a
                    href="https://thecollegedirectory.com/"
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold bg-white text-center"
                  >
                    Visit The College Directory
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Contact Modal */}
      {contactModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setContactModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Contact Us
            </h3>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
              <div className="text-center mb-4">
                <a
                  href="mailto:dane@magicscholar.com"
                  className="text-lg sm:text-xl font-semibold text-blue-600 hover:text-blue-700 break-all"
                >
                  dane@magicscholar.com
                </a>
              </div>

              <button
                onClick={copyEmail}
                className="w-full bg-white border-2 border-blue-600 text-blue-600 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                {emailCopied ? (
                  <>
                    <Check size={20} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={20} />
                    Copy Email
                  </>
                )}
              </button>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setContactModalOpen(false)}
                className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold"
              >
                Close
              </button>
              <a
                href="mailto:dane@magicscholar.com"
                className="flex-1 px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold text-center"
              >
                Open Mail
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side copy */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                College planning,
                <br />
                built on real information.
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
                <span className="font-semibold">MagicScholar</span> helps students stay
                organized and compare options.
                <br className="hidden sm:block" />
                <span className="font-semibold">The College Directory</span> keeps
                college data current and visual for the students who are actually
                deciding.
              </p>

              <div className="flex flex-col-reverse sm:flex-row gap-4">
                <a
                  href="https://app.magicscholar.com"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all text-lg font-semibold shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                >
                  Open MagicScholar
                  <ArrowRight size={20} />
                </a>
                <a
                  href="https://thecollegedirectory.com/"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all text-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  For Institutions: The College Directory
                </a>
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
                      <div className="font-semibold text-gray-900">
                        Student-facing discovery
                      </div>
                      <div className="text-sm text-gray-600">
                        A clean way for students to compare colleges and curated
                        scholarships in one place.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Institution-powered data
                      </div>
                      <div className="text-sm text-gray-600">
                        Colleges keep key details accurate while The College Directory
                        handles the underlying IPEDS and reference data.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                    <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Shared source of truth
                      </div>
                      <div className="text-sm text-gray-600">
                        The same core data powers student tools and institutional
                        profiles, so conversations start from reality—not guesswork.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See how MagicScholar and The College Directory connect
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            This short demo will walk through how institutions use{' '}
            <span className="font-semibold">The College Directory</span> to build
            pages—and how those pages appear in{' '}
            <span className="font-semibold">MagicScholar</span> when students search
            and plan.
          </p>

          <div className="bg-gray-800 rounded-2xl aspect-video flex items-center justify-center border-2 border-gray-700 shadow-2xl">
            <div className="text-center">
              <Play className="text-white mx-auto mb-4" size={64} />
              <p className="text-white text-xl font-semibold">Video Coming Soon</p>
              <p className="text-gray-400 mt-2">
                Your demo will live here—showing both the student and institution
                experience side by side.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Sided Platform Section */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              One ecosystem. Two experiences.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <span className="font-semibold">The College Directory</span> is where
              colleges keep their story and data current.
              <br className="hidden sm:block" />
              <span className="font-semibold">MagicScholar</span> is where students and
              families explore those colleges—alongside curated scholarships—in a
              workspace they actually use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                MagicScholar for Students &amp; Families
              </h3>
              <p className="text-gray-600 mb-6">
                A free planning workspace that turns scattered tabs and spreadsheets
                into a clear roadmap for applications, scholarships, and finances.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5" size={18} />
                  <span>Track every college from first interest to final decision.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5" size={18} />
                  <span>Surface curated scholarships that fit the student profile.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5" size={18} />
                  <span>Keep deadlines, requirements, and costs in one shared space.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                The College Directory for Institutions
              </h3>
              <p className="text-gray-600 mb-6">
                A simple way for colleges to create rich, accurate pages that feed
                directly into MagicScholar search results and student planning tools.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-gray-700 mt-0.5" size={18} />
                  <span>Control how your programs, requirements, and costs are presented.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-gray-700 mt-0.5" size={18} />
                  <span>Showcase your campus with photos, video, and student stories.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-gray-700 mt-0.5" size={18} />
                  <span>
                    Ensure students see up-to-date information where they&apos;re actually
                    building their lists.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Institutions Section (The College Directory) */}
      <section
        id="for-institutions"
        className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full text-blue-300 font-semibold mb-6 border border-blue-400/30">
              FOR COLLEGES &amp; UNIVERSITIES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The College Directory: your story, on top of IPEDS
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We start with <span className="font-semibold">IPEDS as the baseline</span>{' '}
              so you never begin from zero—then let you correct and enhance what&apos;s
              out-of-date with current data, photos, and video that reflect your campus
              today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Colleges */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  For Colleges &amp; Universities
                </h3>
              </div>
              <div className="space-y-4 mb-6">
                <FeatureLine text="Start from IPEDS data, then correct what’s changed—tuition, programs, admit rates, and more." />
                <FeatureLine text="Turn a static fact sheet into a visit-worthy experience with campus photos, video, and highlights." />
                <FeatureLine text="See basic engagement trends so you know how often students are discovering your page." />
              </div>
              <PlanBadge
                price="$39.99/month"
                accent="blue"
                note="30-day free trial • Cancel anytime"
              />
            </div>

            {/* Scholarships – how they’re handled (not a paid product) */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Scholarship Listings (Free &amp; Curated)
                </h3>
              </div>
              <div className="space-y-4 mb-6">
                <FeatureLine text="We research, import, and maintain scholarship data manually—no separate login or subscription needed." />
                <FeatureLine text="Keep scholarship discovery free for students while you focus on telling your institution’s story." />
                <FeatureLine text="When you partner with The College Directory, your curated scholarships appear alongside your institution in MagicScholar." />
              </div>
              <PlanBadge
                price="$0"
                accent="green"
                note="Scholarship listings are free • Data curated by our team"
              />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Why The College Directory matters on top of IPEDS
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <WhyCard
                label="IPEDS is the floor"
                highlight="Baseline"
                color="blue"
                text="We import IPEDS so you never start from zero—then let you correct what’s changed since the last release."
              />
              <WhyCard
                label="Real-time updates"
                highlight="Live"
                color="green"
                text="Adjust tuition, programs, deadlines, and awards as they change so students aren&apos;t planning off stale data."
              />
              <WhyCard
                label="Richer storytelling"
                highlight="Human"
                color="cyan"
                text="Layer in photos, video, and narrative so your page feels like a real introduction, not just a spreadsheet export."
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="mailto:dane@magicscholar.com?subject=The%20College%20Directory%20Institution%20Interest"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Get Started with The College Directory
            </a>
            <p className="text-blue-200 mt-4">
              Or email us directly at{' '}
              <a
                href="mailto:dane@magicscholar.com?subject=The%20College%20Directory%20Institution%20Interest"
                className="underline hover:text-white"
              >
                dane@magicscholar.com
              </a>
              .
            </p>
            <p className="text-blue-200 mt-4">
              We&apos;ll personally help you set up and optimize your page • Free
              onboarding support
            </p>
          </div>
        </div>
      </section>

      {/* Student Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              MagicScholar: for students who want clarity, not chaos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Free tools that turn the college and scholarship process from a pile of
              tabs into a plan you can actually follow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <GraduationCap className="text-blue-600" size={28} />
              }
              title="College Application Tracking"
              body="Track every school from first interest to final decision. Keep requirements, essays, and notes in one organized view."
              bg="blue"
            />
            <FeatureCard
              icon={<DollarSign className="text-green-600" size={28} />}
              title="Scholarship Discovery"
              body="Discover curated scholarships that match your profile—including smaller, niche opportunities students usually miss."
              bg="green"
            />
            <FeatureCard
              icon={<Target className="text-cyan-600" size={28} />}
              title="AI-Assisted Profile Creation"
              body="Turn your activities, coursework, and achievements into a polished profile that supports applications and scholarship searches."
              bg="cyan"
            />
            <FeatureCard
              icon={<Calendar className="text-orange-600" size={28} />}
              title="Deadline Management"
              body="Stay ahead of application, scholarship, and financial aid deadlines in one unified timeline."
              bg="orange"
            />
            <FeatureCard
              icon={<FileText className="text-indigo-600" size={28} />}
              title="Deep Institution Data"
              body="Explore tuition, programs, admissions data, and campus visuals in one place—powered by The College Directory."
              bg="indigo"
            />
            <FeatureCard
              icon={<BarChart3 className="text-pink-600" size={28} />}
              title="Financial Planning Tools"
              body="Compare costs across schools, understand in-state vs. out-of-state pricing, and build realistic financial plans."
              bg="pink"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MagicScholar stays free for students. The College Directory offers
              affordable plans for institutions, while scholarship listings remain
              free and curated by us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Students */}
            <PricingCard
              label="FOR STUDENTS"
              color="blue"
              price="$0"
              subtitle="Core Platform"
              bullets={[
                'Unlimited college tracking',
                'Curated scholarship discovery',
                'Deadline management',
                'AI-assisted profile creation'
              ]}
              ctaLabel="Open MagicScholar"
              ctaHref="https://app.magicscholar.com"
              highlight
            />

            {/* Institutions */}
            <PricingCard
              label="FOR COLLEGES"
              color="indigo"
              price="$39.99"
              subtitle="per month"
              bullets={[
                'Full institutional profile',
                'Campus photo gallery',
                'Video showcase (YouTube)',
                'Dedicated onboarding'
              ]}
              ctaLabel="Start Free Trial"
              ctaHref="mailto:dane@magicscholar.com?subject=Institution%20Signup"
            />

            {/* Scholarship Listings (informational, $0) */}
            <PricingCard
              label="SCHOLARSHIP LISTINGS"
              color="green"
              price="$0"
              subtitle="curated & maintained"
              bullets={[
                'Manually curated by our team',
                'No login or subscription required',
                'Kept in sync with public information',
                'Shown directly in student search'
              ]}
              ctaLabel="Learn About Our Approach"
              ctaHref="mailto:dane@magicscholar.com?subject=Scholarship%20Listing%20Question"
            />
          </div>

          <p className="text-center text-gray-600 mt-12 text-lg">
            No hidden fees • Students always free • Scholarship records maintained by
            us so you don&apos;t have to.
          </p>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for the entire college journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you&apos;re applying, supporting, or recruiting, the same data
              powers clearer conversations—and fewer surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <WhoCard
              icon={<Target className="text-blue-600" size={32} />}
              bg="blue"
              title="Students"
              text="Take control of your applications, track deadlines, and discover opportunities tailored to your goals."
            />
            <WhoCard
              icon={<Users className="text-green-600" size={32} />}
              bg="green"
              title="Families"
              text="Get visibility into applications, costs, and financial aid so you can support decisions with clarity."
            />
            <WhoCard
              icon={<FileText className="text-orange-600" size={32} />}
              bg="orange"
              title="Advisors & Counselors"
              text="Support many students at once with organized tracking, shared deadlines, and institution-backed data."
            />
            <WhoCard
              icon={<Globe className="text-indigo-600" size={32} />}
              bg="indigo"
              title="Institutions"
              text="Reach qualified prospects who are actively building lists—not just casually browsing your homepage."
            />
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section
        id="about"
        className="bg-gradient-to-br from-blue-50 to-cyan-50 py-24"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We believe college planning should be accessible, transparent, and far
              less stressful. MagicScholar gives students powerful tools for free,
              while The College Directory helps institutions present clear, honest,
              and current information in the same ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Students &amp; Families
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide free tools to organize every step of the college
                application process. Our AI-assisted features save time and reduce
                stress—without the price tag of private consulting or expensive
                software.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Institutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We help colleges reach students who are actively planning their
                future. No complex integrations, no long enterprise cycles—just
                affordable tools to publish rich pages that feed directly into
                MagicScholar.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              The future: AI-powered guidance
            </h3>
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              We&apos;re building advanced AI capabilities with Retrieval-Augmented
              Generation (RAG) and vector search to power an intelligent assistant
              that students, counselors, and families can rely on for personalized,
              up-to-date guidance throughout the entire journey—from first search to
              final decision.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to build on real, current information?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join students, families, and institutions using MagicScholar and The
            College Directory to make clearer, more confident decisions about
            college.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.magicscholar.com"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold inline-flex items-center justify-center gap-2"
            >
              Launch MagicScholar
              <ArrowRight size={20} />
            </a>
            <button
              onClick={() => setContactModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Talk with us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4 group">
                <Sparkles
                  className="h-4 w-4 text-indigo-300 opacity-80 group-hover:opacity-100 group-hover:rotate-12 transition-all"
                  aria-hidden="true"
                />

                <span className="text-xl font-bold text-white tracking-tight">
                  <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    Magic
                  </span>
                  <span>Scholar</span>
                </span>
              </div>

              <p className="text-sm leading-relaxed">
                Empowering students with free planning tools while giving institutions
                a clear way to reach them via The College Directory.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    For Students
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.magicscholar.com"
                    className="hover:text-white transition-colors"
                  >
                    Launch App
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">
                For Institutions
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#for-institutions"
                    className="hover:text-white transition-colors"
                  >
                    The College Directory Overview
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
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="hover:text-white transition-colors"
                  >
                    Support
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p>
                &copy; {new Date().getFullYear()} MagicScholar. All rights reserved.
              </p>
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
              <h3 className="text-2xl font-bold text-gray-900">
                MagicScholar &amp; The College Directory Demo
              </h3>
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
                <p className="text-gray-600">
                  Video placeholder — your YouTube embed will go here.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* --- Small helper components to keep things tidy --- */

function FeatureLine({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
      <p className="text-blue-100">{text}</p>
    </div>
  )
}

function PlanBadge({
  price,
  accent,
  note
}: {
  price: string
  accent: 'blue' | 'green' | 'cyan' | string
  note: string
}) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-500/20 border-blue-400/30 text-blue-200',
    green: 'bg-green-500/20 border-green-400/30 text-green-200',
    cyan: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-200'
  }

  return (
    <div
      className={`rounded-lg p-4 border mt-2 ${colorMap[accent] || 'bg-white/10 border-white/20 text-blue-200'
        }`}
    >
      <div className="text-3xl font-bold text-white mb-1">{price}</div>
      <div className="text-sm">{note}</div>
    </div>
  )
}

function WhyCard({
  highlight,
  label,
  color,
  text
}: {
  highlight: string
  label: string
  color: 'blue' | 'green' | 'cyan'
  text: string
}) {
  const colorMap: Record<typeof color, string> = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    cyan: 'text-cyan-400'
  }

  return (
    <div>
      <div className={`text-4xl font-bold mb-2 ${colorMap[color]}`}>
        {highlight}
      </div>
      <div className="text-white font-semibold mb-2">{label}</div>
      <p className="text-blue-200 text-sm">{text}</p>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  body,
  bg
}: {
  icon: ReactNode
  title: string
  body: string
  bg: 'blue' | 'green' | 'cyan' | 'orange' | 'indigo' | 'pink'
}) {
  const bgMap: Record<string, string> = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    cyan: 'bg-cyan-100',
    orange: 'bg-orange-100',
    indigo: 'bg-indigo-100',
    pink: 'bg-pink-100'
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-100">
      <div
        className={`w-14 h-14 ${bgMap[bg]} rounded-lg flex items-center justify-center mb-6`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{body}</p>
    </div>
  )
}

function PricingCard({
  label,
  color,
  price,
  subtitle,
  bullets,
  ctaLabel,
  ctaHref,
  highlight
}: {
  label: string
  color: 'blue' | 'green' | 'indigo'
  price: string
  subtitle: string
  bullets: string[]
  ctaLabel: string
  ctaHref: string
  highlight?: boolean
}) {
  const colorMap: Record<
    typeof color,
    { bg: string; border: string; chip: string; btn: string; btnHover: string }
  > = {
    blue: {
      bg: 'from-blue-50 to-cyan-50',
      border: 'border-blue-200',
      chip: 'bg-blue-600',
      btn: 'bg-blue-600',
      btnHover: 'hover:bg-blue-700'
    },
    green: {
      bg: 'from-green-50 to-emerald-50',
      border: 'border-green-200',
      chip: 'bg-green-600',
      btn: 'bg-green-600',
      btnHover: 'hover:bg-green-700'
    },
    indigo: {
      bg: 'from-blue-50 to-indigo-50',
      border: 'border-blue-300',
      chip: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      btn: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      btnHover: 'hover:from-blue-700 hover:to-indigo-700'
    }
  }

  const colors = colorMap[color]

  return (
    <div
      className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 border-2 ${colors.border} relative ${highlight ? '' : ''
        }`}
    >
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div
          className={`${colors.chip} text-white px-4 py-1 rounded-full text-sm font-semibold`}
        >
          {label}
        </div>
      </div>
      <div className="text-center mb-8 pt-4">
        <div className="text-5xl font-bold text-gray-900 mb-2">{price}</div>
        <p className="text-gray-600 font-medium">{subtitle}</p>
      </div>
      <ul className="space-y-4 mb-8">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={20}
            />
            <span className="text-gray-700">{b}</span>
          </li>
        ))}
      </ul>
      <a
        href={ctaHref}
        className={`block w-full text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors ${colors.btn} ${colors.btnHover}`}
      >
        {ctaLabel}
      </a>
    </div>
  )
}

function WhoCard({
  icon,
  bg,
  title,
  text
}: {
  icon: React.ReactNode
  bg: 'blue' | 'green' | 'orange' | 'indigo'
  title: string
  text: string
}) {
  const bgMap: Record<typeof bg, string> = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    orange: 'bg-orange-100',
    indigo: 'bg-indigo-100'
  }

  return (
    <div className="text-center">
      <div
        className={`w-20 h-20 ${bgMap[bg]} rounded-full flex items-center justify-center mx-auto mb-6`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  )
}
