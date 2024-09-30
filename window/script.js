let isDragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;
let currentWindow = null;

document.querySelectorAll('.window-header').forEach(header => {
    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        currentWindow = e.target.parentElement;
        dragOffsetX = e.clientX - currentWindow.offsetLeft;
        dragOffsetY = e.clientY - currentWindow.offsetTop;
    });
});

document.addEventListener('mousemove', (e) => {
    if (isDragging && currentWindow) {
        currentWindow.style.left = (e.clientX - dragOffsetX) + 'px';
        currentWindow.style.top = (e.clientY - dragOffsetY) + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    currentWindow = null;
});

function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}
