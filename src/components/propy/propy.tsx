import type { AnotherOne } from '_codux/boards/propy/propy.board';
import styles from './propy.module.scss';
import cx from 'classnames';

export interface PropyProps {
    className?: string;
    str?: string;
    numnum?: number;
    nums?: number[];
    boolboo?: boolean;
    simpleObject?: {
        name: string;
        age: number;
    };
    compyObject?: AnotherOne;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PropyNewew = ({
    className,
    str,
    numnum,
    nums,
    boolboo,
    simpleObject,
    compyObject,
}: PropyProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <h1>Lets see all the stuff from props panel!</h1>
            <section>{str}</section>
            <section>{numnum}</section>
            <section>{nums?.map((n) => n)}</section>
            <section>{boolboo ? 'boolean is true =D' : 'boolean is false :('}</section>
            <section>
                <div>{simpleObject?.name}</div>
                <div>{simpleObject?.age}</div>
            </section>
            <section>
                <div>{compyObject?.name}</div>
                <div>{compyObject?.age}</div>
                <div>{compyObject?.bro?.name}</div>
                <div>{compyObject?.bro?.age}</div>
            </section>
        </div>
    );
};
