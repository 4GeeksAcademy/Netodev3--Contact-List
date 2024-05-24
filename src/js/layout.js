import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Contact from "./component/Contact";
import Form from "./component/Form";
import SingleContact from "./component/SingleContact";
import IndividualForm from "./component/IndividualForm";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactos" element={<Contact />} />
            <Route path="/formulario" element={<Form />} />
            <Route path="/contacto" element={<SingleContact />} />
            <Route path="/editar/:id" element={<IndividualForm />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
