'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface DashboardData {
  total_analisado: number;
  total_risco: number;
  acao_disciplinar: number;
  atualizacao?: string;
}

export default function Home() {
  const [kpis, setKpis] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/dados-rh'); 
        if (res.ok) {
          const data = await res.json();
          setKpis(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top border-bottom border-primary" 
           style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="container">
          <a className="navbar-brand fw-bold text-primary d-flex align-items-center gap-2" href="#">
            <i className="bi bi-graph-up-arrow"></i> Vinicios Silva
          </a>
          <div className="d-flex gap-2">
            <a href="https://linkedin.com/in/seu-linkedin" target="_blank" className="btn btn-sm btn-primary">
              <i className="bi bi-linkedin me-1"></i> Contato
            </a>
          </div>
        </div>
      </nav>

      <header id="hero" className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh', paddingTop: '80px' }}>
        <div className="container text-center">
          <h1 className="display-5 fw-bold text-ligth mb-3">
            Transformando dados em
            <span className="text-primary bg-white px-2 rounded shadow-sm">Decisões Estratégicas</span>
          </h1>
          <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            Portfólio de Analista de Dados. Especialista em construir pipelines automatizados, 
            arquiteturas Serverless na AWS e Dashboards de Inteligência de Negócio.
          </p>
          
          <div className="d-flex justify-content-center gap-2 flex-wrap mb-5">
            {['Python', 'AWS Lambda', 'S3 Data Lake', 'Next.js', 'Power BI'].map((tech) => (
              <span key={tech} className="badge bg-white text-dark border shadow-sm py-2 px-3 rounded-pill">
                {tech}
              </span>
            ))}
          </div>
          
          
        </div>
      </header>

      <main className="container pb-5" id="projetos" >
        <div className="row g-5">
          
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-lg overflow-hidden" style={{ borderRadius: '24px' }}>
              <div className="card-header bg-white border-0 pt-4 px-4 d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="fw-bold text-primary mb-0">HCI-F: Gestão de Pessoas</h4>
                  <small className="text-muted">Pipeline ETL & Machine Learning</small>
                </div>
                <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
                  ● Online
                </span>
              </div>
              
              <div className="card-body px-4 pb-4 ">
                <p className="text-muted">
                  Sistema preditivo que analisa absenteísmo e turnover. Substitui planilhas manuais por um fluxo automatizado na nuvem.
                </p>

                <div className="bg-light p-3 rounded-3 mb-4 border border-primary border-opacity-10">
                  <h6 className="text-uppercase text-primary fw-bold fs-7 mb-3" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                    <i className="bi bi-broadcast me-2"></i> Dados em Tempo Real (AWS S3)
                  </h6>

                  {/*
                  
                  {loading ? (
                      <div className="d-flex justify-content-center py-3">
                         <div className="spinner-border spinner-border-sm text-primary" role="status"></div>
                      </div>
                   ) : kpis ? (
                     <div className="row text-center g-2">
                       <div className="col-4">
                         <div className="bg-white p-2 rounded border shadow-sm">
                           <strong className="d-block fs-3 text-dark">{kpis.total_analisado}</strong>
                           <span className="text-muted" style={{ fontSize: '11px' }}>Colaboradores</span>
                         </div>
                       </div>
                       <div className="col-4">
                         <div className="bg-white p-2 rounded border shadow-sm">
                           <strong className="d-block fs-3 text-danger">{kpis.total_risco}</strong>
                           <span className="text-danger" style={{ fontSize: '11px' }}>Alto Risco</span>
                         </div>
                       </div>
                       <div className="col-4">
                         <div className="bg-white p-2 rounded border shadow-sm">
                           <strong className="d-block fs-3 text-warning">{kpis.acao_disciplinar}</strong>
                           <span className="text-warning" style={{ fontSize: '11px' }}>Ações Geradas</span>
                         </div>
                       </div>
                     </div> 
                   ) */}
                   <div style={{ position: 'relative', height: '250px', width: '100%', backgroundColor: '#f8f9fa' }}>
                      <Image 
                      src="/image.png" 
                      alt="Visualização do Projeto Data Lake"
                      fill
                      style={{ objectFit: 'cover' }}
                    
                      />
                  </div>
                </div>

                <div className="d-grid">
                   <a href="https://portifolio-2026-ycqpnrckrskrj9gfxf4asb.streamlit.app/" target="_blank" className="btn btn-outline-primary fw-bold rounded-pill">
                     Acessar Dashboard Completo
                   </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm overflow-hidden" style={{ borderRadius: '24px' }}>
              
              

              <div className="card-body p-4 text-center">
                 <h4 className="fw-bold mt-2">Data Lake Serverless</h4>
                 <p className="text-muted mt-3">
                   Arquitetura de ingestão de dados escalável utilizando AWS Lambda, S3. 
                   Processamento de Big Data com custo otimizado.
                 </p>
                 <button className="btn btn-light text-muted mt-2 rounded-pill px-4" disabled>Em Desenvolvimento</button>
              </div>

              

            </div>
          </div>

        </div>
      </main>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <h3 className="fw-bold text-dark mb-4">
                Mais que código, <span className="text-primary">estratégia de dados</span>
              </h3>
              <p className="text-secondary leading-relaxed">
                Minha experiência combina a precisão técnica de analise de dados com a visão analítica necessária para impulsionar decisões de negócio de negócios.
                Foco em criar soluções que não apenas processam dados, mas que geram valor tangível e redução de custos.
              </p>

              <div className="mt-4">
                <h6 className="fw-bold text-dark mb-3">Minha stack principal:</h6>
                <div className="d-flex gap-2 felx-wrap">
                    {['Python','AWS Lambida','Power BI','Next.js'].map((item) => (
                      <span key={item} className="badge bg-white text-secondary border px-3 py-2">
                        <i className="bi bi-check-circle-fill text-sucess me-1"></i> {item}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                    <div className="p-4 bg-white shadow-sm rounded-4 text-center border-bottom border-4 border-primary">
                      <h2 className="fw-bold text-dark mb-0">3+</h2>
                      <small className="text-muted">Anos de XP</small>
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-4 bg-white shadow-sm rounded-4 text-center border-bottom border-4 border-sucess">
                      <h2 className="fw-bold text-dark mb-0">*+</h2>
                      <small className="text-muted">Projetos Entregues</small>
                    </div>
                </div>
              </div>
              <div className="col-12">
                <div className="p-3 bg-primary text-white shadow rounded-4 d-flex align-items-center justify-content-between">
                </div>
                    <h5 className="fw-bold mb-1 text-dark">Disponível para projetos</h5>
                    <small className="opacity-75 text-dark">Vamos conversar sobre sua infraestrutura?</small>
              </div>
              <a href="https://linkedin.com/in/seu-linkedin" target="_blank" className="btn btn-light rounded-circle" style={{width: '50px', height:'50px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <i className="bi bi-linkedin text-primary fs-4"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-4 text-muted border-top bg-white ">
        <small>© 2026 Vinicios Silva. Powered by Next.js & AWS.</small>
      </footer>
    </>
  );
}