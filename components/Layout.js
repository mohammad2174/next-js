import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Meta from './Meta'
import Nav from './Nav'

export default function Layout(props) {
    return (
        <>
            <Meta />
            <Nav />
            <div className={styles.container}>
                {props.children}
            </div>
        </>
    )
}
