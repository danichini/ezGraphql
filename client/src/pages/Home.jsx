import React from "react";
import AddClientsModal from "../components/AddClientsModal";
import Projects from "../components/Projects";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientsModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}