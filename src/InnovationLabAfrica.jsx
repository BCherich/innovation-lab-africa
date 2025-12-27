import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Clock, Users, Award, Globe, Mail, Phone, MapPin, Check } from 'lucide-react';

const InnovationLabAfrica = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      id: 'analytics',
      title: 'Data Analytics',
      price: { kes: '30,000', usd: '250' },
      duration: '12 weeks',
      level: 'Beginner to Intermediate',
      description: 'Master data visualization, SQL, Excel, and business intelligence tools to make data-driven decisions.',
      skills: ['Excel & Google Sheets', 'SQL & Database Queries', 'Power BI & Tableau', 'Statistical Analysis', 'Data Visualization', 'Business Intelligence'],
      icon: '📊'
    },
    {
      id: 'science',
      title: 'Data Science',
      price: { kes: '80,000', usd: '650' },
      duration: '16 weeks',
      level: 'Intermediate to Advanced',
      description: 'Learn Python, machine learning, and statistical modeling to extract insights and build predictive models.',
      skills: ['Python Programming', 'Machine Learning', 'Statistical Modeling', 'Deep Learning', 'Natural Language Processing', 'Model Deployment'],
      icon: '🧠'
    },
    {
      id: 'engineering',
      title: 'Data Engineering',
      price: { kes: '80,000', usd: '650' },
      duration: '16 weeks',
      level: 'Intermediate to Advanced',
      description: 'Build robust data pipelines, work with cloud platforms, and architect scalable data infrastructure.',
      skills: ['Data Pipeline Design', 'Cloud Platforms (AWS/Azure)', 'Apache Spark & Kafka', 'ETL Development', 'Database Management', 'Data Warehousing'],
      icon: '⚙️'
    }
  ];

  const features = [
    { icon: <Users className="w-8 h-8" />, title: 'Live Tutor-Led Classes', desc: 'Interactive evening sessions with experienced instructors' },
    { icon: <Clock className="w-8 h-8" />, title: 'Flexible Schedule', desc: 'Evening classes designed for working professionals (EAT)' },
    { icon: <Award className="w-8 h-8" />, title: 'Hands-On Projects', desc: 'Mini-projects and capstone to build your portfolio' },
    { icon: <Globe className="w-8 h-8" />, title: 'Pan-African Access', desc: 'Learn from anywhere across the African continent' }
  ];

  const faqs = [
    { q: 'Do I need prior experience?', a: 'No! Our Data Analytics program is designed for complete beginners. Data Science and Engineering programs assume basic programming knowledge.' },
    { q: 'What are the class timings?', a: 'Classes are held in the evenings (EAT) to accommodate working professionals, typically between 6 PM - 9 PM, 3 times per week.' },
    { q: 'Is the certificate recognized?', a: 'Yes, you receive a completion certificate that demonstrates your skills to employers across Africa and globally.' },
    { q: 'Can I pay in installments?', a: 'Yes, we offer flexible payment plans. Contact our admissions team for details.' },
    { q: 'What tools do I need?', a: 'A computer with internet connection. All software tools used are either free or provided by the academy.' }
  ];

  const NavigationBar = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B173D] shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setActiveSection('home')}>
            <div className="text-2xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="text-[#D1A103]">Innovation Lab</span>
              <span className="text-white"> Africa</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'programs', 'curriculum', 'pricing', 'apply', 'faqs', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize transition-colors ${activeSection === section ? 'text-[#D1A103]' : 'text-white hover:text-[#D1A103]'}`}
              >
                {section}
              </button>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B173D] border-t border-[#D1A103]/20">
          <div className="px-4 py-4 space-y-3">
            {['home', 'about', 'programs', 'curriculum', 'pricing', 'apply', 'faqs', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => { setActiveSection(section); setMobileMenuOpen(false); }}
                className={`block w-full text-left capitalize py-2 ${activeSection === section ? 'text-[#D1A103]' : 'text-white'}`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B173D] via-[#1a2855] to-[#0B173D]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#D1A103] rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D1A103] rounded-full filter blur-3xl" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          Innovation Lab <span className="text-[#D1A103]">Africa</span>
        </h1>
        <p className="text-2xl md:text-3xl mb-8" style={{ fontFamily: 'Georgia, serif', color: '#e5b517' }}>
          Learn. Build. Innovate.
        </p>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Transform your career with tutor-led online evening classes in Data Analytics, Data Science, and Data Engineering
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setActiveSection('programs')}
            className="px-8 py-4 bg-[#D1A103] text-[#0B173D] font-bold rounded-lg hover:bg-[#e5b517] transition-all transform hover:scale-105"
          >
            Explore Programs
          </button>
          <button
            onClick={() => setActiveSection('apply')}
            className="px-8 py-4 border-2 border-[#D1A103] text-white font-bold rounded-lg hover:bg-[#D1A103] hover:text-[#0B173D] transition-all"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#D1A103] mb-8 text-center">About Innovation Lab Africa</h2>
        
        <div className="bg-white/5 backdrop-blur rounded-2xl p-8 md:p-12 mb-12">
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            Innovation Lab Africa is a premier online tech academy dedicated to empowering African professionals with cutting-edge data skills. We believe in the transformative power of data and technology to drive innovation across the continent.
          </p>
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            Our mission is to make world-class tech education accessible to working professionals and beginners throughout Africa through flexible, evening-based learning programs.
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            With experienced tutors, hands-on projects, and a curriculum designed for the African context, we are building the next generation of data professionals who will shape the future of technology on the continent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur rounded-xl p-6 text-center hover:bg-white/10 transition-all">
              <div className="text-[#D1A103] mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProgramsPage = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#D1A103] mb-4 text-center">Our Programs</h2>
        <p className="text-xl text-white/80 text-center mb-12">Choose the path that matches your career goals</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white/5 backdrop-blur rounded-2xl p-8 hover:bg-white/10 transition-all hover:transform hover:scale-105">
              <div className="text-6xl mb-4">{program.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
              <p className="text-[#D1A103] font-bold text-xl mb-4">KES {program.price.kes} / USD {program.price.usd}</p>
              <div className="flex items-center gap-4 text-white/70 mb-4">
                <span>⏱️ {program.duration}</span>
                <span>📈 {program.level}</span>
              </div>
              <p className="text-white/80 mb-6">{program.description}</p>
              <button
                onClick={() => setSelectedProgram(program)}
                className="w-full py-3 bg-[#D1A103] text-[#0B173D] font-bold rounded-lg hover:bg-[#e5b517] transition-all"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedProgram && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProgram(null)}>
          <div className="bg-[#0B173D] rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedProgram.title}</h3>
                <p className="text-[#D1A103] text-xl">KES {selectedProgram.price.kes} / USD {selectedProgram.price.usd}</p>
              </div>
              <button onClick={() => setSelectedProgram(null)} className="text-white hover:text-[#D1A103]">
                <X size={24} />
              </button>
            </div>
            <p className="text-white/90 mb-6">{selectedProgram.description}</p>
            <div className="mb-6">
              <h4 className="text-xl font-bold text-[#D1A103] mb-4">Key Skills You Will Learn:</h4>
              <div className="grid grid-cols-2 gap-3">
                {selectedProgram.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-white/80">
                    <Check className="text-[#D1A103] flex-shrink-0 mt-1" size={16} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => { setSelectedProgram(null); setActiveSection('apply'); }}
              className="w-full py-3 bg-[#D1A103] text-[#0B173D] font-bold rounded-lg hover:bg-[#e5b517] transition-all"
            >
              Apply for {selectedProgram.title}
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const CurriculumPage = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#D1A103] mb-12 text-center">Curriculum Overview</h2>
        
        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Our Learning Approach</h3>
            <div className="grid md:grid-cols-3 gap-6 text-white/80">
              <div>
                <div className="text-[#D1A103] text-4xl font-bold mb-2">40%</div>
                <p className="font-semibold mb-2">Theory & Concepts</p>
                <p className="text-sm">Live tutor-led sessions covering fundamental and advanced concepts</p>
              </div>
              <div>
                <div className="text-[#D1A103] text-4xl font-bold mb-2">40%</div>
                <p className="font-semibold mb-2">Hands-On Practice</p>
                <p className="text-sm">Weekly mini-projects and coding exercises to reinforce learning</p>
              </div>
              <div>
                <div className="text-[#D1A103] text-4xl font-bold mb-2">20%</div>
                <p className="font-semibold mb-2">Capstone Project</p>
                <p className="text-sm">Real-world project to showcase your skills to employers</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">What Is Included</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Live interactive classes (3x per week)',
                'Recorded sessions for review',
                'Weekly assignments & mini-projects',
                'Capstone project with mentorship',
                'Access to learning materials',
                'Certificate of completion',
                'Career guidance & support',
                'Lifetime community access'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white/80">
                  <Check className="text-[#D1A103] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PricingPage = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#D1A103] mb-4 text-center">Pricing</h2>
        <p className="text-xl text-white/80 text-center mb-12">Invest in your future with flexible payment options</p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program) => (
            <div key={program.id} className="bg-white/5 backdrop-blur rounded-2xl p-8 border-2 border-transparent hover:border-[#D1A103] transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-[#D1A103] mb-2">KES {program.price.kes}</div>
                <div className="text-xl text-white/70">USD {program.price.usd}</div>
              </div>
              <div className="text-white/70 mb-6">
                <p className="mb-2">Duration: {program.duration}</p>
                <p>Level: {program.level}</p>
              </div>
              <button
                onClick={() => setActiveSection('apply')}
                className="w-full py-3 bg-[#D1A103] text-[#0B173D] font-bold rounded-lg hover:bg-[#e5b517] transition-all"
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Flexible Payment Plans Available</h3>
          <p className="text-white/80 mb-6">We offer installment options to make learning accessible. Contact our admissions team for personalized payment plans.</p>
          <button
            onClick={() => setActiveSection('contact')}
            className="px-8 py-3 border-2 border-[#D1A103] text-white font-bold rounded-lg hover:bg-[#D1A103] hover:text-[#0B173D] transition-all"
          >
            Contact Admissions
          </button>
        </div>
      </div>
    </div>
  );

  // Replace the ApplyPage component in your InnovationLabAfrica code with this:

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    experience: '',
    motivation: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Get existing applications from storage
      const existingApps = await window.storage.get('applications').catch(() => null);
      const applications = existingApps ? JSON.parse(existingApps.value) : [];
      
      // Create new application
      const newApplication = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        program: formData.program,
        experience: formData.experience,
        motivation: formData.motivation,
        submittedAt: new Date().toISOString()
      };
      
      // Add to applications array
      applications.push(newApplication);
      
      // Save back to storage
      await window.storage.set('applications', JSON.stringify(applications));
      
      // Show success message
      alert('Thank you for your application! Our admissions team will contact you within 24 hours.');
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', program: '', experience: '', motivation: '' });
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again or contact us directly.');
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#D1A103] mb-4 text-center">Apply Now</h2>
        <p className="text-xl text-white/80 text-center mb-12">Start your journey to becoming a data professional</p>
        
        <div className="bg-white/5 backdrop-blur rounded-2xl p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-white mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-[#D1A103] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-[#D1A103] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-[#D1A103] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Select Program *</label>
              <select
                required
                value={formData.program}
                onChange={(e) => setFormData({...formData, program: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-[#D1A103] focus:outline-none"
              >
                <option value="">Choose a program</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Data Science">Data Science</option>
                <option value="Data Engineering">Data Engineering</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Your Experience Level</label>
              <select
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-[#D1A103] focus:outline-none"
              >
                <option value="">Select experience</option>
                <option value="beginner">Complete Beginner</option>
                <option value="some">Some Experience</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Why do you want to join Innovation Lab Africa?</label>
              <textarea
                value={formData.motivation}
                onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-[#D1A103] focus:outline-none resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-[#D1A103] text-[#0B173D] font-bold rounded-lg hover:bg-[#e5b517] transition-all text-lg"
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
  const FAQsPage = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#D1A103] mb-4 text-center">Frequently Asked Questions</h2>
        <p className="text-xl text-white/80 text-center mb-12">Everything you need to know about our programs</p>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur rounded-xl p-6 hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold text-[#D1A103] mb-3">{faq.q}</h3>
              <p className="text-white/80">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 backdrop-blur rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-white/80 mb-6">Our admissions team is here to help you find the right program</p>
          <button
            onClick={() => setActiveSection('contact')}
            className="px-8 py-3 bg-[#D1A103] text-[#0B173D] font-bold rounded-lg hover:bg-[#e5b517] transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#D1A103] mb-4 text-center">Contact Us</h2>
        <p className="text-xl text-white/80 text-center mb-12">We are here to answer your questions and help you get started</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="text-[#D1A103] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-white/70">admissions@innovationlabafrica.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-[#D1A103] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-white/70">+254 700 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-[#D1A103] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-white/70">Serving professionals across Africa</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">Office Hours</h4>
              <p className="text-white/70">Monday - Friday: 9:00 AM - 6:00 PM (EAT)</p>
              <p className="text-white/70">Saturday: 10:00 AM - 2:00 PM (EAT)</p>
              <p className="text-white/70">Sunday: Closed</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will respond within 24 hours.'); }}>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-[#D1A103] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-[#D1A103] focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-[#D1A103] focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#D1A103] text-[#0B173D] font-bold rounded-lg hover:bg-[#e5b517] transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'programs': return <ProgramsPage />;
      case 'curriculum': return <CurriculumPage />;
      case 'pricing': return <PricingPage />;
      case 'apply': return <ApplyPage />;
      case 'faqs': return <FAQsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0B173D', color: 'white' }}>
      <NavigationBar />
      {renderSection()}
    </div>
  );
};

export default InnovationLabAfrica;
