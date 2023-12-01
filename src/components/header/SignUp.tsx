import { Link } from '@/intl/navigation';
import { LogOut } from 'lucide-react';

import Header from '.';

export default function SignUp() {
  return (
    <Header.Base>
      <div className="flex items-center gap-4">
        <span className="text-white-half text-sm font-medium">
          Have an account?
        </span>

        <Link href="/sign-in" className="flex items-center gap gap-1.5">
          <LogOut className="w-4 h-4" />

          <span className="text-sm">Login</span>
        </Link>
      </div>
    </Header.Base>
  );
}
