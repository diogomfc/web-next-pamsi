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
      className="flex items-center gap-4 rounded-md border border-transparent p-2 text-base font-normal text-muted-foreground  hover:text-[#042F6C] data-[active=true]:bg-[#D5EAFF] data-[active=true]:text-[#042F6C] data-[active=true]:font-bold"
    >
      {children}
    </Link>
  );
}
