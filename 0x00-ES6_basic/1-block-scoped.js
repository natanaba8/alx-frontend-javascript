export default function taskBlock(trueorFalse) {
    const task = false;
    const task2 = true;

    if (trueorFalse) {
        // eslint-disable-next-line no-unused-vars, no-shadow
        const task = true;
        // eslint-disable-next-line no-unused-vars, no-shadow
        const task2 = false;
    }

    return [task, task2];
}