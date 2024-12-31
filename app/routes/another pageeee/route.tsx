import styles from './route.module.scss';
import classNames from 'classnames';
import EspeonPng from '../../../src/assets/espeon.png';
import PikachuGifGif from '../../../src/assets/pikachu-gif.gif';
import BallPng from '../../../src/assets/ball.png';

export default function Anotherpageeee() {
    return (
        <div className={styles.div1}>
            <h1 className="largeFont">Large Font</h1>
            <div className={styles.div2}>
                <aside className={styles.aside1}>
                    <nav className={styles.nav1}>
                        <a href="/home">Home</a> | <a href="/projects">Projects</a> |{' '}
                        <a href="/about">About</a> | <a href="/contact">Contact Us</a>
                    </nav>
                </aside>
                <input type="checkbox" />
                <input type="radio" />
                <input type="file" />
                <select>
                    <option>Apple</option>
                    <option>Banana</option>
                    <option>Watermelon</option>
                </select>
                <img
                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                    alt=""
                    className={styles.img1}
                />
                <video
                    controls={true}
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"
                    className={styles.video1}
                />
            </div>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
            <div>
                <h1>Heading 1</h1>
            </div>
            <span>text</span>
            <button>Button</button>
            <textarea />
            <input type="number" />
            <article>
                <ol>
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                </ol>
                <a href="/">Link</a>
            </article>
            <form>
                <label>First name:</label>
                <br />
                <input type="text" />
                <br />
                <label>Last name:</label>
                <br />
                <input type="text" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <footer>
                <h1 className={styles.header1}>Heading 1</h1>
                <h2 className={styles.header1}>Heading 2</h2>
                <h3 className={styles.header1}>Heading 3</h3>
                <h4 className={styles.header1}>Heading 4</h4>
                <h5 className={styles.header1}>Heading 5</h5>
                <h6 className={classNames(styles.header1, styles.dana)}>Heading 6</h6>
            </footer>
            <div className={styles.grid}>
                <img src={EspeonPng} alt="" className={classNames(styles.img2, styles.img6)} />
                <img src={PikachuGifGif} className={styles.img5} />
                <img
                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                    alt=""
                    className={styles.img4}
                />
                <h2>Replace content</h2>
                <img src={BallPng} alt="" className={styles.img7} />
            </div>
            <div className={styles.heroImage}>
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_800/Frame%206.png"
                    alt=""
                    className={styles.heroImageImg}
                />
                <div className={styles.heroImageContentBox}>
                    <h1 className={styles.heroImageTitle}>Write a Title Here</h1>
                    <p className={styles.heroImageDescription}>
                        This is a space to welcome visitors to the site. Grab their attention with
                        copy that clearly states what the site is about, and add an engaging image
                        or video.
                    </p>
                    <button className={styles.heroImageExploreButton}>Explore</button>
                </div>
            </div>
        </div>
    );
}
