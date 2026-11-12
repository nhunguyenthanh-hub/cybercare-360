import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="quote" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-blue-600 p-12 lg:p-16 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-8 tracking-tight">Nhận báo giá miễn phí</h3>
                <p className="text-blue-100 text-lg mb-12 leading-relaxed">
                  Các chuyên gia của chúng tôi sẵn sàng giúp bạn tìm ra gói bảo hiểm phù hợp nhất. 
                  Điền thông tin và chúng tôi sẽ phản hồi trong vòng 2 giờ làm việc.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm font-medium">Hotline</p>
                      <p className="text-xl font-bold">1900 7979</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm font-medium">Website</p>
                      <p className="text-xl font-bold">www.cybercare360.vn</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm font-medium">Địa chỉ</p>
                      <p className="text-xl font-bold">Tòa nhà Security, Quận 1, TP. HCM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            </div>

            {/* Form */}
            <div className="p-12 lg:p-16">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <Send className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-4">Đã nhận yêu cầu!</h4>
                  <p className="text-slate-600 text-lg">
                    Cảm ơn bạn đã quan tâm. Một trong những chuyên gia bảo hiểm an ninh mạng của chúng tôi 
                    sẽ liên hệ với bạn trong thời gian sớm nhất với báo giá cá nhân hóa.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Họ và Tên</label>
                      <input
                        required
                        type="text"
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Địa chỉ Email</label>
                      <input
                        required
                        type="email"
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="vana@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Loại hình Bảo hiểm</label>
                    <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none">
                      <option>Bảo vệ Cá nhân Toàn diện</option>
                      <option>Gói Doanh nghiệp Nhỏ</option>
                      <option>Giải pháp Doanh nghiệp Lớn</option>
                      <option>Bảo hiểm Trộm cắp Danh tính</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Lời nhắn (Tùy chọn)</label>
                    <textarea
                      rows={4}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      placeholder="Hãy cho chúng tôi biết về mối quan tâm bảo mật của bạn..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-3"
                  >
                    Gửi yêu cầu
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
