const allTicket =document.getElementsByClassName('ticket');




for(const ticket of allTicket){
  ticket.addEventListener('click', function(event){
    const ticketName = event.target.innerText;
    const selectedSeat = document.getElementById('selected-seat');

    const netSeatCount = getConvertedValue('seat-count');
    
    if(netSeatCount + 1 > 4){
      alert('limit sesh r hobe na');
      return;
    }

    event.target.setAttribute('disabled', false);
    event.target.style.backgroundColor = '#1DD100';

    

    // update seat number 
    const seatCount = getConvertedValue('seat-count');
    
    document.getElementById('seat-count').innerText = seatCount + 1;

    // update total seat number 
    const totalSeat = getConvertedValue('total-seat-count');
    document.getElementById('total-seat-count').innerText = totalSeat -1;

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
function grandTotalUpdate(status){
  const totalCost = getConvertedValue('total-price');
  const seatNumber = document.getElementById('seat-count').innerText;

  if(status == undefined){
  document.getElementById('grand-total').innerText = totalCost;
  
  }
  else if(parseInt(seatNumber) !== 4){
    alert('select 4 seat for discount.');
  }
  else {
    const couponCode = document.getElementById('coupon-code').value;
    if(couponCode == 'NEW15'){

      const discounted = totalCost * 0.15;
      document.getElementById('grand-total').innerText = totalCost - discounted;
    }
    else if(couponCode == 'Couple 20'){
      const discounted = totalCost * 0.80;
      document.getElementById('grand-total').innerText = discounted;
    }
    else{
      alert('Please enter valid coupon code');
    }
  }

 
}



// converted value 
function getConvertedValue(value){
  const price = document.getElementById(value).innerText;
  const convertPrice = parseInt(price);
  return convertPrice;
}

function showModal(){
  document.getElementById('modal-btn-next').disabled = true;
}








