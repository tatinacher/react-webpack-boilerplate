import { About, Main, NotFound, Song } from "./pages";

export const ROUTES = [
  { path: "/", component: Main, exact: true },
  { path: "/about", component: About, exact: true },
  { path: "/song/:id", component: Song, exact: true },
  {
    path: "*",
    component: NotFound,
  },
];
