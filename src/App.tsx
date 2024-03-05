import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query/ApiQuery.tsx";
import Home from "./components/Home.tsx";
import QuickResults from "./components/QuickResults.tsx";
import DetailPage from "./components/DetailPage.tsx";
import { ListProvider } from "./context/ListContext.tsx";
import ListsPage from "./components/ListsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ListProvider>
        <MainPage />
      </ListProvider>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "quickresults",
        element: <QuickResults />,
      },
      {
        path: "detail/:type/:id",
        element: <DetailPage />,
      },
      {
        path: "lists",
        element: <ListsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
