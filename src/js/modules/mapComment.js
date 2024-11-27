const mapComment = () => {
    // подсказка для карты
    const mapTitle = document.createElement('div'); 
    mapTitle.className = 'mapTitle';
    mapTitle.textContent = 'Для активации карты нажмите по ней';
    
    wrapMap.appendChild(mapTitle);

    wrapMap.addEventListener('click', () => {
        mapTitle.removeAttribute('style');
        mapTitle.remove();
    });

    wrapMap.addEventListener('mousemove', (event) => {
        mapTitle.style.display = 'block';
        if (event.offsetY > 10) {
            mapTitle.style.top = `${event.offsetY + 20}px`;
        }
        if (event.offsetX > 10) {
            mapTitle.style.left = `${event.offsetX + 20}px`;
        }
    });

    wrapMap.addEventListener('mouseleave', () => {
        mapTitle.style.display = 'none';
    });
};

export default mapComment;