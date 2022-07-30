const openUp = document.getElementById('silka')
const closeUp = document.getElementById('close_up')
const popUp = document.getElementById('pole_voda')
const all = document.getElementById('all')

openUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
})

closeUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})



const list = document.querySelector('.list')
const items = document.querySelectorAll('.doctor-item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        switch (targetId) {
            case 'all':
                items.forEach(item => {
                    if (item.classList.contains('doctor-item')) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                })


                break
            case 'ryno':
                items.forEach(item => {
                    if (item.classList.contains('general')) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                })
                break
            case 'surgeons':
                items.forEach(item => {
                    if (item.classList.contains('surgeon')) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                })
                break
            case 'specialist':
                items.forEach(item => {
                    if (item.classList.contains('speciality')) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                })
                break
            case 'dentist':
                items.forEach(item => {
                    if (item.classList.contains('dents')) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                })
                break
            case 'pediatr':
                items.forEach(item => {
                    if (item.classList.contains('peditt')) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                })
                break
        }
    })
}

filter();
