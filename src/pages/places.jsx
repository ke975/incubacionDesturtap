import React from "react";
import { Contact } from "../components/Contact";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import { Card } from "../components/Card";

export function Places() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div className="banneer">
        <div className="contenido container">
          <h2>¿Encuentra tu Proxima Aventura?</h2>
        </div>
      </div>

      <Card />

      <section>
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
