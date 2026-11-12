import { motion } from 'motion/react';
import { Shield, Zap, Headphones, Handshake } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: "Tin cậy tuyệt đối",
    description: "Đồng hành cùng các đối tác uy tín như BIDV/BIC để mang lại sự an tâm cao nhất."
  },
  {
    icon: Zap,
    title: "Mô hình vận hành linh hoạt",
    description: "Tích hợp qua ví điện tử hoặc mua trực tiếp tại các địa điểm kinh doanh riêng."
  },
  {
    icon: Headphones,
    title: "Hỗ trợ chuyên gia 24/7",
    description: "Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ xử lý sự cố và tư vấn pháp lý kịp thời."
  },
  {
    icon: Handshake,
    title: "Phí bảo hiểm hợp lý",
    description: "Các gói bảo hiểm được thiết kế tối ưu với mức phí cạnh tranh cho mọi đối tượng."
  }
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-3">Tại sao chọn CyberCare 360</h2>
          <h3 className="text-4xl font-bold mb-6 tracking-tight">Tiêu chuẩn vàng trong bảo mật số</h3>
          <p className="text-lg text-slate-400">
            Chúng tôi kết hợp công nghệ hiện đại với kinh nghiệm bảo hiểm dày dặn để mang lại giải pháp thực tiễn nhất.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-white/10 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {/* Mock Partner Logos */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-900 font-black">B</div>
            <span className="text-xl font-bold tracking-tighter">BIDV</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-900 font-black">B</div>
            <span className="text-xl font-bold tracking-tighter">BIC</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-900 font-black">S</div>
            <span className="text-xl font-bold tracking-tighter">SECURE</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-900 font-black">N</div>
            <span className="text-xl font-bold tracking-tighter">NETTRUST</span>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};
