const allTicket =document.getElementsByClassName('ticket');




for(const ticket of allTicket){
  ticket.addEventListener('click', function(event){
    const ticketName = event.target.innerText;
    const selectedSeat = document.getElementById('selected-seat');
    const div = document.createElement('div');
    div.classList.add('flex');
    div.classList.add('justify-between')
    const p1 = document.createElement('p');
    p1.innerText = ticketName;
    
    const p2 = document.createElement('p');
    p2.innerText = 'Economoy';
    const p3 = document.createElement('p');
    p3.innerText = 550;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedSeat.appendChild(div);

    const perSeatCost = document.getElementById('per-seat-cost').innerText;
    TotalCostUpdate(parseInt(perSeatCost));
    grandTotalUpdate();
  });
};


// update total
function TotalCostUpdate(value){
  const totalPrice = getConvertedValue('total-price');
  const sum = totalPrice + value;
  document.getElementById('total-price').innerText = sum;
}


// update grand total 
function grandTotalUpdate(){
  const totalCost = getConvertedValue('total-price');
  
  document.getElementById('grand-total').innerText = totalCost;
}









function getConvertedValue(value){
  const price = document.getElementById(value).innerText;
  const convertPrice = parseInt(price);
  return convertPrice;
}











