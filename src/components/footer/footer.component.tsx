function Footer() {
  const currentHour = new Date().getHours();
  const openingHour = 12;
  const closingHour = 22;
  const isOpen = currentHour >= openingHour && currentHour < closingHour;

  return (
    <footer className='footer'>
      {isOpen ? (
        <div className='order'>
          <p>
            We're open until {closingHour}:00. Come visit us or order online
          </p>
          <button className='btn'>Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openingHour}:00 and {closingHour}
          :00
        </p>
      )}
    </footer>
  );
}

export default Footer;
