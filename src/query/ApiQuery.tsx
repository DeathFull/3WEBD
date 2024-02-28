import { QueryClient, useQuery } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export function useRecentChanges() {
  return useQuery({
    queryKey: ["recentChanges"],
    queryFn: async () => {
      const response = await fetch(
        "https://openlibrary.org/recentchanges.json?limit=10",
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
}
