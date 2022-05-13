import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from './Nav'

export default function Layout(props) {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                {props.children}
            </div>
        </>
    )
}
