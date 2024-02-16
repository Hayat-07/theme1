import Image from "next/image";
import styles from "./page.module.css";
import Section1 from "@/app/components/Section1";
import Section2 from "@/app/components/Section2";
import Header from "./components/Header";


export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      
   
    </main>
  );
}
