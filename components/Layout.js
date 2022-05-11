import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Layout(props) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}
