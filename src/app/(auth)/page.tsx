'use client';

import BannerCarousel from '@/components/auth/banner-carousel';
import LoginForm from '@/components/auth/form';

export default function Auth() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col items-center w-1/2 bg-lightMode-colors-white bg-form-login-texture">
        <BannerCarousel />
      </div>

      {/* Formulário de Login */}
      <LoginForm />
    </div>
  );
}
