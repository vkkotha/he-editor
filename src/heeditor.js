import grapesjs from 'grapesjs';

const editor = grapesjs.init({
    autorender: 0,
    container: '#editor',
    fromElement: true,
    storageManager: { type: null},
    layerManager: {
        appendTo: '.layers-container'
    },
    panels: { 
        defaults: [{
            id: 'panel-top',
            el: '.panel__top'
        }, {
            id: 'basic-actions',
            el: '.panel__basic-actions',
            buttons: [{
                id: 'visibility',
                active: true, // active by default
                className: 'btn-toggle-borders',
                label: '<u>B</u>',
                command: 'sw-visibility', // Built-in command
        
            }, {
                id: 'export',
                className: 'btn-open-export',
                label: 'Exp',
                command: 'export-template',
                context: 'export-template', // For grouping context of buttons from the same panel
            }, {
                id: 'show-json',
                className: 'btn-show-json',
                label: 'JSON',
                context: 'show-json',
                command(editor) {
                    editor.Modal.setTitle('Components JSON')
                        .setContent(`<textarea style="width:100%; height: 250px;">
                            ${JSON.stringify(editor.getComponents())}
                        </textarea>`)
                        .open();
                }
            }]
        },{
            id: 'layers',
            el: '.panel__right',
            resizable: {
                maxDim: 350,
                minDim: 200,
                tc: 0,
                cl: 1,
                cr: 0,
                bc: 0,
                keyWidth: 'flex-basis'
            }
        }]
    }
});

export default editor;