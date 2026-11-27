import { Link } from 'react-router-dom'
import './AuthPages.css'

export default function RegisterPage() {
  return (
    <main className="auth-page">

      <section className="auth-form-panel">
        <div className="auth-form-wrap">
          <h2>Tạo tài khoản</h2>
          <p>Điền thông tin bên dưới để bắt đầu học tập.</p>
          <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
            <div className="auth-field">
              <label htmlFor="register-name">Họ và tên</label>
              <div className="auth-input-wrap">
                <input id="register-name" type="text" placeholder="Nguyễn Văn A" />
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
              </div>
            </div>
            <div className="auth-field">
              <label htmlFor="register-email">Email</label>
              <div className="auth-input-wrap">
                <input id="register-email" type="email" placeholder="student@tvu.edu.vn" />
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>
              </div>
            </div>
            <div className="auth-field">
              <label htmlFor="register-password">Mật khẩu</label>
              <div className="auth-input-wrap">
                <input id="register-password" type="password" placeholder="Tạo mật khẩu" />
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="10" width="14" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
              </div>
            </div>
            <label className="auth-check"><input type="checkbox" /> Tôi đồng ý với <a href="#terms">Điều khoản sử dụng</a></label>
            <button className="auth-submit" type="submit">Tạo tài khoản</button>
          </form>
          <div className="auth-divider">hoặc đăng ký bằng</div>
          <button className="auth-provider" type="button" aria-label="Google"><span>G</span> Google</button>
          <p className="auth-switch">Đã có tài khoản?<Link to="/login">Đăng nhập</Link></p>
        </div>
      </section>
    </main>
  )
}
