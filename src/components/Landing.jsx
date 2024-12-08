import styles from './landing.module.css'


function Landingpage() {
    return(
        <>
        <section className={`${styles.body} container`}>
            <article className={styles.headline}>
                <h1>Elevate Your Beauty Routine to New Heights!</h1>
                <h2>Start exploring and redefine your glow today!</h2>
            </article>

            <article className={styles.imagery}>
                imagery
            </article>

            <article className={styles.customer_rating}>
                <aside>
                    <img src="public\Images\Reviewer 1.jpg
                    " />
                    <img src="" alt="svg of the start ratings" />
                </aside>

                <aside>
                    <img src="" alt="image of the customer" />
                    <img src="" alt="svg of the start ratings" />
                </aside>

                <aside>
                    <img src="" alt="image of the customer" />
                    <img src="" alt="svg of the start ratings" />
                </aside>
            </article>

            <article className={styles.discounts}>
                <h1>Discounts & offers</h1>
                <p>Glow-Up Deal – Get 15% off on your first order!</p>
                <p>Exclusive Weekend Flash Sale – Flat 25% off on orders over $50 (Valid this weekend only).</p>
            </article>

            <article className={styles.qualities}>
                <img src="" alt="quality 1" />
                <img src="" alt="quality 2" />
                <img src="" alt="quality 3" />
            </article>
        </section>

        <section className={styles.trusted_companies}>
                <img src="" alt="brand 1" />
                <img src="" alt="brand 2" />
                <img src="" alt="brand 3" />
                <img src="" alt="brand 4" />
                <img src="" alt="brand 5" />
                <img src="" alt="brand 6" />
        </section>
        </>
    )
} 

export default Landingpage;