import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App";
import { Home, Login, Profile, Register, Single, Write } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<h1>Walang tao here beh</h1>} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<Home />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={<Write />} />
        <Route path="/profile" element={<Profile/>} />
      </Route>
    </>
  )
);

export default router;
