export default function getNeightborhoodsList() {
    this.sanFranciscoNeightborhoods = ['SOMA', 'Union Square'];

    const self = this;
    this.addNeightborhood = function add(newNeighborhood) {
        self.sanFranciscoNeightborhoods.push(newNeighborhood);
        return self.sanFranciscoNeightborhoods;
    }
}