import { useRouter } from 'next/router';

export function RouterContextProvider({ children }) {
  const router = useRouter();
  return <>{children(router)}</>;
}

// Within VerticalLinearStepper:
const { pathname } = router; // Now you can access pathname