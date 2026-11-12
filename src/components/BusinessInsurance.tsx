import { motion } from 'motion/react';
import { Database, Activity, Server, Users, FileCheck, Globe } from 'lucide-react';

const businessFeatures = [
  {
    icon: Database,
    title: "Trách nhiệm vi phạm dữ liệu",
    description: "Bảo hiểm chi phí liên quan đến vi phạm dữ liệu, bao gồm điều tra pháp y, phí pháp lý và chi phí thông báo."
  },
  {
    icon: Activity,
    title: "Gián đoạn kinh doanh",
    description: "Bồi thường tài chính cho thu nhập bị mất và chi phí phát sinh trong thời gian hệ thống ngừng hoạt động do sự cố mạng."
  },
  {
    icon: Server,
    title: "Phục hồi hệ thống CNTT",
    description: "Hỗ trợ chuyên gia và tài trợ để khôi phục cơ sở hạ tầng kỹ thuật số và khôi phục dữ liệu bị mất sau một cuộc tấn công."
  },
  {
    icon: Users,
    title: "Quản lý danh tiếng",
    description: "Bảo hiểm chi phí chuyên gia quan hệ công chúng để giúp khôi phục niềm tin của khách hàng và quản lý hình ảnh thương hiệu sau vi phạm."
  },
  {
    icon: FileCheck,
    title: "Hỗ trợ tuân thủ",
    description: "Hướng dẫn và bảo hiểm cho các khoản tiền phạt và hình phạt theo quy định liên quan đến luật bảo vệ dữ liệu."
  },
  {
    icon: Globe,
    title: "Bảo vệ chống tống tiền mạng",
    description: "Hỗ trợ chuyên biệt cho các cuộc tấn công mã độc tống tiền, bao gồm hỗ trợ đàm phán và bảo hiểm thanh toán tiền chuộc."
  }
];

export const BusinessInsurance = () => {
  return (
    <section id="business" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Dành cho Doanh nghiệp</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Bảo vệ tài sản số của tổ chức</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Giải pháp tối ưu cho các doanh nghiệp thương mại điện tử, công ty công nghệ, phần mềm và các tổ chức số hóa dữ liệu khách hàng.
            </p>
            <ul className="space-y-4">
              {[
                "Bảo hiểm trách nhiệm vi phạm dữ liệu",
                "Gián đoạn kinh doanh do tấn công mạng",
                "Phục hồi hệ thống IT & Quản lý danh tiếng",
                "Hỗ trợ tuân thủ & Quản trị rủi ro"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200"
                alt="Business Security"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-xs hidden sm:block">
              <p className="text-blue-600 font-bold text-4xl mb-2">99.9%</p>
              <p className="text-slate-600 text-sm font-medium">khách hàng doanh nghiệp của chúng tôi cho biết họ cảm thấy an tâm hơn đáng kể sau khi sử dụng dịch vụ.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-slate-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <feature.icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
