import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import Search from "./pages/Search";
import CreatePost from "./pages/CreatPost";
import Connections from "./pages/connnections";
import ChatBox from "./pages/ChatBox";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import { useUser } from "@clerk/react";

function App() {
  const { user } = useUser();
  return (
    <>
      <Routes>
        <Route path="/" element={!user ? <Login /> : <Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:userId" element={<ChatBox />} />
          <Route path="connections" element={<Connections />} />
          <Route path="search" element={<Search />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
