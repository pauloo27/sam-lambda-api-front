import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ListIngredients } from "./pages/ingredients/List";
import { ListMenu } from "./pages/menu/List";
import { NotFound } from "./pages/NotFound";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const ContentContainer = styled.div`
  padding: 50px;
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContainer>
        <Header />

        <ContentContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ingredients" element={<ListIngredients />} />
            <Route path="/menu" element={<ListMenu />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContentContainer>

        <Footer />
      </MainContainer>
    </BrowserRouter>
  </React.StrictMode>
);
