'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

export type NavLinkProps = LinkProps & {
  children: React.ReactNode;
};

export function NavItemSheet({ children, ...props }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      data-active={pathname === props.href}
      className="flex items-center  bg-white py-2 pl-6 pr-1 text-sm font-normal text-muted-foreground  data-[active=true]:text-[#042F6C] data-[active=true]:font-semibold  data-[active=true]:bg-slate-100 hover:bg-slate-100"
    >
      {children}
    </Link>
  );
}
