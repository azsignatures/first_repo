import "./../assets/styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <footer>
        {/* <p>Copyright 2020 </p> */}
        <p>&copy; 2025 Az-Signatures Tech. All rights reserved.</p>
        
        <a href=""><i class="fa-brands fa-facebook"></i></a>
        <a href=""><i class="fa-brands fa-instagram"></i></a>
        <a href=""><i class="fa-brands fa-tiktok"></i></a>
        {/* <a href="">Github</a><img src="" alt="" /> */}
        {/* <a href="">Whatsapp</a> */}
        <a href="" target="-blank"><i class="fa-solid fa-phone"></i></a>
      </footer>
    </div>
  );
};

export default Footer;
