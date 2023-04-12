import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by;
      <Link href="https://github.com/g1dotcom" target="_blank">
        Gökhan Süle
      </Link>
    </footer>
  );
}

export default Footer;
