import React from "react";
import FieldCard from "./FieldCard";
import bankruptcy from "../assets/bankruptcy.webp";
import family from "../assets/family.webp";
import criminal from "../assets/criminal.webp";
import realestate from "../assets/realestate.webp";
import trade from "../assets/trade.webp";
import inheritance from "../assets/inheritance.webp";
import {
  ICRA_IFLAS_HUKUKU,
  AILE_HUKUKU,
  CEZA_HUKUKU,
  GAYRIMENKUL_HUKUKU,
  TICARET_HUKUKU,
  MIRAS_HUKUKU,
} from "../assets/helpers";
import classes from "./Fields.module.css";

const Fields = () => {
  return (
    <article className={classes.article}>
      <div className={classes.hero}>
        <h1>ALANLARIMIZ</h1>
      </div>
      <section className={classes.branches}>
        <FieldCard
          title="İcra ve İflas Hukuku"
          image={bankruptcy}
          text={ICRA_IFLAS_HUKUKU}
        />
        <FieldCard title="Aile Hukuku" image={family} text={AILE_HUKUKU} />
        <FieldCard
          title="Gayrımenkul Hukuku"
          image={realestate}
          text={GAYRIMENKUL_HUKUKU}
        />
        <FieldCard title="Ticaret Hukuku" image={trade} text={TICARET_HUKUKU} />
        <FieldCard title="Ceza Hukuku" image={criminal} text={CEZA_HUKUKU} />
        <FieldCard
          title="Miras Hukuku"
          image={inheritance}
          text={MIRAS_HUKUKU}
        />
      </section>
    </article>
  );
};

export default Fields;
