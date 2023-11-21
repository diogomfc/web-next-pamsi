'use client';

import BannerCarousel from '@/components/auth/banner-carousel';

export default function AuthForm() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col items-center w-1/2 bg-THEME-colors-white bg-form-login-texture">
        <BannerCarousel />
      </div>

      {/* Formulário de Login */}
      {/* <LoginForm /> */}
    </div>
  );
}
