import { createBoard } from '@wixc3/react-board';
import { PropyNewew } from '../../../src/components/propy/propy';

export interface AnotherOne {
    name: string;
    bro: AnotherOne | undefined;
    age: number;
}

const str = 'stringgg';
const numnum = 55;
const nums = [1, 2, 3, 4, 5];
const boolboo = true;
const person = {
    name: 'yossi',
    age: 42,
};

let brother: AnotherOne | undefined = undefined;

const sister: AnotherOne = {
    name: 'sista',
    bro: brother,
    age: 20,
};

brother = {
    name: 'brotha',
    bro: sister,
    age: 22,
};

export default createBoard({
    name: 'Propy',
    Board: () => (
        <PropyNewew
            str={str}
            numnum={numnum}
            nums={nums}
            boolboo={boolboo}
            simpleObject={person}
            compyObject={brother}
        />
    ),
});
