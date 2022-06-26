import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import connectContract from "../utils/connectContract";
import "./wordcoin_query.js";

// RainbowKit + wagmi + Next.js +Rainbowkit + TailwindCSS 
//   Courtesy of camiinthisthang

// Implement once connectcontract.js is configured
// const rsvpContract = connectContract();
// const txn = await rsvpContract.youtFunction()

const rsvpContract = connectContract();
const txn = await rsvpContract.startevent();

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web3 Event Check-In</title>
      </Head>

      <main className={styles.main}>
  
        
        <h1 className={styles.title}>
        Web3 Event Check-In
        </h1>
        <ConnectButton />

          <a href="https://wagmi.sh" className={styles.card}>
            <h2>Check-in &rarr;</h2>
            <p>Learn how to interact with Ethereum.</p>
          </a>

          {/* <a
            href="https://github.com/rainbow-me/rainbowkit-examples"
            className={styles.card}
          >
            <h2>View Current Check-Ins &rarr;</h2>
            <p>View overall status of event attendees.</p>
          </a> */}
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;
