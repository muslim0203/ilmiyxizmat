import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './components/Admin/AdminLayout';
import Login from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import ServicesList from './pages/Admin/Services/ServicesList';
import ServiceForm from './pages/Admin/Services/ServiceForm';
import BlogList from './pages/Admin/Blog/BlogList';
import BlogForm from './pages/Admin/Blog/BlogForm';
import ScientificWorksList from './pages/Admin/ScientificWorks/ScientificWorksList';
import ScientificWorksForm from './pages/Admin/ScientificWorks/ScientificWorksForm';
import PublicationsList from './pages/Admin/Publications/PublicationsList';
import PublicationsForm from './pages/Admin/Publications/PublicationsForm';
import FAQList from './pages/Admin/FAQ/FAQList';
import FAQForm from './pages/Admin/FAQ/FAQForm';
import Settings from './pages/Admin/Settings/Settings';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost';
import Pricing from './pages/Pricing/Pricing';
import Order from './pages/Order/Order';
import Services from './pages/Services/Services';
import ServiceDetail from './pages/Services/ServiceDetail';
import ScientificWorks from './pages/ScientificWorks/ScientificWorks';
import ScientificWorkDetail from './pages/ScientificWorks/ScientificWorkDetail';
import Nashr from './pages/Nashr/Nashr';
import NashrDetail from './pages/Nashr/NashrDetail';
import AIArticle from './pages/AIArticle/AIArticle';
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';

import './App.css';

// 404 Page with SEO
import SEO from './components/SEO/SEO';
const NotFound = () => (
  <div className="section text-center" style={{ padding: '80px 20px' }}>
    <SEO title="404 - Sahifa topilmadi" noindex={true} />
    <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
    <h2>Sahifa topilmadi</h2>
    <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.</p>
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      <a href="/" className="btn btn-primary">Bosh sahifaga qaytish</a>
      <a href="/xizmatlar" className="btn btn-outline">Xizmatlar</a>
      <a href="/aloqa" className="btn btn-outline">Aloqa</a>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
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

        {/* Admin Routes */}
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<AdminDashboard />} />

          {/* Xizmatlar boshqaruvi */}
          <Route path="services" element={<ServicesList />} />
          <Route path="services/new" element={<ServiceForm />} />
          <Route path="services/:id" element={<ServiceForm />} />

          {/* Blog boshqaruvi */}
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/new" element={<BlogForm />} />
          <Route path="blog/:id" element={<BlogForm />} />

          {/* Ilmiy ishlar boshqaruvi */}
          <Route path="scientific-works" element={<ScientificWorksList />} />
          <Route path="scientific-works/new" element={<ScientificWorksForm />} />
          <Route path="scientific-works/:id" element={<ScientificWorksForm />} />

          {/* Nashrlar boshqaruvi */}
          <Route path="publications" element={<PublicationsList />} />
          <Route path="publications/new" element={<PublicationsForm />} />
          <Route path="publications/:id" element={<PublicationsForm />} />

          {/* FAQ boshqaruvi */}
          <Route path="faq" element={<FAQList />} />
          <Route path="faq/new" element={<FAQForm />} />
          <Route path="faq/:id" element={<FAQForm />} />

          {/* Sayt sozlamalari */}
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </AuthProvider>
  );
}

export default App;
