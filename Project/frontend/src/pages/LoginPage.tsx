import { useState } from 'react'
import { Link } from 'react-router-dom'
import './AuthPages.css'

export default function LoginPage() {
  const [recovering, setRecovering] = useState(false)

  return (
    <main className="auth-page">

      <section className="auth-form-panel">
        <div className="auth-form-wrap">
          {recovering ? (
            <>
              <h2>Khôi phục mật khẩu</h2>
              <p>Nhập email học tập của bạn để nhận liên kết đặt lại mật khẩu.</p>
              <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
                <div className="auth-field">
                  <label htmlFor="recovery-email">Email</label>
                  <div className="auth-input-wrap">
                    <input id="recovery-email" type="email" placeholder="student@tvu.edu.vn" />
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>
                  </div>
                </div>
                <button className="auth-submit" type="submit">Gửi liên kết khôi phục</button>
              </form>
              <div className="auth-divider">hoặc</div>
              <button className="auth-link" type="button" onClick={() => setRecovering(false)}>← Quay lại đăng nhập</button>
            </>
          ) : (
            <>
              <h2>Chào mừng trở lại</h2>
              <p>Đăng nhập để tiếp tục hành trình học tập của bạn.</p>
              <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
                <div className="auth-field">
                  <label htmlFor="login-email">Email</label>
                  <div className="auth-input-wrap">
                    <input id="login-email" type="email" placeholder="student@tvu.edu.vn" />
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>
                  </div>
                </div>
                <div className="auth-field">
                  <label htmlFor="login-password">Mật khẩu</label>
                  <div className="auth-input-wrap">
                    <input id="login-password" type="password" placeholder="Nhập mật khẩu" />
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="10" width="14" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
                  </div>
                </div>
                <div className="auth-row">
                  <label className="auth-check"><input type="checkbox" /> Ghi nhớ đăng nhập</label>
                  <button className="auth-link" type="button" onClick={() => setRecovering(true)}>Quên mật khẩu?</button>
                </div>
                <button className="auth-submit" type="submit">Đăng nhập</button>
              </form>
              <div className="auth-divider">hoặc đăng nhập bằng</div>
              <button className="auth-provider" type="button" aria-label="Google"><span>G</span> Google</button>
              <p className="auth-switch">Chưa có tài khoản?<Link to="/register">Tạo tài khoản</Link></p>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
