import styles from './refresh-button.module.scss';

export const RefreshButton = () => {
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <button onClick={handleRefresh}>
            Refresh Page
        </button>
    );
};
