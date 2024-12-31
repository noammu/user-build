import { createBoard } from '@wixc3/react-board';
import { RefreshButton } from '../../../src/components/refresh-button/refresh-button';

export default createBoard({
    name: 'RefreshButton',
    Board: () => <RefreshButton />,
});
