//Get Dom Element 
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = +movieSelect.value;

const updateSelectedCount = ()=>{
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * ticketPrice;
}




container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat') &&
       !e.target.classList.contains('occupied')
    ){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})