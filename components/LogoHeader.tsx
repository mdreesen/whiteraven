import React from "react";
import Image from 'next/image';

import styles from '../styles/home.module.css';

export default function LogoHeader() {

    const logo = (
        <Image
            src="/images/logo_raven_nobackground.png"
            fill={true}
            style={{ objectFit: "contain" }}
            alt="White Raven Icon of White Raven"
        />
    )
    return (
        <section>
            <div className={styles.sectionHome}>
                <span>White</span>
                <div>{logo}</div>
                <span>Raven</span>
            </div>
            <div className={styles.development}>
                <span className={styles.developmentText}>Development</span>
            </div>
        </section>
    )
}