import { createBoard } from '@wixc3/react-board';
import { Check } from '../../../src/components/check/check';

export default createBoard({
    name: 'Check',
    Board: () => <Check />,
});
