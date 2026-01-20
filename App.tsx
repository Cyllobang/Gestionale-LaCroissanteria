
import React, { useState, useEffect, useMemo } from 'react';
import { 
  LayoutDashboard, 
  Croissant, 
  Store, 
  Moon, 
  Menu,
  X,
  FileBarChart,
  CreditCard,
  Truck,
  FileText
} from 'lucide-react';

// Components
import { Dashboard } from './components/Dashboard';
import { Operations } from './components/Operations';
import { BarList } from './components/BarList';
import { ProductList } from './components/ProductList';
import { Reports } from './components/Reports';
import { Accounting } from './components/Accounting';
import { SupplierList } from './components/SupplierList';
import { DeliveryNotes } from './components/DeliveryNotes';

// Data & Types
import { MOCK_BARS, MOCK_PRODUCTS, MOCK_SUPPLIERS, APP_NAME } from './constants';
import { UserRole, Bar, Product, DayOfWeek, Page, Supplier } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('dashboard');
  const [role, setRole] = useState<UserRole>(UserRole.ADMIN);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // -- PERSISTENCE LOGIC --
  const [bars, setBars] = useState<Bar[]>(() => {
    try {
      const saved = localStorage.getItem('croissanteria_bars_v15');
      return saved ? JSON.parse(saved) : MOCK_BARS;
    } catch (e) { return MOCK_BARS; }
  });

  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('croissanteria_products_v10');
      return saved ? JSON.parse(saved) : MOCK_PRODUCTS;
    } catch (e) { return MOCK_PRODUCTS; }
  });

  const [suppliers, setSuppliers] = useState<Supplier[]>(() => {
    try {
      const saved = localStorage.getItem('croissanteria_suppliers_v1');
      return saved ? JSON.parse(saved) : MOCK_SUPPLIERS;
    } catch (e) { return MOCK_SUPPLIERS; }
  });

  const [dailyMods, setDailyMods] = useState<Record<string, Record<string, Record<string, number>>>>(() => {
    try {
      const saved = localStorage.getItem('croissanteria_dailymods');
      return saved ? JSON.parse(saved) : {};
    } catch (e) { return {}; }
  });

  const [paidRecords, setPaidRecords] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('croissanteria_paid_records');
      return saved ? JSON.parse(saved) : {};
    } catch (e) { return {}; }
  });

  useEffect(() => { localStorage.setItem('croissanteria_bars_v15', JSON.stringify(bars)); }, [bars]);
  useEffect(() => { localStorage.setItem('croissanteria_products_v10', JSON.stringify(products)); }, [products]);
  useEffect(() => { localStorage.setItem('croissanteria_suppliers_v1', JSON.stringify(suppliers)); }, [suppliers]);
  useEffect(() => { localStorage.setItem('croissanteria_dailymods', JSON.stringify(dailyMods)); }, [dailyMods]);
  useEffect(() => { localStorage.setItem('croissanteria_paid_records', JSON.stringify(paidRecords)); }, [paidRecords]);

  const handleNav = (page: Page) => {
    setActivePage(page);
    setIsSidebarOpen(false);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const tonightTotal = useMemo(() => {
    const dayKey = Object.values(DayOfWeek)[(tomorrow.getDay() + 6) % 7] as DayOfWeek;
    let total = 0;
    bars.forEach(bar => {
      if (!bar.isActive) return;
      const orders = bar.weeklyOrder[dayKey] || {};
      Object.values(orders).forEach((qty: number) => { total += (qty || 0); });
    });
    return total;
  }, [bars, tomorrow]);

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden font-sans">
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 w-full bg-slate-900 text-white z-50 flex justify-between items-center p-4 shadow-md no-print">
        <div className="flex items-center gap-2">
            <span className="text-2xl">🥐</span>
            <span className="font-bold tracking-tight">{APP_NAME}</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed lg:static top-0 left-0 z-40 h-full w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out no-print
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col pt-20 lg:pt-6
      `}>
        <nav className="flex-1 px-4 space-y-2">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active={activePage === 'dashboard'} onClick={() => handleNav('dashboard')} />
          <NavItem icon={<Moon size={20} />} label="Produzione" active={activePage === 'nightly'} onClick={() => handleNav('nightly')} />
          <NavItem icon={<FileText size={20} />} label="Bolle Consegna" active={activePage === 'delivery-notes'} onClick={() => handleNav('delivery-notes')} />
          <NavItem icon={<CreditCard size={20} />} label="Contabilità" active={activePage === 'accounting'} onClick={() => handleNav('accounting')} />
          <NavItem icon={<Store size={20} />} label="Bar" active={activePage === 'bars'} onClick={() => handleNav('bars')} />
          <NavItem icon={<Truck size={20} />} label="Fornitori" active={activePage === 'suppliers'} onClick={() => handleNav('suppliers')} />
          <NavItem icon={<Croissant size={20} />} label="Prodotti" active={activePage === 'products'} onClick={() => handleNav('products')} />
          <NavItem icon={<FileBarChart size={20} />} label="Report" active={activePage === 'reports'} onClick={() => handleNav('reports')} />
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pt-16 lg:pt-0">
        <div className="p-4 lg:p-8 max-w-7xl mx-auto h-full">
          {activePage === 'dashboard' && <Dashboard products={products} bars={bars} tonightTotal={tonightTotal} />}
          {activePage === 'nightly' && <Operations bars={bars} products={products} currentDate={tomorrow} dailyMods={dailyMods} setDailyMods={setDailyMods} suppliers={suppliers} />}
          {activePage === 'delivery-notes' && <DeliveryNotes bars={bars} products={products} dailyMods={dailyMods} />}
          {activePage === 'accounting' && <Accounting bars={bars} products={products} dailyMods={dailyMods} paidRecords={paidRecords} setPaidRecords={setPaidRecords} />}
          {activePage === 'bars' && <BarList bars={bars} setBars={setBars} products={products} dailyMods={dailyMods} setDailyMods={setDailyMods} />}
          {activePage === 'products' && <ProductList products={products} setProducts={setProducts} suppliers={suppliers} />}
          {activePage === 'suppliers' && <SupplierList suppliers={suppliers} setSuppliers={setSuppliers} />}
          {activePage === 'reports' && <Reports bars={bars} products={products} />}
        </div>
      </main>
    </div>
  );
};

const NavItem: React.FC<{icon: React.ReactNode, label: string, active: boolean, onClick: () => void}> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`
      flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 font-medium
      ${active ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
    `}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default App;
