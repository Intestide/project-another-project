document.addEventListener('DOMContentLoaded', (event) => {
    let bar = document.getElementById('progress-bar');
    let barContainer = document.getElementById('progress-bar-container');
    const modelViewer = document.querySelector('model-viewer');
    modelViewer.addEventListener('progress', (event) => {
        const progress = event.detail.totalProgress * 100;
        bar.style.width = progress + '%';
        bar.textContent = Math.round(progress) + '%';
    });
    
    modelViewer.addEventListener('load', () => {
        barContainer.style.display = 'none';
    });

    modelViewer.addEventListener('error', (error) => {
        console.error("oh no.");
        barContainer.style.display = 'none';
        document.getElementById('error').style.display = 'block';
    });
});