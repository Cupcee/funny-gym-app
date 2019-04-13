export function dateConversion() {
    const date = new Date().getDay();
    if (date === 0) {
        return "SUN";
    } else if (date === 1) {
        return "MON";
    } else if (date === 2) {
        return "TUE";
    } else if (date === 3) {
        return "WED";
    } else if (date === 4) {
        return "THU";
    } else if (date === 5) {
        return "FRI";
    } else if (date === 6) {
        return "SAT";
    }
}