document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomType = document.getElementById('roomType').value;
  
    if (name === '' || email === '' || phone === '' || checkin === '' || checkout === '' || roomType === '') {
      alert('Please fill in all fields');
    } else {
      
      console.log('Form is valid');
    }
  });