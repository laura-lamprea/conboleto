export function validateAndConvertArrayToNumber({ array }: { array: string[] }) {
    if (array.length !== 6) {
        return "Error: El array debe tener 6 elementos.";
    }
    for (let i = 0; i < array.length; i++) {
        if (isNaN(Number(array[i]))) {
            return "Error: El elemento " + i + " no es un número.";
        }
    }
    const number = parseInt(array.join(""));

    return number;
}
