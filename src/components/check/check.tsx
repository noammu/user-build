import styles from './check.module.scss';
import cx from 'classnames';

export interface CheckProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Check = ({ className }: CheckProps) => {
    return <div className={cx(styles.root, className)}>Check</div>;
};
