import React, { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff, LogOut, Home, FileText, BookOpen, DollarSign, MessageSquare, Settings, Users, Mail, Edit, Save, Plus, Trash2 } from 'lucide-react';

const AdminCMS = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [websiteContent, setWebsiteContent] = useState({
    hero: { title: 'Innovation Lab Africa', tagline: 'Learn. Build. Innovate.', subtitle: 'Transform your career with data skills' },
    about: { title: 'About Us', description: 'We empower African professionals with cutting-edge data skills.' },
    courses: [],
    faqs: [],
    contact: { email: 'admissions@innovationlabafrica.com', phone: '+254 700 000 000', location: 'Africa' }
  });
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (isAuthenticated) loadData();
  }, [isAuthenticated]);

  const loadData = async () => {
    try {
      const contentData = await window.storage.get('website_content').catch(() => null);
      if (contentData) {
        setWebsiteContent(JSON.parse(contentData.value));
      } else {
        const defaultContent = {
          hero: { title: 'Innovation Lab Africa', tagline: 'Learn. Build. Innovate.', subtitle: 'Transform your career with tutor-led online evening classes' },
          about: { title: 'About Innovation Lab Africa', description: 'Innovation Lab Africa is a premier online tech academy dedicated to empowering African professionals with cutting-edge data skills.' },
          courses: [
            { id: 1, name: 'Data Analytics', price: { kes: 30000, usd: 250 }, duration: '12 weeks', level: 'Beginner', description: 'Master data visualization and analysis' },
            { id: 2, name: 'Data Science', price: { kes: 80000, usd: 650 }, duration: '16 weeks', level: 'Intermediate', description: 'Learn machine learning and AI' }
          ],
          faqs: [
            { id: 1, question: 'Do I need prior experience?', answer: 'No! Our programs are designed for beginners.' },
            { id: 2, question: 'What are the class timings?', answer: 'Evening classes, 6 PM - 9 PM EAT, 3 times per week.' }
          ],
          contact: { email: 'admissions@innovationlabafrica.com', phone: '+254 700 000 000', location: 'Serving professionals across Africa' }
        };
        setWebsiteContent(defaultContent);
        await window.storage.set('website_content', JSON.stringify(defaultContent));
      }
      const appsData = await window.storage.get('applications').catch(() => null);
      if (appsData) setApplications(JSON.parse(appsData.value));
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const saveContent = async (content) => {
    setWebsiteContent(content);
    await window.storage.set('website_content', JSON.stringify(content));
  };

  const handleLogin = () => {
    const validCredentials = [
      { username: 'admin', password: 'ILabAfrica2024!' },
      { username: 'demo', password: 'demo123' }
    ];
    const user = validCredentials.find(u => u.username === loginData.username && u.password === loginData.password);
    if (user) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0B173D 0%, #1a2855 100%)' }}>
        <div style={{ width: '100%', maxWidth: '28rem', padding: '2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '1rem', padding: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '4rem', height: '4rem', backgroundColor: '#D1A103', borderRadius: '50%', marginBottom: '1rem' }}>
                <Lock style={{ width: '2rem', height: '2rem', color: '#0B173D' }} />
              </div>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>Website CMS</h1>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>Innovation Lab Africa</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem' }}>Username</label>
                <input type="text" value={loginData.username} onChange={(e) => setLoginData({...loginData, username: e.target.value})} onKeyPress={(e) => e.key === 'Enter' && handleLogin()} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem' }}>Password</label>
                <div style={{ position: 'relative' }}>
                  <input type={showPassword ? 'text' : 'password'} value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})} onKeyPress={(e) => e.key === 'Enter' && handleLogin()} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', outline: 'none' }} />
                  <button onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '0.75rem', top: '0.75rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}>
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              {loginError && <div style={{ padding: '0.75rem', backgroundColor: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.5)', borderRadius: '0.5rem', color: '#fca5a5', fontSize: '0.875rem' }}>{loginError}</div>}
              <button onClick={handleLogin} style={{ width: '100%', padding: '0.75rem', backgroundColor: '#D1A103', color: '#0B173D', fontWeight: 'bold', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>Login</button>
            </div>
            <div style={{ marginTop: '1.5rem', textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
              <p>Demo: <span style={{ color: '#D1A103' }}>demo</span> / <span style={{ color: '#D1A103' }}>demo123</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const Navigation = () => {
    const navItems = [
      { icon: Home, label: 'Dashboard', section: 'dashboard' },
      { icon: FileText, label: 'Homepage', section: 'homepage' },
      { icon: BookOpen, label: 'Courses', section: 'courses' },
      { icon: MessageSquare, label: 'FAQs', section: 'faqs' },
      { icon: Mail, label: 'Contact', section: 'contact' },
      { icon: Users, label: 'Applications', section: 'applications' }
    ];

    return (
      <nav style={{ backgroundColor: '#0B173D', borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#D1A103' }}>ILab Africa CMS</h1>
            <button onClick={() => setIsAuthenticated(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(239,68,68,0.2)', color: '#fca5a5', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
        <div style={{ maxWidth: '90rem', margin: '0 auto', overflowX: 'auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', paddingBottom: '0.5rem' }}>
            {navItems.map(item => (
              <button key={item.section} onClick={() => setActiveSection(item.section)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '0.5rem', backgroundColor: activeSection === item.section ? '#D1A103' : 'transparent', color: activeSection === item.section ? '#0B173D' : 'rgba(255,255,255,0.7)', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', fontSize: '0.875rem' }}>
                <item.icon size={16} /> {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    );
  };

  const Dashboard = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>Dashboard</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <div style={{ background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '0.75rem', padding: '1.5rem' }}>
          <BookOpen style={{ width: '2rem', height: '2rem', color: 'white', marginBottom: '1rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>Total Courses</p>
          <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>{websiteContent.courses.length}</p>
        </div>
        <div style={{ background: 'rgba(234,179,8,0.2)', border: '1px solid rgba(234,179,8,0.3)', borderRadius: '0.75rem', padding: '1.5rem' }}>
          <MessageSquare style={{ width: '2rem', height: '2rem', color: 'white', marginBottom: '1rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>FAQs</p>
          <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>{websiteContent.faqs.length}</p>
        </div>
        <div style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '0.75rem', padding: '1.5rem' }}>
          <Users style={{ width: '2rem', height: '2rem', color: 'white', marginBottom: '1rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>Applications</p>
          <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>{applications.length}</p>
        </div>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Quick Actions</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <button onClick={() => setActiveSection('homepage')} style={{ padding: '1rem', background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
            <FileText size={20} style={{ marginBottom: '0.5rem' }} />
            <p style={{ fontWeight: '600' }}>Edit Homepage</p>
          </button>
          <button onClick={() => setActiveSection('courses')} style={{ padding: '1rem', background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
            <BookOpen size={20} style={{ marginBottom: '0.5rem' }} />
            <p style={{ fontWeight: '600' }}>Manage Courses</p>
          </button>
          <button onClick={() => setActiveSection('applications')} style={{ padding: '1rem', background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
            <Users size={20} style={{ marginBottom: '0.5rem' }} />
            <p style={{ fontWeight: '600' }}>View Applications</p>
          </button>
        </div>
      </div>
    </div>
  );

  const HomepageSection = () => {
    const [editedContent, setEditedContent] = useState(websiteContent);
    const [saved, setSaved] = useState(false);

    const handleSave = async () => {
      await saveContent(editedContent);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>Homepage Content</h2>
          <button onClick={handleSave} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: saved ? '#4ade80' : '#D1A103', color: saved ? 'white' : '#0B173D', fontWeight: 'bold', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
            <Save size={18} /> {saved ? 'Saved!' : 'Save'}
          </button>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Hero Section</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem' }}>Title</label>
              <input type="text" value={editedContent.hero.title} onChange={(e) => setEditedContent({...editedContent, hero: {...editedContent.hero, title: e.target.value}})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem' }}>Tagline</label>
              <input type="text" value={editedContent.hero.tagline} onChange={(e) => setEditedContent({...editedContent, hero: {...editedContent.hero, tagline: e.target.value}})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem' }}>Subtitle</label>
              <textarea value={editedContent.hero.subtitle} onChange={(e) => setEditedContent({...editedContent, hero: {...editedContent.hero, subtitle: e.target.value}})} rows="3" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', outline: 'none', resize: 'vertical' }} />
            </div>
          </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>About Section</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem' }}>Title</label>
              <input type="text" value={editedContent.about.title} onChange={(e) => setEditedContent({...editedContent, about: {...editedContent.about, title: e.target.value}})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', color: 'white', marginBottom: '0.5rem' }}>Description</label>
              <textarea value={editedContent.about.description} onChange={(e) => setEditedContent({...editedContent, about: {...editedContent.about, description: e.target.value}})} rows="5" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', outline: 'none', resize: 'vertical' }} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ApplicationsSection = () => {
    const addTestData = async () => {
      const testApps = [
        { id: 1, name: 'John Kamau', email: 'john.kamau@email.com', phone: '+254 712 345 678', program: 'Data Analytics', experience: 'beginner', motivation: 'Want to transition into data analytics', submittedAt: new Date().toISOString() },
        { id: 2, name: 'Mary Wanjiku', email: 'mary.w@email.com', phone: '+254 723 456 789', program: 'Data Science', experience: 'some', motivation: 'Looking to advance my career in AI', submittedAt: new Date().toISOString() }
      ];
      setApplications(testApps);
      await window.storage.set('applications', JSON.stringify(testApps));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>Applications</h2>
          <button onClick={addTestData} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
            <Plus size={18} /> Add Test Data
          </button>
        </div>
        
        {applications.length === 0 ? (
          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', padding: '3rem', textAlign: 'center' }}>
            <Users style={{ width: '3rem', height: '3rem', color: 'rgba(255,255,255,0.3)', margin: '0 auto 1rem' }} />
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem' }}>No applications yet</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', marginTop: '0.5rem' }}>Applications from your website will appear here</p>
            <button onClick={addTestData} style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#D1A103', color: '#0B173D', fontWeight: 'bold', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
              Add Test Data
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '1rem' }}>
            {applications.map(app => (
              <div key={app.id} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>{app.name}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                      Submitted: {new Date(app.submittedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', backgroundColor: 'rgba(34,197,94,0.2)', color: '#4ade80' }}>
                    New
                  </span>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Email</p>
                    <p style={{ color: 'white' }}>{app.email}</p>
                  </div>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Phone</p>
                    <p style={{ color: 'white' }}>{app.phone}</p>
                  </div>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Program</p>
                    <p style={{ color: '#D1A103', fontWeight: '600' }}>{app.program}</p>
                  </div>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Experience</p>
                    <p style={{ color: 'white', textTransform: 'capitalize' }}>{app.experience}</p>
                  </div>
                </div>
                
                {app.motivation && (
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Motivation</p>
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>{app.motivation}</p>
                  </div>
                )}
                
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  <button style={{ flex: 1, padding: '0.5rem', backgroundColor: 'rgba(34,197,94,0.2)', color: '#4ade80', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontWeight: '600' }}>
                    Contact Applicant
                  </button>
                  <button style={{ flex: 1, padding: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
                    Mark as Reviewed
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const SimpleSection = ({ title }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>{title}</h2>
      <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', padding: '3rem', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)' }}>Content management for {title.toLowerCase()} coming soon</p>
      </div>
    </div>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'dashboard': return <Dashboard />;
      case 'homepage': return <HomepageSection />;
      case 'courses': return <SimpleSection title="Courses" />;
      case 'faqs': return <SimpleSection title="FAQs" />;
      case 'contact': return <SimpleSection title="Contact Info" />;
      case 'applications': return <ApplicationsSection />;
      default: return <Dashboard />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0B173D' }}>
      <Navigation />
      <div style={{ maxWidth: '90rem', margin: '0 auto', padding: '2rem 1rem' }}>
        {renderSection()}
      </div>
    </div>
  );
};

export default AdminCMS;