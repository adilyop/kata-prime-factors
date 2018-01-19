
class primeFactore {

    generate(input) {
        let result = [];
        if (input > 1) {
            while (input % 2 === 0) {
                result.push(2);
                input = input / 2;
            }
            if (input > 1)
                result.push(input)
        }
        return result;
    }
}

module.exports = primeFactore;