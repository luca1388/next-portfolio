import styles from './napoleon.module.css';
import cn from 'classnames';

const NapoleonIcon = () => (
    <div className={styles.container}>
        <div className={styles.base}>
            <div className={styles.skills}>
                Webpack &middot; Gulp &middot; Nodejs <br />
                Gatsby &middot; Nextjs &middot; React Native <br />
                Javascript &middot; CSS &middot; HTML &middot; React <br />
            </div>
            <div className={styles.N}>
                <div className={styles.hat}></div>
                <div className={styles.body}>
                    {/* <div className={styles.handOfJustice}></div> */}
                    {/* <div className={styles.arm}></div>
                    <div className={styles.hand}></div> */}
                </div>
            </div>
            <div className={cn(styles.fourthStep, styles.step)}></div>
            <div className={cn(styles.thirdStep, styles.step)}></div>
            <div className={cn(styles.secondStep, styles.step)}></div>
            <div className={cn(styles.firstStep, styles.step)}></div>
        </div>
    </div>
);

export default NapoleonIcon;