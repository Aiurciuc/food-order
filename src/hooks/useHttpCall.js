import { useEffect, useState } from "react";

export function useHttpCall(
  url,
  headers = {},
  errorMessage = "An error occurred"
) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function call() {
      setIsLoading(true);
      try {
        const response = await fetch(url, headers);
        const json = await response.json();
        setData(json);
      } catch (e) {
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }
    call();
  }, []);

  return { data, isLoading, error };
}
