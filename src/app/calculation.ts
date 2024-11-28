const COMMON_PASSWORDS_FILE_PATH = "100k-most-used-passwords-NCSC.txt";
const commonPasswords = fetch(COMMON_PASSWORDS_FILE_PATH).then((response) => response.text());

export async function CalculateMaximumTime(password: string, speed: number) { // Speed in MH/s
    const totalHashes = CalculateTotalHashes(password);
    const timeInSeconds = totalHashes / (speed * 1000000);
    if ((await commonPasswords).split("\n").includes(password)) {
        return "< 0.01 seconds (common password)";
    }
    if (timeInSeconds < 0.01) {
        return "< 0.01 seconds";
    } else if (timeInSeconds < 60) {
        return timeInSeconds.toFixed(2).toString() + " seconds";
    } else if (timeInSeconds < 3600) {
        return (timeInSeconds / 60).toFixed(2).toString() + " minutes";
    } else if (timeInSeconds < 86400) {
        return (timeInSeconds / 3600).toFixed(2).toString() + " hours";
    } else if (timeInSeconds < 604800) {
        return (timeInSeconds / 86400).toFixed(2).toString() + " days";
    } else if (timeInSeconds < 2419200) {
        return (timeInSeconds / 604800).toFixed(2).toString() + " weeks";
    } else if (timeInSeconds < 29030400) {
        return (timeInSeconds / 2419200).toFixed(2).toString() + " months";
    } else if (timeInSeconds / 29030400 < 1.7 * 10 ** 106) {
        return (timeInSeconds / 29030400).toFixed(2).toString() + " years";
    } else {
        return "After the heat death of the universe";
    }
}

export function CalculateExpectedTime(password: string, speed: number) { // Speed in MH/s
    const totalHashes = CalculateTotalHashes(password);

    return(totalHashes / speed * 1000000 / 2);
}

function CalculateTotalHashes(password: string) {
    if (password.length === 0) {
        return 0;
    }

    if (ContainsMixedCase(password) && ContainsSpecialCharacter(password) && ContainsNumber(password)) {
        return 96 ** password.length;
    } else if (ContainsMixedCase(password) && ContainsSpecialCharacter(password) && !ContainsNumber(password)) {
        return 86 ** password.length;
    } else if (ContainsMixedCase(password) && !ContainsSpecialCharacter(password) && ContainsNumber(password)) {
        return 62 ** password.length;
    } else if (!ContainsMixedCase(password) && ContainsSpecialCharacter(password) && ContainsNumber(password)) {
        return 60 ** password.length;
    } else if (ContainsMixedCase(password) && !ContainsSpecialCharacter(password) && !ContainsNumber(password)) {
        return 52 ** password.length;
    } else if (!ContainsMixedCase(password) && ContainsSpecialCharacter(password) && !ContainsNumber(password)) {
        return 34 ** password.length;
    } else if (ContainsNumber(password)) {
        return 10 ** password.length;
    } else {
        return 26 ** password.length;
    }
}

function ContainsMixedCase(password: string) {
    return /[a-z]/.test(password) && /[A-Z]/.test(password);
}

function ContainsNumber(password: string) {
    return /[0-9]/.test(password);
}

function ContainsSpecialCharacter(password: string) {
    return /[^a-zA-Z0-9]/.test(password);
}