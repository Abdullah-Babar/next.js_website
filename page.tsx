import Link from "next/link";
import Image from "next/image";
import bg from "./image/bg.jpg"

export default function Home() {
  return (
    <div id = "main">
      <div id = "home">

      <h1 id="heading">Luxury <span>Automobiles</span></h1>
      <p id="para">Welcome to <span>Luxury Automobiles</span>. Our dedicated team of automotive specialists is here to cater to your unique preferences and needs. Value is a service of trust. The trust your customers have in you. The trust you have in your people, stratigies and systems. And always delivering on expectation. We provide best services in our city. </p>
      <Image src={bg} alt=""/>
      </div>

     <div id="Section">
      <button id="button1"><Link style={{
                        color: "black",
                        textDecoration: "none",
                         fontSize: "20px"
                    }} href="/cars">View Cars</Link></button>
      <button id="button2"><Link style={{
                        color: "orange",
                        textDecoration: "none",
                        fontSize: "20px"
                    }} href="/contact-us">Learn More</Link></button>
     </div>
   
    </div>
  );
}
