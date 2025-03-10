import LogoFull from '../../../../public/cblogo.png';
import Image from 'next/image';
import LoginForm from '@/app/ui/admin/login-form';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <Image src={LogoFull} alt="Logo" width={100} height={100} className='w-full' />
          </div>
        </div>
        <LoginForm thisIsLogin={true} />
      </div>
    </main>
  );
}