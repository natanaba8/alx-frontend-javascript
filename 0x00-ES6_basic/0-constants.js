export function taskFirst() {
    var task = 'I prefer const when i can.';
    return task;
}
export function getLast() {
    return 'is okay'
}
export function taskNext() {
    var combination = 'But somtimes let';
    combination += getLast();

    return combination;
}