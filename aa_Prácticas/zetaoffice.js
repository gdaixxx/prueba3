document.addEventListener("DOMContentLoaded", function() {
    const css = zetajs.uno.com.sun.star;
    const desktop = css.frame.Desktop.create(zetajs.getUnoComponentContext());

    let xModel = desktop.getCurrentFrame().getController().getModel();
    if (!xModel?.queryInterface(zetajs.type.interface(css.text.XTextDocument))) {
        xModel = desktop.loadComponentFromURL('file:///android/default-document/example.odt', '_default', 0, []);
    }

    // Ejemplo: Cambiar el color de cada párrafo en Writer a un color aleatorio
    const xText = xModel.getText();
    const xParaEnumeration = xText.createEnumeration();
    for (const xParagraph of xParaEnumeration) {
        const color = Math.floor(Math.random() * 0xFFFFFF);
        xParagraph.setPropertyValue("CharColor", color);
    }
});
