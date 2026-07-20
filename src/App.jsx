import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import TopBar from './components/layout/TopBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Productos from './pages/Productos'
import TarjetasBanca from './pages/TarjetasBanca'
import TarjetasEmpresa from './pages/TarjetasEmpresa'
import FundasBloqueo from './pages/FundasBloqueo'
import Rollos from './pages/Rollos'
import SobresPreimpresos from './pages/SobresPreimpresos'
import Contacto from './pages/Contacto'
import Clientes from './pages/Clientes'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import SolucionesEmpresariales from './pages/SolucionesEmpresariales'
import DesarrolloWeb from './pages/DesarrolloWeb'
import SoftwareAMedida from './pages/SoftwareAMedida'
import KeyErp from './pages/KeyErp'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.2 } },
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex-1"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/tarjetas-bancarias" element={<TarjetasBanca />} />
          <Route path="/tarjetas-empresa" element={<TarjetasEmpresa />} />
          <Route path="/fundas-rfid" element={<FundasBloqueo />} />
          <Route path="/rollos-termicos" element={<Rollos />} />
          <Route path="/sobres-preimpresos" element={<SobresPreimpresos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Soluciones empresariales de software */}
          <Route path="/soluciones-empresariales" element={<SolucionesEmpresariales />} />
          <Route path="/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="/software-a-medida" element={<SoftwareAMedida />} />
          <Route path="/key-erp" element={<KeyErp />} />

          {/* Redirects de URLs antiguas → nuevas (301 equivalente en cliente) */}
          <Route path="/tarjetas-banca" element={<Navigate to="/tarjetas-bancarias" replace />} />
          <Route path="/fundas-bloqueo" element={<Navigate to="/fundas-rfid" replace />} />
          <Route path="/rollos" element={<Navigate to="/rollos-termicos" replace />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}
