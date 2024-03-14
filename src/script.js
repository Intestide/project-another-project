document.addEventListener('DOMContentLoaded', (event) => {
    const modelViewer = document.querySelector('model-viewer');
    modelViewer.addEventListener('progress', (event) => {
        const progress = event.detail.totalProgress * 100;
        document.getElementById('progress-bar').style.width = progress + '%';
        document.getElementById('progress-bar').textContent = Math.round(progress) + '%';
    });
    
    modelViewer.addEventListener('load', () => {
        document.getElementById('progress-bar-container').style.display = 'none';
    });

    modelViewer.addEventListener('error', (error) => {
        console.error("oh no.");
        document.getElementById('progress-bar-container').style.display = 'none';
        document.getElementById('error').style.display = 'block';
    });
});