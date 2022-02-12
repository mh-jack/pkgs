// Global styles
import { globalStyles } from "@mh-jack/ui";
import { UserProvider } from "@mh-jack/auth";
import type { AppProps } from "next/app";

export default function App({ Component }: AppProps) {
  globalStyles();
  return (
    <SafeHydrate>
      <Component />
    </SafeHydrate>
  );
}

/**
 * Prevents the app from rendering on the server-side.
 * Currently needed for react-router to work.
 *
 * See {@link https://github.com/DavidWells/next-with-react-router-v5}
 */

function SafeHydrate({ children }) {
  return (
    <div id="root" suppressHydrationWarning>
      {typeof window === "undefined" ? <></> : children}
    </div>
  );
}
