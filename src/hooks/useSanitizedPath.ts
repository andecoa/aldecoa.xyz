import { useRouter } from "next/router";

const useSanitizedPath = (): string => {
  const router = useRouter();
  const pathname = router.pathname.split("?")[0];
  if (pathname === "/_error") return "/404";
  return pathname;
};

export default useSanitizedPath;
