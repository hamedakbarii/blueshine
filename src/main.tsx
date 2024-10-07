import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/carousel/styles.css";
import { BrowserRouter } from "react-router-dom";

import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MantineProvider>
);
