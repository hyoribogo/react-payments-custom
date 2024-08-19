import { createBrowserRouter } from "react-router-dom";
import { PATH } from "./constants";
import { CardAdd, CardComplete, CardList } from "@/pages";

const router = createBrowserRouter([
  {
    path: PATH.CARD_LIST,
    element: <CardList />,
  },
  {
    path: PATH.CARD_ADD,
    element: <CardAdd />,
  },
  {
    path: PATH.CARD_COMPLETE,
    element: <CardComplete />,
  },
]);

export default router;
