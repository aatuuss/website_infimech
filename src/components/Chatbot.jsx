import React, { useState, useEffect, useRef } from "react";

// PINDAHKAN KOMPONEN INI KE LUAR (DI ATAS ChatBot)
// Ini untuk menghindari error "Cannot create components during render"
const RobotIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M12 2a2 2 0 0 1 2 2v1h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1V4a2 2 0 0 1 2-2m-3 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9 16a3 3 0 0 0 6 0H9z" />
  </svg>
);

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  
  const [chatHistory, setChatHistory] = useState([
    { sender: "chatbot", message: "Halo! Silakan ketik pesan Anda di bawah, saya akan langsung mengarahkan Anda ke WhatsApp kami." }
  ]);
  const messagesEndRef = useRef(null);

  const MY_PHONE_NUMBER = "6281333546332"; 

  // Listener untuk responsive
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [chatHistory, isOpen]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (userMessage.trim()) {
      const newHistory = [...chatHistory, { sender: "user", message: userMessage }];
      setChatHistory(newHistory);
      
      const encodedMessage = encodeURIComponent(userMessage);
      const whatsappUrl = `https://wa.me/${MY_PHONE_NUMBER}?text=${encodedMessage}`;
      
      setUserMessage("");
      window.open(whatsappUrl, "_blank");

      setTimeout(() => {
        setChatHistory((prev) => [
          ...prev,
          { sender: "chatbot", message: "Sedang mengalihkan ke WhatsApp..." }
        ]);
      }, 500);
    }
  };

  const styles = {
    wrapper: {
      position: "fixed",
      bottom: isMobile ? "15px" : "20px",
      left: isMobile ? "15px" : "20px",
      zIndex: 1000,
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    },
    chatbotPopup: {
      display: isOpen ? "flex" : "none",
      flexDirection: "column",
      // RESPONSIVE WIDTH
      width: isMobile ? "calc(100vw - 30px)" : "280px", 
      maxWidth: "350px",
      height: isMobile ? "300px" : "350px", 
      backgroundColor: "#fff",
      boxShadow: "0 12px 28px rgba(0, 0, 0, 0.15)",
      borderRadius: "20px",
      overflow: "hidden",
      position: "absolute",
      bottom: "70px",
      left: "0",
      border: "1px solid #f0f0f0",
      transition: "all 0.3s ease",
    },
    header: {
      display: "flex",
      alignItems: "center",
      padding: "10px 15px",
      borderBottom: "1px solid #f0f0f0",
      backgroundColor: "#fff",
      gap: "12px"
    },
    headerAvatar: {
      width: "40px",
      height: "40px",
      backgroundColor: "#3b82f6",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 5px rgba(59, 130, 246, 0.2)",
      flexShrink: 0,
    },
    headerTextContainer: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    headerTitle: {
      fontWeight: "600",
      fontSize: "15px",
      color: "#1e293b",
    },
    headerStatus: {
      fontSize: "11px",
      color: "#22c55e",
      display: "flex",
      alignItems: "center",
      gap: "4px"
    },
    statusDot: {
      width: "6px",
      height: "6px",
      backgroundColor: "#22c55e",
      borderRadius: "50%",
    },
    chatbotBody: {
      flex: 1,
      padding: "15px",
      overflowY: "auto",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    botWrapper: {
      display: "flex",
      alignItems: "flex-start",
      gap: "8px",
      alignSelf: "flex-start",
      maxWidth: "85%",
    },
    avatarMini: {
      width: "24px",
      height: "24px",
      backgroundColor: "#3b82f6",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    userBubble: {
      alignSelf: "flex-end",
      backgroundColor: "#3b82f6",
      color: "white",
      padding: "10px 14px",
      borderRadius: "15px 15px 2px 15px",
      fontSize: "13px",
      maxWidth: "80%",
    },
    botBubble: {
      backgroundColor: "#f1f5f9",
      color: "#334155",
      padding: "10px 14px",
      borderRadius: "15px 15px 15px 2px",
      fontSize: "13px",
    },
    footer: {
      padding: "12px",
      borderTop: "1px solid #f0f0f0",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    inputWrapper: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      backgroundColor: "#f8fafc",
      borderRadius: "20px",
      padding: "4px 12px",
      border: "1px solid #e2e8f0",
    },
    input: {
      flex: 1,
      border: "none",
      background: "transparent",
      padding: "8px",
      outline: "none",
      fontSize: "16px", // Mencegah zoom otomatis di iPhone
    },
    chatbotLogo: {
      width: "55px",
      height: "55px",
      backgroundColor: "#25D366",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.chatbotPopup}>
        <div style={styles.header}>
          <div style={{ cursor: "pointer", display: "flex" }} onClick={() => setIsOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
          
          <div style={styles.headerAvatar}>
            <RobotIcon size={24} />
          </div>

          <div style={styles.headerTextContainer}>
            <div style={styles.headerTitle}>Infimech</div>
            <div style={styles.headerStatus}>
              <div style={styles.statusDot}></div>
              Online
            </div>
          </div>
        </div>

        <div style={styles.chatbotBody}>
          {chatHistory.map((chat, index) => (
            chat.sender === "user" ? (
              <div key={index} style={styles.userBubble}>{chat.message}</div>
            ) : (
              <div key={index} style={styles.botWrapper}>
                <div style={styles.avatarMini}><RobotIcon size={14} /></div>
                <div style={styles.botBubble}>{chat.message}</div>
              </div>
            )
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form style={styles.footer} onSubmit={sendMessage}>
          <div style={styles.inputWrapper}>
            <input
              style={styles.input}
              placeholder="Ketik pesan..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
          </div>
          <button type="submit" style={{ border: "none", background: "none", cursor: "pointer", display: "flex" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#3b82f6">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>

      <div style={styles.chatbotLogo} onClick={() => setIsOpen(!isOpen)}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WA" 
          style={{ width: "32px", height: "32px" }} 
        />
      </div>
    </div>
  );
}

export default ChatBot;