const cursor = document.getElementById('cursor')

document.addEventListener('mousemove', (e) => {
    let timeOut;
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + 'px'
    cursor.style.left = x + 'px'
    cursor.style.display = 'block'
    
    const stopAnimation = () => cursor.style.display = 'none'
    clearTimeout(timeOut)
    timeOut = setTimeout(stopAnimation,10000)

    // off Screen
    document.addEventListener('mouseout',()=>cursor.style.display='none')
})