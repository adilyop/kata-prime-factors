
class primeFactore {

    generate(input) {
        let result = [];
        let element = 2;
        while (input > 1) {
            for (; input % element === 0; input = input / element) {
                result.push(element);
            }
            element += 1;
        }
        return result;
    }
}

module.exports = primeFactore;