import { TYPE_COLORS } from "./constants";

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

export { getTypeName, getTypeStyle };
