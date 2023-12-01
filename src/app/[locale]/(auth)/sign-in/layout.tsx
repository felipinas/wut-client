import { type ReactNode, Fragment } from 'react';

import Header from '@/components/header';

interface SignInLayoutProps {
  children: ReactNode;
}

export default function SignInLayout({ children }: SignInLayoutProps) {
  return (
    <Fragment>
      <Header.SignIn />

      {children}
    </Fragment>
  );
}
