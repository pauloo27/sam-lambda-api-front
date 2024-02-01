import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ListIngredients } from "./pages/ListIngredients";
import { NotFound } from "./pages/NotFound";
import styled from "styled-components";

const ContentContainer = styled.div`
  padding: 50px;
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <ContentContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredients" element={<ListIngredients />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  </React.StrictMode>
);
