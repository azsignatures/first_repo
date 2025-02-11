import './../assets/styles/about.css'
import mypicture from './../assets/images/mypicture.jpg'
const About = () => {
  return (
    <div className='about'>
      <div>
          <img src={mypicture} alt="" width= "600px" height= "600px" />
      </div>
     <div>
        <h1>Welcome to My Portfolio</h1>
      <p className='para'>I'm Akinde Azeezat, a Junior Frontend Developer with a passion for building beautiful and functional web applications. Learning new technologies, I enjoy working with JavaScript, React and Tailwind css to create responsive and engaging user experiences. My journey in web development began with curiosity, and over time, I have honed my skills to develop responsive, accessible, and dynamic websites. 
        </p>
     </div>
      
    </div>
  );
}

export default About
