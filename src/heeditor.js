import grapesjs from 'grapesjs';

const editor = grapesjs.init({
    autorender: 1,
    container: '#editor',
    fromElement: true,
    height: '100%',
    width: 'auto',
    storageManager: { type: null},
    panels: { defaults: [] }
});

export default editor;