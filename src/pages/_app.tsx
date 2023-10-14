import { auth } from "@/config/firebase";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    console.log("실행!");
    auth.currentUser ? router.push("/") : router.push("/login");
  }, [auth.currentUser]);

  return <Component {...pageProps} />;
}
