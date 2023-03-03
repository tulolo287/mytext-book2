import Home from "../pages/home/Home";
import About from "../pages/About";
import Books from "../pages/Books";
import BookItem from "../pages/BookItem";
import Categories from "../pages/Categories";
import Checkout from "../pages/Checkout";
import LoginPage from "../pages/LoginPage";
import React from "react";

interface IRoute {
  name: string;
  path: string;
  element: React.ComponentType;
}
export const pages: IRoute[] = [
  { name: "Home", path: "/", element: Home },
  { name: "Books", path: "/books", element: Books },
  { name: "Book item", path: "/books/:id", element: BookItem },
  { name: "About", path: "/about", element: About },
  { name: "Checkout", path: "/checkout", element: Checkout },
  { name: "Login", path: "/login", element: LoginPage }
];
export const categories: IRoute[] = [
  { name: "Categories", path: "/categories", element: Categories },
  { name: "Books", path: "/books", element: Books }
];
