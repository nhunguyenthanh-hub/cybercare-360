import { motion } from 'motion/react';
import { User, Shield, CreditCard, Key, Smartphone, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: "Tổn thất Tài chính do Lừa đảo",
    description: "Bồi thường số tiền bị mất do Tấn công mạng (Hacking/Malware), Lừa đảo trực tuyến (Phishing) hoặc Gian lận mua sắm."
  },
  {
    icon: User,
    title: "Trộm cắp danh tính",
    description: "Chi trả chi phí pháp lý, hành chính và trợ cấp mất thu nhập khi bị đánh cắp thông tin cá nhân (CCCD, mạng xã hội)."
  },
  {
    icon: HeartPulse,
    title: "Bạo lực mạng (Cyberbullying)",
    description: "Bồi thường chi phí y tế khi phải điều trị tâm lý do bị tống tiền (Deepfake), bôi nhọ hoặc bắt nạt trên mạng."
  },
  {
    icon: Key,
    title: "Chi phí Pháp lý & Tư vấn",
    description: "Phí thuê Luật sư để bào chữa, tư vấn hoặc lập vi bằng số nhằm chứng minh vô tội trước các cáo buộc pháp lý."
  },
  {
    icon: Smartphone,
    title: "Hỗ trợ Phục hồi Dữ liệu",
    description: "Lệ phí xin cấp lại các giấy tờ tùy thân, tài khoản ngân hàng/thẻ tín dụng bị thỏa hiệp."
  },
  {
    icon: Shield,
    title: "Trợ cấp Mất thu nhập",
    description: "Trợ cấp tiền mặt tối đa 15 ngày khi phải nghỉ việc để làm việc với cơ quan điều tra/tư pháp."
  }
];

export const IndividualInsurance = () => {
  return (
    <section id="individual" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Quyền lợi bảo hiểm</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Bảo vệ toàn diện trên không gian số</h3>
          <p className="text-lg text-slate-600">
            Dành cho công dân Việt Nam hoặc người nước ngoài cư trú hợp pháp, sử dụng ngân hàng số, ví điện tử và mạng xã hội.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h4 className="text-3xl font-bold mb-4">Bạn đã sẵn sàng bảo vệ tài sản số?</h4>
              <p className="text-blue-100 text-lg">
                Quyền lợi áp dụng mức đồng chi trả (Co-pay) 10-20% để chia sẻ trách nhiệm, giúp bạn an tâm hơn mỗi ngày.
              </p>
            </div>
            <a
              href="#quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              Bảo vệ tôi ngay
            </a>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>
      </div>
    </section>
  );
};
