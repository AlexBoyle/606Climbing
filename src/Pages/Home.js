import React from "react";
import "./Home.css";
function ExamplePage() {
	return (
		<>
		    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-red-700 to-red-300 p-4">
			<div className="bg-white rounded-lg shadow-lg">
                  <div className="p-4 text-center">
                      <img className="rounded-full mx-auto border" src="images/606Logo.png" alt="Profile Picture" style={{width:"100px",height:"100px"}} />
                      <h2 className="text-2xl font-semibold mt-2">606 Climbing</h2>
                      <div className="mt-4">
                          <a href="https://meetup.com/606-climbing" className="block py-2 px-4 rounded text-white font-bold mt-3 transition-colors duration-300" style={{backgroundColor: "#e2373f"}} onmouseover="this.style.backgroundColor='#cc2f32'" onmouseout="this.style.backgroundColor='#e2373f'">606 Climbing | Meetup</a>
                          <a href="https://www.instagram.com/606climbing" className="block py-2 px-4 rounded text-white font-bold mt-3 transition duration-300 ease-in-out transform hover:scale-105" style={{backgroundColor: "#C13584"}}>Instagram</a>
                          <a href="https://chat.whatsapp.com/GKfHxnUB9ZT9IGnPbsFgYA" className="block py-2 px-4 rounded text-white font-bold mt-3 transition duration-300 ease-in-out transform hover:scale-105" style={{backgroundColor: "#25D366"}}>Climbing WhatsApp</a>
                          <a href="https://chat.whatsapp.com/HrJgSyLyLfM94dRMQNxxoY" className="block py-2 px-4 rounded text-white font-bold mt-3 transition duration-300 ease-in-out transform hover:scale-105" style={{backgroundColor: "#25D366"}}>Cycling Group WhatsApp</a>
                      </div>
                  </div>
              </div>
              </div>
		</>
	);
}

export default ExamplePage;
