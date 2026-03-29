import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Predictor from './pages/Predictor'
import NGOs from './pages/NGOs'
import Logistics from './pages/Logistics'
import Alerts from './pages/Alerts'
import Settings from './pages/Settings'

export default function App() {
  return (
    <div className="flex h-screen bg-surface overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/predictor" element={<Predictor />} />
          <Route path="/ngos" element={<NGOs />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
