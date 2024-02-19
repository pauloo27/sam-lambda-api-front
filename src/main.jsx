import "./index.css";
import "boxicons";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ListIngredients } from "./pages/ingredients/List";
import { ListMenu } from "./pages/menu/List";
import { CreateOrder } from "./pages/orders/Create";
import { ListOrders } from "./pages/orders/List";
import { CreateMenuItem } from "./pages/menu/Create";
import { EditMenuItem } from "./pages/menu/Edit";
import { NotFound } from "./pages/NotFound";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const ContentContainer = styled.div`
  padding: 50px;
`;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainContainer>
          <Header />

          <ContentContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ingredients" element={<ListIngredients />} />
              <Route path="/orders" element={<ListOrders />} />
              <Route path="/orders-create" element={<CreateOrder />} />
              <Route path="/menu" element={<ListMenu />} />
              <Route path="/menu-create" element={<CreateMenuItem />} />
              <Route path="/menu-edit/:id" element={<EditMenuItem />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ContentContainer>

          <Footer />
        </MainContainer>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
