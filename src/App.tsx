import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query/ApiQuery.tsx";
import Home from "./components/Home.tsx";
import QuickResults from "./components/QuickResults.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "quickresults",
        element: <QuickResults />,
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
