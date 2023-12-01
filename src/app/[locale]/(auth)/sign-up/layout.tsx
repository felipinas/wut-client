import { type ReactNode, Fragment } from 'react';

import Header from '@/components/header';

interface SignUpLayoutProps {
  children: ReactNode;
}

export default function SignUpLayout({ children }: SignUpLayoutProps) {
  return (
    <Fragment>
      <Header.SignUp />

      {children}
    </Fragment>
  );
}
