const button = document.getElementById('button')
const toast = document.getElementById('toasts')

const messeges = [
    'Messagem 1',
    'Messagem 2',
    'Messagem 3',
    'Messagem 4',
]
const types = ['info', 'sucess','error']
button.addEventListener('click', () => 
    createNotification())

function createNotification (message = null, type = null){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType ())

    notif.innerText = message ? message : getRandomMessege()

    toast.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    },3000)
}

function getRandomMessege (){
    return messeges[Math.floor(Math.random()*messeges.length)]
}

function getRandomType (){
    return types[Math.floor(Math.random()*types.length)]
}