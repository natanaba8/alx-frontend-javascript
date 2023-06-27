export default function taskBlock(trueorFalse) {
    const task = false;
    //that the variables aren’t overwritten inside the conditional block.
    const task2 = true;
    //that the variables aren’t overwritten inside the conditional block.

    if (trueorFalse) {
        const task = true;
        //that the variables aren’t overwritten inside the conditional block.
        const task2 = false;
        //that the variables aren’t overwritten inside the conditional block.
    }

    return [task, task2];
}

