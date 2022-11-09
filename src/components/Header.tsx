import styles from './Header.module.css';

import Logo from '../assets/rocket.svg';

export function Header() {
    return (
        <div className={styles.header}>
            <img src={Logo} alt="" />
            <h1>to<span>do</span></h1>
        </div>
    )
}