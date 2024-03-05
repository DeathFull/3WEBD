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

export function useBookOrWork(type: string, id: string) {
  return useQuery({
    queryKey: ["book-or-work", id],
    queryFn: async () => {
      let response = await fetch(`https://openlibrary.org/${type}/${id}.json`);
      return response.json();
    },
  });
}

export function useQuickSearchBooks(query: string, currentPage: number) {
  return useQuery({
    queryKey: ["quick-search-books", query, currentPage],
    queryFn: async () => {
      let response = await fetch(
        `https://openlibrary.org/search.json?q=${query}&page=${currentPage}`,
      );
      return response.json();
    },
  });
}
