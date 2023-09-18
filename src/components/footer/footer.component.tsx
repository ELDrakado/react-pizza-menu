function Footer() {
  const currentHour = new Date().getHours();
  const message =
    currentHour >= 12 && currentHour <= 22
      ? "We're currently open!"
      : "Sorry, we're currently closed!";

  return <footer className='footer'>{message}</footer>;
}

export default Footer;
