const store = Redux.createStore(reducer);

const face = store.getElementById('face');

// from https://texteditor.com/text-faces/
document.getElementById('happy').addEventListener('click', () => {
    store.dispatch({
        type: 'HAPPY',
        payload: '( ͡° ͜ʖ ͡°)'
    });

document.getElementById('angry').addEventListener('click', () => {
        store.dispatch({
            type: 'ANGRY',
            payload: 'ლಠ益ಠ)ლ'
            });
document.getElementById('sad').addEventListener('click', () => {
    store.dispatch({
        type: 'SAD',
        payload: '( ͡ಠ ʖ̯ ͡ಠ)'
    });

document.getElementById('surprised').addEventListener('click', () => {
    store.dispatch({
        type: 'SURPRISED',
        payload: '(＠´＿｀＠)'
    });

function renderFace() {
    face.innerHTML = store.getState().face;
}

renderFace()
store.subscribe(renderFace)
