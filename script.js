// Heart Icon Functionality
const hearts = document.querySelectorAll('.heart-icon');
let heartClicked = 0;
for(const heart of hearts){
    heart.addEventListener('click', function(){
    heartClicked = heartClicked + 1;
    document.getElementById('heart-count').innerText = heartClicked;
    })
}
// call Button click functionality
const callbtns = document.querySelectorAll('.call-btn');
for(const callbtn of callbtns){
    callbtn.addEventListener('click', function(){
        let coinNumber= parseInt(document.getElementById('coin').innerText);
    let newcoinNumber = coinNumber - 20;
    const card = callbtn.parentNode.parentNode;
    const serviceNumber = card.querySelector('.service-number').innerText;
    const serviceName = card.querySelector('.service-name').innerText;
    const serviceDept = card.querySelector('.service-dept').innerText;
    if(coinNumber >= 20){
        document.getElementById('coin').innerText = newcoinNumber;
        
        // Call history add
        const history = document.getElementById('history');
        const now = new Date();
        let time = now.toLocaleTimeString();
       const creatDiv = document.createElement('div');
       creatDiv.innerHTML = `<div class="history bg-[#fafafa] p-3 mt-5">
                    <div class="flex items-center justify-between">
                        <div class="">
                            <h2 class="font-semibold text-[16px]">${serviceName}</h2>
                            <h3>${serviceNumber}</h3>
                        </div>
                        <div>${time}</div>
                    </div>
                </div>`
                history.appendChild(creatDiv);
        alert(`📞 Calling ${serviceName} ${serviceNumber} ...`);

    }else{alert('❌ You have no Sufficient Balance, You need minimum 20 Coins to make a call')}

    })
}

// Copy Button functionality
let copyClicked = 0;
btnCopy = document.querySelectorAll('.copy-btn');
for(let copy of btnCopy){
    copy.addEventListener('click',function(){
    copyClicked = copyClicked + 1;
    document.getElementById('copy-count').innerText = copyClicked;
    const card = copy.parentNode.parentNode;
    const serviceNumber = card.querySelector('.service-number').innerText;
    navigator.clipboard.writeText(serviceNumber);
    alert(`number has been copied ${serviceNumber}`);
    })
}
// Clear Button Function
document.getElementById('clear-btn').addEventListener('click',function(){
    document.getElementById('history').style.display = 'none';
})
