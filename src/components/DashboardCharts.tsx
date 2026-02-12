'use client';

import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, CartesianGrid 
} from 'recharts';

const COLORS = ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#6c757d'];

interface ChartData {
  grafico_pizza: { name: string; value: number }[];
  grafico_barras: { name: string; value: number }[];
}

export default function DashboardCharts({ data }: { data: ChartData }) {
  if (!data || !data.grafico_pizza || !data.grafico_barras) return null;

  return (
    <div className="row g-4 mt-3">
      
      {/* GRÁFICO 1: PIZZA (Distribuição de Ações) */}
      <div className="col-lg-6">
        <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '20px' }}>
          <div className="card-header bg-white border-0 pt-4 px-4">
            <h5 className="fw-bold text-dark mb-0">📌 Distribuição de Ações</h5>
            <small className="text-muted">Recomendação do Modelo Prescritivo</small>
          </div>
          <div className="card-body" style={{ height: '350px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.grafico_pizza}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.grafico_pizza.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
            
           
            <div className="d-flex justify-content-center gap-3 flex-wrap mt-2">
              {data.grafico_pizza.map((entry, index) => (
                <div key={index} className="d-flex align-items-center gap-1" style={{ fontSize: '12px' }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS[index % COLORS.length] }}></span>
                  {entry.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GRÁFICO 2: BARRAS (Motivos de Falta) */}
      <div className="col-lg-6">
        <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '20px' }}>
          <div className="card-header bg-white border-0 pt-4 px-4">
            <h5 className="fw-bold text-dark mb-0">⚠️ Top Motivos de Absenteísmo</h5>
            <small className="text-muted">Principais causas identificadas</small>
          </div>
          <div className="card-body" style={{ height: '350px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.grafico_barras} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e9ecef" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={150} 
                  tick={{ fontSize: 11, fill: '#6c757d' }} 
                  interval={0}
                />
                <Tooltip 
                   cursor={{ fill: '#f8f9fa' }}
                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="value" fill="#dc3545" radius={[0, 6, 6, 0]} barSize={25} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  );
}