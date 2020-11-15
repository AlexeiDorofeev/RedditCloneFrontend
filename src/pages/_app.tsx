import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { createClient, Provider } from "urql";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  const client = createClient({
    url: "http://localhost:4000/graphql",
    fetchOptions: {
      credentials: "include",
    },
  });

  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
