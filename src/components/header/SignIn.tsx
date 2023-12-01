import { Link } from '@/intl/navigation';

import Header from '.';

export default function SignIn() {
  return (
    <Header.Base>
      <div className="flex items-center gap-4">
        <span className="text-white-half text-sm font-medium">
          Don’t have an account?
        </span>

        <Link href="/sign-up" className="flex items-center gap gap-1.5">
          <span className="text-sm">Get Started</span>
        </Link>
      </div>
    </Header.Base>
  );
}
