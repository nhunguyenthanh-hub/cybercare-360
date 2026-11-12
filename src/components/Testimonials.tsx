import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Nguyễn Văn A",
    role: "Chủ cửa hàng trực tuyến",
    content: "Sau khi tài khoản ngân hàng của tôi bị xâm nhập và mất một khoản tiền lớn, CyberCare 360 đã hỗ trợ tôi phục hồi tổn thất tài chính cực kỳ nhanh chóng. Tôi thực sự an tâm hơn khi kinh doanh trực tuyến.",
    avatar: "https://i.pravatar.cc/150?u=vana"
  },
  {
    name: "Trần Thị B",
    role: "Giám đốc Công ty Công nghệ",
    content: "Dịch vụ hỗ trợ pháp lý và xử lý trộm cắp danh tính của CyberCare 360 rất chuyên nghiệp. Họ đã giúp doanh nghiệp chúng tôi vượt qua khủng hoảng dữ liệu một cách an toàn.",
    avatar: "https://i.pravatar.cc/150?u=thib"
  },
  {
    name: "Lê Văn C",
    role: "Người dùng mạng xã hội",
    content: "Tôi từng bị bắt nạt trên mạng qua Deepfake. Nhờ có gói bảo hiểm bạo lực mạng, tôi đã được hỗ trợ chi phí y tế và tư vấn tâm lý kịp thời để vượt qua giai đoạn khó khăn.",
    avatar: "https://i.pravatar.cc/150?u=vanc"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Khách hàng nói gì</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Được tin tưởng bởi hàng ngàn người dùng</h3>
          <p className="text-lg text-slate-600">
            Đừng chỉ nghe từ chúng tôi. Hãy xem khách hàng đã cảm thấy an tâm như thế nào khi sử dụng dịch vụ của CyberCare 360.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-blue-100" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
