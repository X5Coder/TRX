
import React from 'react';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] pb-8 selection:bg-blue-100 text-[13px]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-14">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/r20hDcqJ/1000149894.jpg" 
            alt="TRX Background" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-md px-3 py-1 rounded-full mb-5 border border-blue-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[9px] font-black tracking-widest uppercase">TRX COMPANY - OFFICIAL</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
            مؤسسة <span className="text-blue-600">TRX</span> المعتمدة <br /> للتوظيف الرقمي
          </h1>
          <p className="text-sm md:text-lg text-slate-400 max-w-lg mx-auto leading-relaxed font-bold">
            حلول متكاملة لتأهيل الموظفين للعمل عن بُعد باحترافية تامة.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 -mt-6 relative z-20 space-y-8">
        
        {/* About Section */}
        <section id="about" className="scroll-mt-16">
          <div className="bg-white rounded-[24px] shadow-lg shadow-slate-200/40 border border-slate-100 overflow-hidden">
            <div className="flex flex-col">
              <div className="p-6">
                <h2 className="text-xl font-black text-slate-900 mb-4 relative inline-block">
                  التعريف بالمؤسسة
                  <span className="block w-10 h-1 bg-blue-600 rounded-full mt-1.5"></span>
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm mb-6 font-bold">
                  تعد مؤسسة TRX من الجهات الرائدة في إدارة الموارد البشرية وتوفير حلول التوظيف الإلكتروني. نرتكز على قيم المصداقية والكفاءة في تدريب الموظفين للعمل في بيئة رقمية متطورة.
                </p>
                <div className="flex gap-3">
                  <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                    <p className="text-lg font-black text-blue-600">1500+</p>
                    <p className="text-[8px] text-slate-400 font-black uppercase">موظف</p>
                  </div>
                  <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                    <p className="text-lg font-black text-blue-600">24/7</p>
                    <p className="text-[8px] text-slate-400 font-black uppercase">دعم فني</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details Section */}
        <section id="details" className="scroll-mt-16">
          <div className="bg-white rounded-[24px] p-6 shadow-md border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-md shadow-blue-50">
                <i className="fas fa-briefcase text-sm"></i>
              </div>
              <h2 className="text-lg font-black text-slate-900">تفاصيل العمل</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-black text-base mb-3 text-blue-950 underline underline-offset-4 decoration-blue-200">مهام الموظف</h3>
                <p className="text-slate-600 leading-relaxed font-bold text-xs">
                  تتضمن المسؤوليات إدارة التواصل مع المتقدمين، عرض الفرص المتاحة، وتقديم التوجيه اللازم خلال مراحل التسجيل الإداري والتدريب الأولي.
                </p>
              </div>
              <div className="p-5 bg-blue-900 rounded-2xl text-white shadow-lg">
                <h3 className="font-black text-base mb-3 text-blue-300">نظام التوجيه الفني</h3>
                <p className="leading-relaxed font-bold text-xs text-blue-100">
                  يتم إلحاق كل موظف بمشرف مختص (Leader) لتوفير الدعم التقني، وتزويده بكافة النماذج المعتمدة لضمان تحقيق أعلى معايير الجودة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Salaries & Targets Section */}
        <section id="salaries" className="scroll-mt-16">
          <div className="bg-white rounded-[24px] p-6 shadow-md border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-md shadow-emerald-50">
                <i className="fas fa-chart-pie text-sm"></i>
              </div>
              <h2 className="text-lg font-black text-slate-900">نظام الاستحقاقات المالية</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-950 rounded-[24px] p-6 text-white shadow-xl">
                <h3 className="text-sm font-black text-blue-500 mb-5 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                   المستوى المطلوب لتحقيق التارجت
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-slate-500 text-[8px] font-black mb-1 uppercase tracking-tighter">التارجت المطلوب للصرف الكامل</p>
                    <p className="text-2xl font-black">20 تعاقد معتمد</p>
                  </div>
                  <div className="p-4 bg-emerald-600/10 rounded-xl border border-emerald-600/20">
                    <p className="text-emerald-400 text-[8px] font-black mb-1 uppercase tracking-tighter">نظام الاستحقاق المعجل (السلفة)</p>
                    <p className="text-base font-black">إمكانية طلب سلفة مالية عند إتمام 10 تعاقدات</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-[24px] p-6 border border-slate-200">
                <h3 className="text-base font-black text-slate-900 mb-5 border-b-2 border-blue-600 pb-2 inline-block">سياسة صرف المستحقات</h3>
                <div className="space-y-4">
                  {[
                    "يتم احتساب المستحقات المالية دورياً بناءً على الأداء الموثق.",
                    "الحد الأدنى لاعتماد الراتب الشهري الكامل هو 20 تعاقد.",
                    "يتم إنتاج استمارة تسجيل من الشركة لكل موظف بعد إكمال التارجت المطلوب.",
                    "يتم صرف كامل المستحقات المتبقية فور استكمال التارجت المطلوب."
                  ].map((rule, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <div className="w-6 h-6 rounded-md bg-white shadow-sm flex items-center justify-center text-blue-600 font-black shrink-0 border border-slate-100 text-[10px]">{i + 1}</div>
                      <p className="text-slate-800 font-bold text-xs leading-snug">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Systems Section */}
        <section id="payment-systems" className="scroll-mt-16">
          <div className="bg-white rounded-[24px] p-6 shadow-md border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-md shadow-indigo-50">
                <i className="fas fa-money-check-dollar text-sm"></i>
              </div>
              <h2 className="text-lg font-black text-slate-900">نظام الدفع والترقيات</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {/* Affiliate System */}
              <div className="p-6 bg-slate-50 rounded-[24px] border-r-4 border-blue-600 shadow-sm">
                <h3 className="text-base font-black text-blue-700 mb-3 flex items-center gap-2">
                  <i className="fas fa-users-viewfinder"></i>
                  1. نظام التسويق بالعمولة (للموظف الجديد)
                </h3>
                <p className="text-slate-600 text-xs font-bold leading-relaxed mb-4">
                  هذا النظام هو نقطة البداية لكل موظف، يهدف إلى تدريبك وزيادة نمو الشركة تدريجياً.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between items-center">
                    <span className="text-slate-500 text-[10px] font-bold">العمولة لكل تسجيل:</span>
                    <span className="text-blue-600 font-black">50 جنيه</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between items-center">
                    <span className="text-slate-500 text-[10px] font-bold">موعد استلام المستحقات:</span>
                    <span className="text-blue-600 font-black">يوم 5 من كل شهر</span>
                  </div>
                </div>
              </div>

              {/* Leader System */}
              <div className="p-6 bg-slate-900 rounded-[24px] text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <i className="fas fa-crown text-6xl rotate-12"></i>
                </div>
                <h3 className="text-base font-black text-indigo-400 mb-3 flex items-center gap-2 relative z-10">
                  <i className="fas fa-star"></i>
                  2. نظام المرتب الشهري (لليدر فقط)
                </h3>
                <p className="text-slate-400 text-xs font-bold leading-relaxed mb-6 relative z-10">
                  نظام مخصص للمشرفين المتميزين، حيث يعتمد المرتب على كفاءة إدارة الفريق والأداء العام.
                </p>
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                    <p className="text-[9px] text-slate-500 font-black mb-1 uppercase">نطاق المرتب</p>
                    <p className="text-base font-black text-indigo-300">2000ج - 5000ج</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                    <p className="text-[9px] text-slate-500 font-black mb-1 uppercase">شرط الترقية</p>
                    <p className="text-xs font-black text-emerald-400">تحقيق 35 عميل أو أكثر</p>
                  </div>
                </div>
                <div className="mt-6 p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-center relative z-10">
                  <p className="text-[10px] text-indigo-200 font-bold italic">يتم تصفيتك وتأهيلك لتصبح ليدر فور تحقيقك للتارجت المطلوب.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bonuses Section */}
        <section id="bonuses" className="scroll-mt-16">
          <div className="bg-white rounded-[24px] p-6 shadow-md border border-slate-100">
            <div className="text-center mb-8">
              <h2 className="text-xl font-black text-slate-900 mb-2">نظام البونص والمكافآت</h2>
              <p className="text-slate-500 font-bold text-[11px]">تعتمد المؤسسة نظاماً تحفيزياً أسبوعياً لدعم الإنتاجية والتميز المهني</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "بونص الأداء اليومي", icon: "💎", desc: "مكافآت متغيرة للأداء الاستثنائي اليومي" },
                { label: "تارجت إضافي", icon: "⚡", desc: "نظام نقاط إضافية لمضاعفة الدخل الأسبوعي" },
                { label: "نظام الاسترداد المالي", icon: "💰", desc: "تقدر تعوض المبلغ الي هتدفعوا عند التسجيل عن طريق البونص" },
                { label: "عروض يوم المكافآت", icon: "🔥", desc: "مكافآت تصل لـ 200 ج أو أكثر على العميل الواحد" }
              ].map((bonus, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100 active:scale-[0.98] transition-all">
                  <div className="text-2xl mb-2">{bonus.icon}</div>
                  <h4 className="font-black text-slate-950 mb-1 text-[10px]">{bonus.label}</h4>
                  <p className="text-[8px] text-slate-400 font-black leading-tight">{bonus.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees Section */}
        <section id="guarantees" className="scroll-mt-16">
          <div className="bg-slate-950 rounded-[24px] p-6 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.05),transparent)]"></div>
            
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-md">
                <i className="fas fa-shield-halved text-sm"></i>
              </div>
              <h2 className="text-xl font-black">الضمانات الرسمية</h2>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="bg-white/5 backdrop-blur-xl p-5 rounded-[24px] border border-white/10">
                  <h3 className="text-blue-500 font-black text-sm mb-4 flex items-center gap-2">
                      <span className="w-1 h-4 bg-blue-600 rounded-full"></span>
                      رقم التحويل الرسمي
                  </h3>
                  <div className="p-4 bg-white/5 rounded-xl mb-3 border border-white/10">
                    <p className="text-2xl font-black text-white tracking-[0.1em] text-center allow-select">01033837488</p>
                  </div>
                  <div className="p-3 bg-red-600/10 border border-red-600/30 rounded-xl text-red-200 font-black text-[9px] leading-relaxed">
                      ⚠️ تنبيه أمني: يمنع التعامل مع أي أرقام تحويل أخرى. المؤسسة غير مسؤولة عن أي مبالغ خارج هذه القناة.
                  </div>
              </div>

              <div className="bg-white rounded-[24px] p-6 text-slate-950 shadow-xl">
                <h3 className="font-black text-base mb-5 text-slate-900 border-b pb-3 border-slate-100 text-center">الحقوق المهنية والقانونية</h3>
                <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5 font-black">
                          <i className="fas fa-check text-[10px]"></i>
                        </div>
                        <p className="font-black text-slate-700 leading-snug text-[11px]">يتم إنتاج استمارة تسجيل رسمية مختومة بختم المؤسسة لضمان كافة حقوقك المهنية.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5 font-black">
                           <i className="fas fa-check text-[10px]"></i>
                        </div>
                        <p className="font-black text-slate-700 leading-snug text-[11px]">رسوم التسجيل الإدارية بالكامل عبر تسجيل 3 عملاء في يوم واحد.</p>
                    </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50 flex justify-center">
                    <img src="https://i.ibb.co/r20hDcqJ/1000149894.jpg" alt="Stamp" className="w-16 h-10 object-contain opacity-5 grayscale" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recruitment Process Section */}
        <section id="apply-process" className="scroll-mt-16">
          <div className="bg-white rounded-[24px] p-6 shadow-md border border-slate-100">
            <h2 className="text-xl font-black text-slate-950 text-center mb-10">مسار التوظيف الرسمي</h2>
            
            <div className="space-y-4">
                {[
                    { title: "التواصل الأولي", desc: "تزويد الموظف بالبيانات المطلوبة", icon: "📤" },
                    { title: "المراجعة الإدارية", desc: "تحويل الطلب للمسؤول المختص للمراجعة", icon: "🔍" },
                    { title: "الرسوم الإدارية", desc: "سداد الرسوم عبر رقم التحويل الرسمي 100جنية", icon: "🏛️" },
                    { title: "التفعيل المهني", desc: "استلام كودك الحركي ورقم الليدر المسؤول عنك", icon: "🆔" },
                    { title: "مباشرة العمل", desc: "الانطلاق في المهام الوظيفية بعد التدريب", icon: "🏁" }
                ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 active:scale-[0.98] transition-all">
                        <div className="w-10 h-10 shrink-0 bg-slate-900 text-white rounded-xl flex items-center justify-center text-lg shadow-sm">
                          {step.icon}
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 mb-0.5 text-xs">{step.title}</h4>
                          <p className="text-[9px] text-slate-400 font-black leading-tight uppercase tracking-tight">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-[20px] border border-blue-100 text-center">
                <p className="text-blue-900 font-black text-xs leading-loose">
                   تبدأ الرحلة بالتواصل مع ممثلنا، ثم سداد الرسوم عبر الرقم الرسمي. يتم بعدها منحك كودك الحركي وبيانات المشرف (Leader) لتبدأ العمل فوراً.
                </p>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section id="apply" className="scroll-mt-16">
            <div className="bg-white rounded-[24px] p-6 shadow-md border border-slate-100">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-slate-950 text-white rounded-xl flex items-center justify-center">
                        <i className="fas fa-users-gear text-sm"></i>
                    </div>
                    <h2 className="text-lg font-black text-slate-900">معايير الأهلية</h2>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {[
                        { label: "السن الأدنى", value: "14 عاماً", icon: "🌱" },
                        { label: "السن الأقصى", value: "50 عاماً", icon: "💼" },
                        { label: "اللغة المعتمدة", value: "إتقان العربية", icon: "🇸🇦" },
                        { label: "المهارة المطلوبة", value: "سرعة الكتابة", icon: "⌨️" }
                    ].map((cond, idx) => (
                        <div key={idx} className="bg-slate-50 p-5 rounded-2xl text-center border border-slate-100 active:scale-[0.97] group">
                            <div className="text-2xl mb-2">{cond.icon}</div>
                            <p className="text-[8px] text-slate-400 font-black mb-1 uppercase tracking-tighter">{cond.label}</p>
                            <p className="text-sm font-black text-slate-950">{cond.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-16 bg-slate-950 text-white pt-12 pb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-3 mb-10">
                    <img src="https://i.ibb.co/r20hDcqJ/1000149894.jpg" alt="Logo" className="w-12 h-12 rounded-xl border border-white/10 object-cover" />
                    <div className="text-right">
                        <span className="text-xl font-black tracking-tighter block">TRX COMPANY</span>
                        <span className="text-[8px] text-blue-500 font-black tracking-[0.3em] uppercase">Official Portal</span>
                    </div>
                </div>
                
                <div className="flex justify-center gap-8 mb-14">
                    <a href="https://facebook.com/trx_company" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/5 active:bg-blue-600 active:scale-90 transition-all">
                        <i className="fab fa-facebook-f text-lg"></i>
                    </a>
                    <a href="https://wa.me/201009341792" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/5 active:bg-emerald-500 active:scale-90 transition-all">
                        <i className="fab fa-whatsapp text-lg"></i>
                    </a>
                    <a href="https://www.tiktok.com/@trx_company" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/5 active:bg-slate-700 active:scale-90 transition-all">
                        <i className="fab fa-tiktok text-lg"></i>
                    </a>
                </div>
                
                <div className="w-full pt-8 border-t border-white/5">
                  <p className="text-slate-400 font-black text-sm mb-1">جميع الحقوق محفوظة لشركة TRX</p>
                  <p className="text-[8px] text-slate-600 font-black tracking-widest uppercase tracking-tighter">COPYRIGHT © {new Date().getFullYear()} TRX COMPANY GROUP</p>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
