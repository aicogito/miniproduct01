import { HomeScreen } from "@/screens";
import { firebaseApp } from "@/shared";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeScreen />
    </main>
  );
}
