import "./App.css";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import * as Realm from "realm-web";
import { useEffect, useState } from "react";

const app = new Realm.App({ id: "application-0-zwiku" });

function App() {
  const [user, setUser] = useState();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const login = async () => {
      // Authenticate anonymously
      const user = await app.logIn(Realm.Credentials.anonymous());
      setUser(user); // Connect to the database

      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const collection = mongodb.db("test").collection("project"); // Everytime a change happens in the stream, add it to the list of events

      for await (const change of collection.watch()) {
        setEvents((events) => [...events, change]);
      }
    };
    login();

    window.changeStream = events
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
