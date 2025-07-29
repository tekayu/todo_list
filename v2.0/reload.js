export default function reload(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}