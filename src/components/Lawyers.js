import React from "react";
import { motion } from "framer-motion";
import kursat from "../assets/kursat.webp";
import ibrahim from "../assets/ibrahim2.webp";
import classes from "./Lawyers.module.css";

const Lawyers = () => {
  return (
    <article className={classes.article}>
      <div className={classes.hero}>
        <h1>EKİBİMİZ</h1>
      </div>
      <div className={classes.container}>
        <motion.section
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          // viewport={{once: true}}
          transition={{
            duration: 1.2,
          }}
          className={classes["img-container"]}
        >
          <img src={kursat} alt="Kürşat Gümüşkemer" />
          <h2>Av. Arb. Mustafa Kürşad GÜMÜŞKEMER</h2>
        </motion.section>
        <motion.section
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          // viewport={{once: true}}
          transition={{
            duration: 1.2,
          }}
          className={classes.info}
        >
          <div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
          </div>
        </motion.section>
      </div>
      <div className={classes.container}>
        <motion.section
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          // viewport={{once: true}}
          transition={{
            duration: 1.2,
          }}
          className={classes["img-container"]}
        >
          <img src={ibrahim} alt="H. İbrahim BOĞAR" />
          <h2>Av. Arb. Halil İbrahim Boğar</h2>
        </motion.section>
        <motion.section
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          // viewport={{once: true}}
          transition={{
            duration: 1.2,
          }}
          className={classes.info}
        >
          <div>
            <p>
              2014 Yılında ERZİNCAN ÜNİVERSİTESİ HUKUK FAKÜLTESİ'ni bitirerek
              mezun oldu. Kahramanmaraş Barosunda staj Eğitimini tamamlayıp 2015
              yılında Avukatlık Ruhsatnamesi alarak,{" "}
              <span className={classes.italic}>
                TİCARİ DAVALAR, İŞÇİ - İŞVEREN UYUŞMAZLIKLARI, İCRA İFLAS
                HUKUKU, TAŞINMAZ HUKUKU, TÜKETİCİ UYUŞMAZLIKLARI , FİKRİ SİNAİ
                PATENT UYUŞMAZLIKLARI,SÖZLEŞME HUKUKU, AİLE HUKUKU, KIYMETLİ
                EVRAK HUKUKU
              </span>
              ve daha birçok alanda avukatlık faaliyeti gerçekleştirmektedir.
            </p>
            <h3>
              TÜRKİYE BAROLAR BİRLİĞİ EĞİTİM MERKEZİNİN VERMİŞ OLDUĞU EĞİTİMLER
              KAPSAMINDA;
            </h3>
            <ul>
              <li>
                03/10/2015 TARİHİNDE{" "}
                <span className={classes.bold}>KAMULAŞTIRMA HUKUKU</span>
              </li>
              <li>
                07/04/2018 TARİHİNDE{" "}
                <span className={classes.bold}>
                  İŞ MEVZUATİNDAN KAYNAKLI HESAPLAMALAR
                </span>
              </li>
              <li>
                23/10/2018 TARİHİNDE{" "}
                <span className={classes.bold}>
                  AİLE VE MİRAS MEVZUATİNDAN KAYNAKLANAN HESAPLAMALAR
                </span>
              </li>
              <li>
                18/04/2019{" "}
                <span className={classes.bold}>
                  TARİHİNDE ARABULUCULUK EĞİTİMİ
                </span>
              </li>
              <li>
                19/10/2019 TARİHİNDE{" "}
                <span className={classes.bold}>BİLİRKİŞİLİK TEMEL EĞİTİMİ</span>
              </li>
              <li>
                21/12/2019 TARİHİNDE{" "}
                <span className={classes.bold}>
                  TEORİ VE UYGULAMA AÇISINDAN KİŞİSEL VERİLERİN KORUNMASI
                </span>
              </li>
            </ul>
            <p>
              İleri eğitim programlarını tamamlamıştır. Ayrıca Adalet Bakanlığı
              Tarafından Gerçekleştirilen Arabuluculuk Sınavını Kazanarak 2020
              yılında 14843 sicil numarası ile arabuluculuk faaliyetine
              başlamıştır. Halen İŞ HUKUKU, TÜKETİCİ HUKUKU VE TİCARİ
              UYUŞMAZLIKLARDA{" "}
              <span className={classes.bold}>Uzman Arabulucu</span> olarak görev
              yapmaktadır.
            </p>
          </div>
        </motion.section>
      </div>
    </article>
  );
};

export default Lawyers;
