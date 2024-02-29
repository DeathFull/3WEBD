import { QueryClient, useQueries, useQuery } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export function useRecentChanges() {
  return useQueries({
    queries: [
      {
        queryKey: ["edit-book"],
        queryFn: async () => {
          const response = await fetch(
            "https://openlibrary.org/recentchanges/edit-book.json?limit=10",
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          return response.json();
        },
      },
      {
        queryKey: ["add-book"],
        queryFn: async () => {
          const response = await fetch(
            "https://openlibrary.org/recentchanges/add-book.json?limit=10",
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          return response.json();
        },
      },
      {
        queryKey: ["add-cover"],
        queryFn: async () => {
          const response = await fetch(
            "https://openlibrary.org/recentchanges/add-cover.json?limit=10",
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          return response.json();
        },
      },
    ],
  });
}

export function useBookOrWork(id: string) {
  return useQuery({
    queryKey: ["recent-changes", id],
    queryFn: async () => {
      let response = await fetch(`https://openlibrary.org${id}.json`);
      return response.json();
    },
  });
}

export function useQuickSearchBooks(query: string) {
  return useQuery({
    queryKey: ["quick-search-books", query],
    queryFn: async () => {
      let response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`,
      );
      return response.json();
    },
  });
}
