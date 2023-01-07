//
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


resizeSidebar()
displayMenu()

$('#home').onclick = function(e) {
    if (!this.baseURI.match('home')) {
        location.href = '/'
    }
}

$('#search').onclick = function(e) {
    location.href = '/search.html'

}

$('#library').onclick = function(e) {
    let title = 'Thưởng thức Thư viện'
    let msg = 'Đăng nhập để xem tất cả bài hát, podcast, nghệ sĩ và playlist bạn đã lưu trong Thư viện.'
    displayNotify(title, msg, this.offsetLeft+this.offsetWidth, this.offsetTop)
    e.stopPropagation()
}

$('#createPlaylist').onclick = function(e) {
    let title = 'Tạo danh sách phát'
    let msg = 'Đăng nhập để tạo và chia sẻ playlist.'
    displayNotify(title, msg, this.offsetLeft+this.offsetWidth, this.offsetTop)
    e.stopPropagation()
}

$('#likeSongs').onclick = function(e) {
    let title = 'Thưởng thức Bài hát đã thích'
    let msg = 'Đăng nhập để xem tất cả bài hát bạn đã thích trong một danh sách phát đơn giản.'
    displayNotify(title, msg, this.offsetLeft+this.offsetWidth, this.offsetTop)
    e.stopPropagation()
}
document.onclick = function(e) {
    $('.notify').style.display = 'none'
}


//
for (let link of $$('a[name="center"]')) {
    link.onclick = function(e) {
        e.preventDefault()
        //get database
        let data = getDatabase()
        //render to web
        renderMainview(data)
    }
}
for (let link of $$('a[name="playlist"]')) {
    link.onclick = function(e) {
        e.preventDefault()
        //get database
        let data = getDatabase()
        //render to web
        renderMainview(data)
    }
}


//function
function getDatabase() {
    //fetch to get data
    let data = [
        
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Piano',
            content: 'Relax and indulge with beautiful piano pieces'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Piano',
            content: 'Relax and indulge with beautiful piano pieces'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Piano',
            content: 'Relax and indulge with beautiful piano pieces'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Piano',
            content: 'Relax and indulge with beautiful piano pieces'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Piano',
            content: 'Relax and indulge with beautiful piano pieces'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Piano',
            content: 'Relax and indulge with beautiful piano pieces'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Piano',
            content: 'Relax and indulge with beautiful piano pieces'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Piano',
            content: 'Relax and indulge with beautiful piano pieces'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Piano',
            content: 'Relax and indulge with beautiful piano pieces'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Piano',
            content: 'Relax and indulge with beautiful piano pieces'
        },
    ]

    return data
}
function getDatabase2() {
    //fetch to get data
    let data = [
        
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Piano',
            bgc: '#3A856B'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Dành cho bạn',
            bgc: '#1E3264'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Bảng xếp hạng',
            bgc: '#8E68AB'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Mới phát hành',
            bgc: '#E9485B'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Khám phá',
            bgc: '#8E68AB'
        },

        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Sự kiện trực tiếp',
            bgc: '#7357FC'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Nhạc Việt',
            bgc: '#B49BC8'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'K-Pop',
            bgc: '#418B0D'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Pop',
            bgc: '#EC52A5'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Tâm trạng',
            bgc: '#9CF1E1'
        },

        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Không gian lãng mạn',
            bgc: '#8D2832'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Pride',
            bgc: '#D7F37D'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Ở nhà',
            bgc: '#0D74EC'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Gia đình',
            bgc: '#477D95'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Thập niên',
            bgc: '#BA5E23'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Piano',
            bgc: '#3A856B'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Dành cho bạn',
            bgc: '#1E3264'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Bảng xếp hạng',
            bgc: '#8E68AB'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Mới phát hành',
            bgc: '#E9485B'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Khám phá',
            bgc: '#8E68AB'
        },

        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Sự kiện trực tiếp',
            bgc: '#7357FC'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Nhạc Việt',
            bgc: '#B49BC8'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'K-Pop',
            bgc: '#418B0D'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Pop',
            bgc: '#EC52A5'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Tâm trạng',
            bgc: '#9CF1E1'
        },

        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Không gian lãng mạn',
            bgc: '#8D2832'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Pride',
            bgc: '#D7F37D'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Ở nhà',
            bgc: '#0D74EC'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Gia đình',
            bgc: '#477D95'
        },
        {
            url: '/asset/book/04biakhoaluantnthumbimage.jpg',
            title: 'Thập niên',
            bgc: '#BA5E23'
        },
        
        
    ]

    return data
}
function renderMainview(data) {

    if (data.length) {
        let html = '<div class="mainview__item"><div class="mainview__content">'
        for (let obj of data) {
    
            let element = `<a class="mainview__content-item">
                                <img src="${obj.url}" alt="">
                                <h5>${obj.title}</h5>
                                <p>${obj.content}</p>
                                <i class="icofont-play-alt-1"></i>
                            </a>`
            html += element
        }
        html += '</div></div>'
        
        $('#mainview').innerHTML = html

    }
}
function renderSearch(data) {
    if (data.length) {
        let html = ''
        for (let obj of data) {
            let element = `<a class="mainview__content-search" href="/"  style="background-color: ${obj.bgc};">
                                <ul class="mainview__content-content">
                                    <h3>${obj.title}</h3>
                                    <li class="frame"><img src="${obj.url}" alt=""></li>
                                </ul>
                            </a>`
            html += element
        }

        $('.mainview__content').innerHTML = html
    }
}
function displayNotify(title, msg, x, y) {
    let html = `<h3 class="notify__title">${title}</h3>
                <p class="notify__msg">${msg}</p>
                <ul class="notify__controls">
                    <a class="btn" href="">Để sau</a>
                    <a class="btn white" href="/asset/child/signin.html">Đăng nhập</a>
                </ul>`
    const notifyElement = $('.notify')
    notifyElement.style.left = x +20 + 'px'
    notifyElement.style.top = y + 'px'
    notifyElement.innerHTML = html
    notifyElement.style.display = 'block'
}
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

