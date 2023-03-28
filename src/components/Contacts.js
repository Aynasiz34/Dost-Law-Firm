import React from "react";
import kursat from "../assets/kursat.webp";
import ibrahim from "../assets/ibrahim2.webp";
import classes from "./Contacts.module.css";
import ContactCard from "./ContactCard";

const Contacts = () => {
  return (
    <article className={classes.article}>
      <div className={classes.hero}>
        <h1>İLETİŞİM</h1>
      </div>
      <section className={classes.contacts}>
        <div>
          <ContactCard
            image={kursat}
            name="Av. Mustafa Kürşad GÜMÜŞKEMER"
            phone="0 539 364 29 11"
            mail="m.kursat@yandex.com"
          />
          <ContactCard
            image={ibrahim}
            name="Av. Halil İbrahim BOĞAR"
            phone="0 539 364 29 11"
            mail="m.kursat@yandex.com"
          />
        </div>
      </section>
    </article>
  );
};

export default Contacts;
