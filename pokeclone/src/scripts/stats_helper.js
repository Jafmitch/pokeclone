import { STAT_BOUNDS, STAT_NAMES, TYPE_COLORS } from "./constants";

function getTypeName(types) {
    if (types.length > 1) types.join("-").toUpperCase();
    else if (types.length > 0) types[0].toUpperCase();
    else return "(none)";
}
function getTypeStyle(type) {
    let color = TYPE_COLORS[type.toLowerCase()];
    if (color) return { color: color };
    else return {};
}
function isValid(value, name) {
    if (value) {
        name = name.toLowerCase();
        if (name === "name") return isValidName(value);
        else if (name === "type") return isValidType(value);
        else if (STAT_NAMES.includes(name)) return isValidStat(value);
        else return false;
    } else return false;
}
function isValidName(name) {
    return typeof name === "string";
}

function isValidType(type) {
    return typeof type === "object" && type.length > 0;
}

function isValidStat(stat) {
    return (
        typeof stat === "number" &&
        stat >= STAT_BOUNDS.MIN &&
        stat <= STAT_BOUNDS.MAX
    );
}

export { getTypeName, getTypeStyle, isValid };
