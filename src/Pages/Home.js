import React from "react";
import "./Home.css";
function ExamplePage() {
	return (
		<>
			<div class="bg-white rounded-lg shadow-lg">
                  <div class="p-4 text-center">
                      <img class="rounded-full mx-auto border" src="images/606.png" alt="Profile Picture" style="width:100px;height:100px;" />
                      <h2 class="text-2xl font-semibold mt-2">606 Climbing</h2>
                      <div class="mt-4">
                          <a href="https://meetup.com/606-climbing" class="block py-2 px-4 rounded text-white font-bold mt-3 transition-colors duration-300" style="background-color: #e2373f;" onmouseover="this.style.backgroundColor='#cc2f32'" onmouseout="this.style.backgroundColor='#e2373f'">606 Climbing | Meetup</a>
                          <a href="https://www.instagram.com/606climbing" class="block py-2 px-4 rounded text-white font-bold mt-3 transition duration-300 ease-in-out transform hover:scale-105" style="background-color: #C13584;">Instagram</a>
                          <a href="https://chat.whatsapp.com/GKfHxnUB9ZT9IGnPbsFgYA" class="block py-2 px-4 rounded text-white font-bold mt-3 transition duration-300 ease-in-out transform hover:scale-105" style="background-color: #25D366;">Climbing WhatsApp</a>
                          <a href="https://chat.whatsapp.com/HrJgSyLyLfM94dRMQNxxoY" class="block py-2 px-4 rounded text-white font-bold mt-3 transition duration-300 ease-in-out transform hover:scale-105" style="background-color: #25D366;">Cycling Group WhatsApp</a>
                      </div>
                  </div>
              </div>
		</>
	);
}

export default ExamplePage;
