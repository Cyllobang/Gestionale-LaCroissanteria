
import React, { useEffect, useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Product, Bar as BarType, DayOfWeek } from '../types';
import { Truck, Package, DollarSign, BrainCircuit } from 'lucide-react';
import { generateBriefing } from '../services/geminiService';

interface DashboardProps {
  products: Product[];
  bars: BarType[];
  tonightTotal: number;
}

export const Dashboard: React.FC<DashboardProps> = ({ products, bars, tonightTotal }) => {
  const [briefing, setBriefing] = useState<string>("Analisi operativa in corso...");
  
  // 1. Calculate REAL Weekly Trend Data based on bars
  const chartData = useMemo(() => {
    const days: DayOfWeek[] = [
      DayOfWeek.MON, DayOfWeek.TUE, DayOfWeek.WED, DayOfWeek.THU, 
      DayOfWeek.FRI, DayOfWeek.SAT, DayOfWeek.SUN
    ];
    
    const dayNames = {
      [DayOfWeek.MON]: 'Lun', [DayOfWeek.TUE]: 'Mar', [DayOfWeek.WED]: 'Mer',
      [DayOfWeek.THU]: 'Gio', [DayOfWeek.FRI]: 'Ven', [DayOfWeek.SAT]: 'Sab', [DayOfWeek.SUN]: 'Dom'
    };

    return days.map(day => {
      let totalOrders = 0;
      bars.forEach(bar => {
        if (!bar.isActive) return;
        const dailyOrders = bar.weeklyOrder[day] || {};
        Object.values(dailyOrders).forEach((qty: number) => totalOrders += qty);
      });

      return {
        name: dayNames[day],
        orders: totalOrders
      };
    });
  }, [bars]);

  // 2. Calculate REAL Top Products (Global Weekly Volume)
  const topProducts = useMemo(() => {
    const productTotals: Record<string, number> = {};

    bars.forEach(bar => {
        if(!bar.isActive) return;
        Object.values(bar.weeklyOrder).forEach(dayOrder => {
            Object.entries(dayOrder).forEach(([pid, qty]) => {
                const quantity = qty as number;
                productTotals[pid] = (productTotals[pid] || 0) + quantity;
            });
        });
    });

    return Object.entries(productTotals)
      .map(([pid, total]) => {
          const product = products.find(p => p.id === pid);
          return product ? { ...product, sales: total } : null;
      })
      .filter(Boolean)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .sort((a: any, b: any) => b.sales - a.sales)
      .slice(0, 5); // Top 5
  }, [bars, products]);

  // 3. Calculate REAL Revenue Forecast for Tonight
  const tonightRevenue = useMemo(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayKey = Object.values(DayOfWeek)[(tomorrow.getDay() + 6) % 7] as DayOfWeek;
    
    let revenue = 0;
    
    bars.forEach(bar => {
        if(!bar.isActive) return;
        const orders = bar.weeklyOrder[dayKey] || {};
        Object.entries(orders).forEach(([pid, qty]) => {
            const quantity = qty as number;
            const product = products.find(p => p.id === pid);
            if(product) {
                // Use custom price if exists, otherwise base price
                const price = bar.customPrices[pid] ?? product.basePrice;
                revenue += price * quantity;
            }
        });
    });

    return revenue;
  }, [bars, products]);

  // AI Briefing Effect
  useEffect(() => {
    const fetchBriefing = async () => {
      // Calculate Average from the chart data
      const totalWeekly = chartData.reduce((acc, curr) => acc + curr.orders, 0);
      const averageOrders = Math.round(totalWeekly / 7);
      
      const weather = "Sereno"; // Placeholder - AI will ignore this unless it's severe
      const topZone = "Centro"; // Placeholder

      const b = await generateBriefing(
        new Date().toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' }),
        tonightTotal,
        averageOrders,
        weather,
        topZone
      );
      setBriefing(b);
    };
    
    if (tonightTotal > 0) {
        fetchBriefing();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tonightTotal, chartData]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className="p-3 bg-amber-100 rounded-full text-amber-600">
            <Package size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Totale Stanotte</p>
            <h3 className="text-2xl font-bold text-slate-800">{tonightTotal} <span className="text-sm font-normal text-slate-400">pezzi</span></h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className="p-3 bg-blue-100 rounded-full text-blue-600">
            <Truck size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Bar da Servire</p>
            {/* Count bars that actually have an order for tonight */}
            <h3 className="text-2xl font-bold text-slate-800">
                {bars.filter(b => {
                    const tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    const dayKey = Object.values(DayOfWeek)[(tomorrow.getDay() + 6) % 7] as DayOfWeek;
                    const orders = b.weeklyOrder[dayKey] || {};
                    return b.isActive && Object.keys(orders).length > 0;
                }).length}
            </h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className="p-3 bg-green-100 rounded-full text-green-600">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Incasso Previsto</p>
            <h3 className="text-2xl font-bold text-slate-800">€ {tonightRevenue.toFixed(2)}</h3>
          </div>
        </div>
      </div>

      {/* AI Briefing Section - CLEANED */}
      <div className="bg-slate-900 rounded-xl p-1 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 opacity-80"></div>
        <div className="p-6 relative z-10">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <div className="bg-slate-800 p-1.5 rounded-lg border border-slate-700">
                         <BrainCircuit className="text-amber-400" size={18} />
                    </div>
                    <h2 className="text-lg font-bold text-white tracking-wide">Briefing Operativo</h2>
                </div>
            </div>
            
            <div className="flex gap-4">
                <p className="text-slate-300 leading-relaxed font-light text-lg">
                "{briefing}"
                </p>
            </div>
        </div>
        {/* Decorative background glow */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-700"></div>
      </div>

      {/* Charts & Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 lg:col-span-2">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Volume Settimanale (Pezzi)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} 
                  cursor={{fill: '#f1f5f9'}}
                />
                <Bar dataKey="orders" fill="#f59e0b" radius={[4, 4, 0, 0]} name="Pezzi" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Top 5 Prodotti (Settimana)</h3>
          <ul className="space-y-4">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {topProducts.map((p: any, idx: number) => (
              <li key={p.id} className="flex items-center space-x-3">
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${idx === 0 ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'}`}>
                  {idx + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 truncate">{p.name}</p>
                  <p className="text-xs text-slate-500">{p.category}</p>
                </div>
                <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
                  {p.sales.toLocaleString()} pz
                </span>
              </li>
            ))}
            {topProducts.length === 0 && (
                <li className="text-center text-slate-400 text-sm py-4">Nessun ordine presente</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
