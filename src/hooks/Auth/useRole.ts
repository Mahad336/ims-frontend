import { useQuery } from "@tanstack/react-query";
import jwtDecode from "jwt-decode";
import { useCookies } from "react-cookie";

export function useRole() {
  const [{ jwt }] = useCookies();

  const { data } = useQuery(
    ["role"],
    () => {
      const decodedToken: any = jwtDecode(jwt || "");
      return decodedToken;
    },
    {
      enabled: !!jwt,
      cacheTime: Infinity,
    }
  );

  return data.role.name;
}
