import { Shield, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 tracking-tight">CyberCare 360</span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Sống số vững vàng – An tâm dài hạn. 
              Giải pháp bảo hiểm an ninh mạng hàng đầu cho người Việt.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Giải pháp</h4>
            <ul className="space-y-4">
              {["Bảo hiểm cá nhân", "Bảo hiểm doanh nghiệp", "Rủi ro doanh nghiệp", "Phục hồi danh tính"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Công ty</h4>
            <ul className="space-y-4">
              {["Về chúng tôi", "Đối tác", "Tuyển dụng", "Báo chí"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Hỗ trợ</h4>
            <ul className="space-y-4">
              {["Trung tâm trợ giúp", "Quy trình bồi thường", "Mẹo bảo mật", "Chính sách bảo mật"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 CyberCare 360. Đã đăng ký bản quyền. Đối tác của BIDV & BIC.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 text-sm hover:text-slate-600">Điều khoản dịch vụ</a>
            <a href="#" className="text-slate-400 text-sm hover:text-slate-600">Chính sách Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
