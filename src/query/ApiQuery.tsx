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

export function useBook(id: string) {
  return useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      let response = await fetch(`https://openlibrary.org/books/${id}.json`, {
        redirect: "follow",
      });

      if (response.status === 301) {
        console.log(response);
        response = await fetch(window.location.href);
      }

      return response.json();
    },
  });
}
