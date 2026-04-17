import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { AuthProvider } from './context/AuthContext';
import { SiteSettingsProvider } from './context/SiteSettingsContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './components/Admin/AdminLayout';
import SEO from './components/SEO/SEO';
import './App.css';

// Lazy load sahifalar
const Home               = lazy(() => import('./pages/Home/Home'));
const About              = lazy(() => import('./pages/About/About'));
const Contact            = lazy(() => import('./pages/Contact/Contact'));
const FAQ                = lazy(() => import('./pages/FAQ/FAQ'));
const Blog               = lazy(() => import('./pages/Blog/Blog'));
const BlogPost           = lazy(() => import('./pages/Blog/BlogPost'));
const Pricing            = lazy(() => import('./pages/Pricing/Pricing'));
const Order              = lazy(() => import('./pages/Order/Order'));
const Services           = lazy(() => import('./pages/Services/Services'));
const ServiceDetail      = lazy(() => import('./pages/Services/ServiceDetail'));
const ScientificWorks    = lazy(() => import('./pages/ScientificWorks/ScientificWorks'));
const ScientificWorkDetail = lazy(() => import('./pages/ScientificWorks/ScientificWorkDetail'));
const Nashr              = lazy(() => import('./pages/Nashr/Nashr'));
const NashrDetail        = lazy(() => import('./pages/Nashr/NashrDetail'));
const AIArticle          = lazy(() => import('./pages/AIArticle/AIArticle'));
const Privacy            = lazy(() => import('./pages/Privacy/Privacy'));
const Terms              = lazy(() => import('./pages/Terms/Terms'));

// Admin sahifalari
const Login               = lazy(() => import('./pages/Admin/Login'));
const AdminDashboard      = lazy(() => import('./pages/Admin/Dashboard'));
const ServicesList        = lazy(() => import('./pages/Admin/Services/ServicesList'));
const ServiceForm         = lazy(() => import('./pages/Admin/Services/ServiceForm'));
const BlogList            = lazy(() => import('./pages/Admin/Blog/BlogList'));
const BlogForm            = lazy(() => import('./pages/Admin/Blog/BlogForm'));
const ScientificWorksList = lazy(() => import('./pages/Admin/ScientificWorks/ScientificWorksList'));
const ScientificWorksForm = lazy(() => import('./pages/Admin/ScientificWorks/ScientificWorksForm'));
const PublicationsList    = lazy(() => import('./pages/Admin/Publications/PublicationsList'));
const PublicationsForm    = lazy(() => import('./pages/Admin/Publications/PublicationsForm'));
const FAQList             = lazy(() => import('./pages/Admin/FAQ/FAQList'));
const FAQForm             = lazy(() => import('./pages/Admin/FAQ/FAQForm'));
const Settings            = lazy(() => import('./pages/Admin/Settings/Settings'));

const NotFound = () => (
  <div className="section text-center" style={{ padding: '80px 20px' }}>
    <SEO title="404 - Sahifa topilmadi" noindex={true} />
    <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
    <h2>Sahifa topilmadi</h2>
    <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
      Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.
    </p>
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      <a href="/" className="btn btn-primary">Bosh sahifaga qaytish</a>
      <a href="/xizmatlar" className="btn btn-outline">Xizmatlar</a>
      <a href="/aloqa" className="btn btn-outline">Aloqa</a>
    </div>
  </div>
);

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
    <div style={{ fontSize: '1.2rem', color: '#6b7280' }}>Yuklanmoqda...</div>
  </div>
);

function App() {
  return (
    <SiteSettingsProvider>
      <AuthProvider>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="biz-haqimizda" element={<About />} />
              <Route path="aloqa" element={<Contact />} />
              <Route path="savol-javob" element={<FAQ />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="narxlar" element={<Pricing />} />
              <Route path="buyurtma" element={<Order />} />
              <Route path="xizmatlar" element={<Services />} />
              <Route path="xizmatlar/:slug" element={<ServiceDetail />} />
              <Route path="ilmiy-ishlar" element={<ScientificWorks />} />
              <Route path="ilmiy-ishlar/:slug" element={<ScientificWorkDetail />} />
              <Route path="nashr" element={<Nashr />} />
              <Route path="nashr/:slug" element={<NashrDetail />} />
              <Route path="ai-maqola" element={<AIArticle />} />
              <Route path="privacy-policy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={
              <ProtectedRoute><AdminLayout /></ProtectedRoute>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="services" element={<ServicesList />} />
              <Route path="services/new" element={<ServiceForm />} />
              <Route path="services/:id" element={<ServiceForm />} />
              <Route path="blog" element={<BlogList />} />
              <Route path="blog/new" element={<BlogForm />} />
              <Route path="blog/:id" element={<BlogForm />} />
              <Route path="scientific-works" element={<ScientificWorksList />} />
              <Route path="scientific-works/new" element={<ScientificWorksForm />} />
              <Route path="scientific-works/:id" element={<ScientificWorksForm />} />
              <Route path="publications" element={<PublicationsList />} />
              <Route path="publications/new" element={<PublicationsForm />} />
              <Route path="publications/:id" element={<PublicationsForm />} />
              <Route path="faq" element={<FAQList />} />
              <Route path="faq/new" element={<FAQForm />} />
              <Route path="faq/:id" element={<FAQForm />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </SiteSettingsProvider>
  );
}

export default App;
