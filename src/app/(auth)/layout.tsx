export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <main className="w-full mx-auto ">{children}</main>;
}
