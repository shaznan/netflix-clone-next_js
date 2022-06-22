import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingScreen from './LandingScreen'

export default function Home() {
  return (
    <div className={styles.container}>
      <LandingScreen />
    </div>
  )
}
