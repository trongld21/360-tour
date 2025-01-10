AFRAME.registerComponent('toggle-model', {
    init: function () {
        this.el.addEventListener('click', () => {
        const model = document.querySelector('#glb-model');
        const visible = model.getAttribute('visible');
        model.setAttribute('visible', !visible);
        });
    },
});