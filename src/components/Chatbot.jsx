import React, { useState, useEffect, useRef } from "react";

// Komponen Ikon Robot
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
    { sender: "chatbot", message: "Halo! Saya asisten virtual Infimech. Ada yang bisa saya bantu terkait layanan engineering kami?", type: "text" }
  ]);
  const messagesEndRef = useRef(null);

  const MY_PHONE_NUMBER = "6281333546332";

  const companyData = [
    {
      keywords: ["profil", "siapa", "infimech", "perusahaan", "tentang"],
      answer: "PT. Infimech Harmoni Teknologi adalah perusahaan teknik Indonesia yang menyediakan jasa teknik, konsultasi, simulasi, dan pelatihan.Kekuatan inti kami terletak pada layanan teknik tingkat lanjut, khususnya dalam metode komputasi seperti Computational Fluid Dynamics (CFD) dan Finite Element Analysis (FEA).Kami mengkhususkan diri dalam membantu industri mengoptimalkan desain, meningkatkan kinerja produk, dan memecahkan tantangan teknik yang kompleks melalui alat digital, simulasi, serta metode teknik konvensional."
    },
    {
      keywords: ["layanan", "servis", "jasa", "produk"],
      answer: "Layanan kami meliputi:\n1. Regular: Desain Mekanik, Piping, Struktur, dan Elektrikal.\n2. Advanced: CFD (Fluid Dynamics), FEA (Stress Analysis), Studi Vibrasi & Akustik.\n3. Project Management: Implementasi ERP & AI."
    },
    {
      keywords: ["kontak", "alamat", "kantor", "lokasi", "telepon", "wa"],
      answer: "Kantor kami ada di Jakarta (Depok), Yogyakarta, dan Malang. Hubungi kami di +62 8133 3546 332 atau email ke info@infimech.tech."
    },
    {
      keywords: ["software", "openfoam", "aplikasi", "simulasi"],
      answer: "Kami ahli dalam penggunaan OpenFOAM (CFD), SnappyHexMesh, dan ParaView untuk validasi desain dan optimasi industri."
    },
    {
      keywords: ["industri", "sektor", "klien"],
      answer: "Kami melayani sektor Oil & Gas, Power Generation, Petrokimia, Pertambangan, dan Manufaktur."
    },
    {
      keywords: ["visi"],
      answer: "Sebagai perusahaan teknik Indonesia dengan kehadiran global dan layanan teknik canggih, berkomitmen untuk menjadi perusahaan kelas dunia."
    },
    {
        keywords: ["misi"],
        answer: "Kami berdedikasi untuk memberikan layanan teknik kelas dunia yang berorientasi pada nilai, yang disesuaikan dengan kebutuhan klien yang terus berkembang di sektor konstruksi, minyak dan gas, pembangkit listrik, dan petrokimia. Dengan mengintegrasikan teknologi inovatif—dari solusi teknik tradisional hingga alat komputasi canggih seperti CFD dan FEA—kami bertujuan untuk meningkatkan hasil proyek, memastikan keselamatan, keandalan, dan efisiensi yang lebih besar."
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const msg = userMessage.trim().toLowerCase();
    if (!msg) return;

    const newHistory = [...chatHistory, { sender: "user", message: userMessage, type: "text" }];
    setChatHistory(newHistory);
    setUserMessage("");

    setTimeout(() => {
      let foundAnswer = companyData.find(item => 
        item.keywords.some(key => msg.includes(key))
      );

      if (foundAnswer) {
        setChatHistory(prev => [...prev, { sender: "chatbot", message: foundAnswer.answer, type: "text" }]);
      } else {
        setChatHistory(prev => [...prev, { 
          sender: "chatbot", 
          message: "Maaf, saya tidak menemukan informasi spesifik mengenai hal tersebut. Mari diskusikan langsung dengan tim ahli kami via WhatsApp.", 
          type: "whatsapp_button" 
        }]);
      }
    }, 600);
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${MY_PHONE_NUMBER}?text=Halo Infimech, saya ingin bertanya lebih lanjut.`;
    window.open(url, "_blank");
  };

  const styles = {
    backdrop: {
      display: isOpen ? "block" : "none",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 999,
      backgroundColor: "transparent",
    },
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
      width: isMobile ? "calc(100vw - 30px)" : "300px",
      height: isMobile ? "300px" : "380px",
      backgroundColor: "#fff",
      boxShadow: "0 12px 28px rgba(0, 0, 0, 0.15)",
      borderRadius: "20px", // Rounded lebih besar
      overflow: "hidden",
      position: "absolute",
      bottom: "75px",
      left: "0",
      border: "1px solid #f0f0f0",
    },
    header: {
      padding: "12px 15px",
      backgroundColor: "#fff", // Header Putih
      borderBottom: "1px solid #f0f0f0",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    backButton: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "4px",
    },
    avatarWrapper: {
      width: "40px",
      height: "40px",
      backgroundColor: "#1e40af", // Lingkaran Biru untuk Avatar
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    headerText: {
      display: "flex",
      flexDirection: "column",
    },
    headerTitle: {
      fontWeight: "600",
      fontSize: "15px",
      color: "#1e293b",
    },
    headerStatus: {
      fontSize: "11px",
      color: "#22c55e",
      fontWeight: "500",
    },
    body: {
      flex: 1,
      padding: "15px",
      overflowY: "auto",
      backgroundColor: "#f8fafc",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    botBubble: {
      backgroundColor: "#fff",
      padding: "12px",
      borderRadius: "15px 15px 15px 4px",
      fontSize: "13px",
      color: "#334155",
      border: "1px solid #e2e8f0",
      whiteSpace: "pre-line",
      maxWidth: "85%",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    },
    userBubble: {
      alignSelf: "flex-end",
      backgroundColor: "#1e40af",
      color: "white",
      padding: "12px",
      borderRadius: "15px 15px 4px 15px",
      fontSize: "13px",
      maxWidth: "80%",
      boxShadow: "0 2px 4px rgba(30, 64, 175, 0.2)",
    },
    waButton: {
      backgroundColor: "#25D366",
      color: "white",
      border: "none",
      padding: "10px 14px",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: "600",
      marginTop: "8px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      width: "fit-content"
    },
    footer: {
      padding: "12px",
      borderTop: "1px solid #f0f0f0",
      display: "flex",
      gap: "8px",
      backgroundColor: "#fff"
    },
    input: {
      flex: 1,
      padding: "10px 15px",
      border: "1px solid #e2e8f0",
      borderRadius: "25px",
      outline: "none",
      fontSize: "14px",
      backgroundColor: "#f8fafc"
    },
    launcher: {
      width: "60px",
      height: "60px",
      backgroundColor: "#ffffff", // Warna Putih
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
      transition: "transform 0.2s ease",
    }
  };

  return (
    <>
      {/* Backdrop untuk menutup popup ketika klik di luar */}
      <div style={styles.backdrop} onClick={() => setIsOpen(false)} />
      
      <div style={styles.wrapper}>
        <div style={styles.chatbotPopup} onClick={(e) => e.stopPropagation()}>
        {/* Header Baru */}
        <div style={styles.header}>
          <div style={styles.backButton} onClick={() => setIsOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
          
          <div style={styles.avatarWrapper}>
            <RobotIcon size={22} />
          </div>

          <div style={styles.headerText}>
            <span style={styles.headerTitle}>Infimech Support</span>
            <span style={styles.headerStatus}>● Online</span>
          </div>
        </div>

        <div style={styles.body}>
          {chatHistory.map((chat, i) => (
            <div key={i} style={chat.sender === "user" ? styles.userBubble : { display: 'flex', flexDirection: 'column' }}>
              {chat.sender === "chatbot" && (
                <div style={styles.botBubble}>
                  {chat.message}
                  {chat.type === "whatsapp_button" && (
                    <button onClick={openWhatsApp} style={styles.waButton}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="18" alt="wa"/>
                      Hubungi Ahli Kami
                    </button>
                  )}
                </div>
              )}
              {chat.sender === "user" && chat.message}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form style={styles.footer} onSubmit={handleSendMessage}>
          <input
            style={styles.input}
            placeholder="Tulis pesan..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button type="submit" style={{ border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#1e40af">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Launcher Logo */}
      <div 
        style={{...styles.launcher, transform: isOpen ? "scale(0.9)" : "scale(1)"}} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <span style={{ color: "#000000", fontSize: "28px", fontWeight: "300" }}>×</span>
        ) : (
          <img 
            src="/img/chatbot.png" 
            alt="Infimech Logo" 
            style={{ width: "40px", height: "40px", objectFit: "contain" }} 
          />
        )}
      </div>
      </div>
    </>
  );
}

export default ChatBot;