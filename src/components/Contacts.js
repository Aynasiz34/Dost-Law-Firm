import React from "react";
import kursat from "../assets/kursat.webp";
import classes from "./Contacts.module.css";
import ContactCard from "./ContactCard";

const Contacts = () => {
  return (
    <article className={classes.article}>
      <div className={classes.hero}>
        <h1>İLETİŞİM</h1>
      </div>
      <section className={classes.contacts}>
        <ContactCard
          image={kursat}
          name="Av. Mustafa Kürşad GÜMÜŞKEMER"
          phone="0 539 364 29 11"
          mail="m.kursat@yandex.com"
        />
      </section>
    </article>
  );
};

export default Contacts;
