import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define as rotas públicas e privadas
const publicRoutes = ['/'];
const privateRoutes = ['/hub', '/users', '/teste'];

export default function middleware(req: NextRequest) {
  // Acessar accessToken que está salvo no cookie
  const accessToken = req.cookies.get('sh.token')?.value;

  // Verifica se a rota é pública
  const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);

  // Verifica se a rota é privada
  const isPrivateRoute = privateRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  // Caso não tenha o accessToken e a rota seja privada, redirecionar para a página de login
  if (!accessToken && isPrivateRoute) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Caso tenha o accessToken e a rota seja a página de login, redirecionar para a página de hub
  if (accessToken && isPublicRoute) {
    return NextResponse.redirect(new URL('/hub', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/hub/:path*', '/users/:path*', '/teste/:path*']
};
