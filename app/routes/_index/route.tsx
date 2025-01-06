import { LinksFunction, LoaderFunctionArgs, MetaFunction, redirect } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import styles from './_index.module.scss';
import styles0 from './route.module.scss';
import classNames from 'classnames';
import { Check } from '../../../src/components/check/check';
import { Form } from '@remix-run/react';
import PikachuGifGif from '../../../src/assets/pikachu-gif.gif';

export const action = async ({ request, params }: LoaderFunctionArgs) => {
    return redirect('/redirect');
};

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    const handleRefresh = () => {
        window.location.reload();
    };
    return (
        <div className={styles.root}>
            <div>dfdf</div>
            <Form method="post">
                <button type="submit" name="Go Home bruh" value="Go Home bruh">
                    Redirect to redirect :)
                </button>
            </Form>
            <button onClick={handleRefresh}>Refresh Page</button>
            <div className={classNames(styles0.div1, styles0.div2, styles0.div3, styles0.div4)}>
                <h1 className={styles0.header1}>Heading 1</h1>
                <h2 className={styles0.header2}>Headin2342342342342</h2>
            </div>
            <div className={styles0.div5}>Text</div>
            <h2 className={styles.title}>oujikjyhgjkh f gfme To App Homepage 🎉</h2>
            <span className={styles.paragraph}>
                Drag here elements from the Add Elements Panel
                <br /> and style them using the Styles panel
            </span>
            <div>
                <h1>Heading 1</h1>
            </div>
            <div>
                <img src={PikachuGifGif} alt="" className={styles0.img1} />
            </div>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Blank Starter';
    const description = 'Welcome to the Blank Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
