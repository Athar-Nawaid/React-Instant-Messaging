💬 React Chat App                                                             

A simple, clean, and modular React-based Chat Application with searchable user list, new chat creation, and real-time message update (local state). Built using React Hooks, CSS Modules, and modular components.

🚀 Features
🧑‍🤝‍🧑 User Chat List: Displays all chat users with profile picture and last message.

🔍 Live Search: Real-time filtering of users by name.

💬 Chat Window: View and send messages within a selected chat.

📨 Send Message: Adds new messages with timestamps.

🆕 New Chat Modal: Create new chat from existing users using modal.

🎨 Clean UI: Styled with CSS modules for scoped and modular styling.

🧱 Project Structure

your-project/                                                                 
│                                                                             
├── Logos/                   # Icons and profile pictures                     
│   ├── user.png                                                              
│   └── live-chat.png                                                         
│                                                                             
├── Json/                                                                     
│   └── data.js              # Dummy JSON chat data                           
│                                                                             
├── Chat-Screen/                                                              
│   ├── ChatScreen.js        # Main chat display component                    
│   └── Chat-Screen.module.css                                                
│                                                                             
├── Sidebar/                                                                  
│   ├── Sidebar.js           # Sidebar with user list and search              
│   └── Sidebar.module.css                                                    
│                                                                             
├── App.js                   # App root                                       
├── index.js                                                                  
└── README.md                # You're here  


🧪 Getting Started         

1. Clone the Repository                                                                    
bash

git clone https://github.com/yourusername/react-chat-app.git
cd react-chat-app

2. Install Dependencies

npm install

3. Run the App

npm start

🧠 How It Works

ChatScreen Component:

Displays conversation between "you" and "frnd".

Controlled input for message sending.

Dynamically renders messages with conditional styling.

Sidebar Component:

Lists users with profile image and last message.

Filters users with search input.

Triggers ChatModal to start new chats.

sendMessage updates the state and re-renders components.

