//
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


resizeSidebar()
displayMenu()




//function
function displayMenu() {
    const menu = $('.header-menubtn')
    const menuClose = $('.header-menubtn-close')
    const headerHelp = $('.header-help')

    menu.onclick = function() {
        menu.style.display = 'none'
        menuClose.style.display = 'block'
        headerHelp.style.display = 'flex'
    }
    menuClose.onclick = function() {
        menu.style.display = 'block'
        menuClose.style.display = 'none'
        headerHelp.style.display = 'none'
    }
}

function resizeSidebar() {
    const column = $('.mainspan')
    const sidebar = $('.sidebar')
    const header = $('.header')
    const mainview = $('.mainview')

    let left = column.offsetLeft +'px'
    sidebar.style.width = left
    header.style.left = left
    mainview.style.marginLeft = left

    // console.log([sidebar], [header])

    column.onmousedown = function() {
        document.addEventListener('mousemove', doDrag);
        document.addEventListener('mouseup', stopDrag);
        column.style.backgroundColor = '#b2b2b2'
    }
    function doDrag(e) {
        let newLeft = e.clientX
        if (newLeft < 100) newLeft = 100
        if (newLeft > 500) newLeft = 400
        newLeft += 'px'
        sidebar.style.width = newLeft
        header.style.left = newLeft
        column.style.left = newLeft
        mainview.style.marginLeft = newLeft
    }
    function stopDrag(e) {
        document.removeEventListener('mousemove', doDrag);
        document.removeEventListener('mouseup', stopDrag);
        column.style.backgroundColor = '#121212'
    }
}

