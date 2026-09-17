document.addEventListener('DOMContentLoaded', function() {
    // Resize della container PDF (simulato con CSS)
    const pdfContainer = document.querySelector('.pdf-container');
    if (pdfContainer) {
        // Imposta max/min dimensions via CSS class
        pdfContainer.style.maxWidth = '1920px';
        pdfContainer.style.maxHeight = '1080px';
        pdfContainer.style.minWidth = '400px';
        pdfContainer.style.minHeight = '200px';
    }
});
