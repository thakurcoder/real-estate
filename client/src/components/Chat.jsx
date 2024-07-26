import { useState } from "react";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="w-full bg-white shadow-md rounded-lg p-4 sm:p-6">
      <div className="messages space-y-4">
        <h1 className="text-xl sm:text-2xl font-semibold mb-4">Messages</h1>
        {Array(6).fill().map((_, i) => (
          <div key={i} className="message flex items-center space-x-2 sm:space-x-4 p-3 bg-gray-100 rounded-lg">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="User"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <div>
              <span className="block font-semibold">John Doe</span>
              <p className="text-gray-600 text-sm sm:text-base">Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
        ))}
      </div>
      {chat && (
        <div className="chatBox mt-6 bg-gray-50 shadow-lg rounded-lg">
          <div className="top flex items-center justify-between p-3 sm:p-4 bg-blue-500 rounded-t-lg text-white">
            <div className="user flex items-center space-x-2 sm:space-x-3">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
              />
              John Doe
            </div>
            <span className="cursor-pointer text-sm sm:text-base" onClick={() => setChat(null)}>X</span>
          </div>
          <div className="center p-3 sm:p-4 space-y-2 sm:space-y-4 overflow-y-auto max-h-64">
            {Array(10).fill().map((_, i) => (
              <div key={i} className={`chatMessage ${i % 2 === 0 ? '' : 'own'} flex flex-col items-${i % 2 === 0 ? 'start' : 'end'}`}>
                <p className="bg-white p-2 sm:p-3 rounded-lg shadow-md text-sm sm:text-base">{i % 2 === 0 ? 'Lorem ipsum dolor sit amet' : 'Lorem ipsum dolor sit amet'}</p>
                <span className="text-gray-500 text-xs sm:text-sm mt-1">{i % 2 === 0 ? '1 hour ago' : '1 hour ago'}</span>
              </div>
            ))}
          </div>
          <div className="bottom p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 bg-white rounded-b-lg">
            <textarea className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"></textarea>
            <button className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-blue-600 transition-colors text-sm sm:text-base">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
