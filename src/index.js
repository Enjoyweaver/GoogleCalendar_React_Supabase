import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; // Update the import path if needed
import reportWebVitals from "./reportWebVitals";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

const supabase = createClient(
  "https://stdtxdmnnuvqxssimiiv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0ZHR4ZG1ubnV2cXhzc2ltaWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0NTUwMzMsImV4cCI6MjAyMTAzMTAzM30.wrA196n-vlsJHowcMBktfqZsBzTeL4RTnO1z75wgmkE"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
