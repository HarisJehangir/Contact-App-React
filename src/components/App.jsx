import React from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />

      <Card
        name="Batman"
        image="https://live.staticflickr.com/65535/50653979963_71a8a40335_n.jpg"
        tel="+123 456 789"
        email="darkknight@gotham.com"
      />

      <Card
        name="Iron Man"
        image="https://live.staticflickr.com/65535/50653979988_3bf046c019_n.jpg"
        tel="+123 456 789"
        email="genius@billionaire.com"
      />

      <Card
        name="Superman"
        image="https://live.staticflickr.com/65535/50654718621_1e98fe0d93_n.jpg"
        tel="+123 456 789"
        email="strong@krypton.com"
      />
      <Card
        name="Black Panther"
        image="https://live.staticflickr.com/65535/50653979983_c30749a3f7_n.jpg"
        tel="+123 456 789"
        email="king@wakanda.com"
      />
      <Card
        name="Flash"
        image="https://live.staticflickr.com/65535/50654807862_35fa731c1f_n.jpg"
        tel="+123 456 789"
        email="insanely@fast.com"
      />
      <Card
        name="Spider Man"
        image="https://live.staticflickr.com/65535/50653979998_506be75574_n.jpg"
        tel="+123 456 789"
        email="swininging@nyc.com"
      />

      <Footer />
    </div>
  );
}

export default App;
