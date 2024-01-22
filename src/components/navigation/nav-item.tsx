'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

export type NavLinkProps = LinkProps & {
  children: React.ReactNode;
};

export function NavLink({ children, ...props }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      data-active={pathname === props.href}
      className="flex items-center gap-4 rounded-md border bg-white border-lightMode-colors-blue-100 p-2 text-base font-normal text-muted-foreground  hover:text-[#042F6C] data-[active=true]:border-lightMode-colors-blue-200 data-[active=true]:text-[#042F6C] data-[active=true]:bg-slate-50 hover:bg-slate-50"
    >
      {children}
    </Link>
  );
}
