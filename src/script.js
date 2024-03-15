document.addEventListener('DOMContentLoaded', (event) => {
    let bar = document.getElementById('progress-bar');
    let barContainer = document.getElementById('progress-bar-container');
    let mainContainer = document.getElementById('container');
    const modelViewer = document.querySelector('model-viewer');
    mainContainer.style.height = '0';
    mainContainer.style.margin = '0';
    modelViewer.addEventListener('progress', (event) => {
        const progress = event.detail.totalProgress * 100;
        bar.style.width = progress + '%';
        bar.textContent = Math.round(progress) + '%';
    });
    
    modelViewer.addEventListener('load', () => {
        console.log('loaded');
        mainContainer.style.height = '100vh';
        barContainer.style.display = 'none';
        document.getElementById('fun').style.display = 'none';
        console.log(mainContainer.style.display);
    });

    modelViewer.addEventListener('error', (error) => {
        console.error("oh no.");
        mainContainer.style.display = 'none';
        barContainer.style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('fun').style.display = 'none';
    });
});