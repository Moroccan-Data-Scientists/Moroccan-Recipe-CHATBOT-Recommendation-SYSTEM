import { FunctionComponent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../Api/axios";
import { FaRegEdit } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
import { IoHomeSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import moment from "moment"; // Import moment for date formatting

import "../style/ChatBoot.css";

interface response {
  refrence: string;
  name: string;
  recepieImage: string;
  ingredients: string[];
  instructions: string;
  totalTime: string;
}

interface ChatMessage {
  userInput: string;
  response: response;
}

interface UserHistory {
  userId: string;
  chatTitle: string;
  id: string;
  chatDate: string;
  chatRefrence: string; // Added chatRefrence field
}

const ChatBoot: FunctionComponent = () => {
  const [userHistory, setUserHistory] = useState<UserHistory[]>([]);
  const userInputRef: any = useRef();
  const [user, setUser] = useState<string>("12"); // logged-in user normally retrieved from local storage
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);
  const [chatMessage, setChatMessage] = useState<Array<ChatMessage>>([]);
  const userHistoryData: UserHistory[] =
    userHistory?.filter((item) => item.userId === user) || [];
  const navigate = useNavigate();
  const flexStyle = {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    fontSize: "1.2rem",
  };

  useEffect(() => {
    const fetchUserHistory = async () => {
      try {
        const res: any = await axiosClient.get("/userHistory");
        setUserHistory(res.data);
      } catch (error) {
        console.error("Error fetching user history:", error);
      }
    };

    fetchUserHistory();
  }, []);

  const handelAddToChatHistory = async (data: any) => {
    try {
      const res = await axiosClient.post("/chats/", { userId: user, ...data });
      alert("successfully added");
    } catch (error) {
      console.error("Error adding user history:", error);
    }
  };

  const handelDeleteChatHistory = async (ref: string) => {
    try {
      const deletedChatID: any = { id: ref };
      await axiosClient.delete(`/chats`, deletedChatID);
      setUserHistory((prev) => prev.filter((item) => item.id !== ref));
    } catch (error) {
      console.error("Error deleting user history:", error);
    }
  };

  const handelSelectChat = async (chat: UserHistory) => {
    try {
      const res = await axiosClient.get(`/chats?refrence=${chat.chatRefrence}`);
      const recipeData = res.data[0]; // Assuming there's only one matching recipe for the given refrence
      if (recipeData) {
        setChatMessage([{ userInput: chat.chatTitle, response: recipeData }]);
      }
    } catch (error) {
      console.error("Error fetching recipe data:", error);
    }
  };

  const handelRequest = async () => {
    const messg = userInputRef.current.value;

    if (!messg) {
      alert("write something");
      return;
    }

    try {
      const res: any = await axiosClient.get("/chatBoot", {
        params: { userInput: messg },
      });
      setChatMessage((prev) => [
        ...prev,
        { userInput: messg, response: res.data.response },
      ]);
      handelAddToChatHistory({ userInput: messg, ...res.data.response });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  // Function to group chat titles by month
  const groupChatByMonth = (chatData: UserHistory[]) => {
    const groupedData: { [key: string]: UserHistory[] } = {};
    chatData.forEach((chat) => {
      const monthYear = moment(chat.chatDate, "DD MMMM YYYY").format(
        "MMMM YYYY"
      ); // Format date as Month Year
      if (!groupedData[monthYear]) {
        groupedData[monthYear] = [];
      }
      groupedData[monthYear].push(chat);
    });
    return groupedData;
  };

  const handelNewChat = () => {
    setChatMessage([]);
  };

  const groupedChatData = groupChatByMonth(userHistoryData || []);

  return (
    <div className="grid-container">
      <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
        <div
          style={{ ...flexStyle, cursor: "pointer" }}
          onClick={handelNewChat}
        >
          <img src="image-31@2x.png" className="logo" alt="logo" />
          <p>nouvelle discussion</p>
          <FaRegEdit />
        </div>
        <ul>
          {Object.entries(groupedChatData).map(([monthYear, chats]) => (
            <li key={monthYear}>
              <h3>{monthYear}</h3>
              <ul>
                {chats.map((chat) => (
                  <div
                    style={flexStyle}
                    key={chat.id}
                    onClick={() => handelSelectChat(chat)}
                  >
                    <li className="chatTitle">{chat.chatTitle}</li>
                    <TiDelete
                      style={{
                        color: "red",
                        fontSize: "1.3rem",
                        cursor: "pointer",
                      }}
                      onClick={() => handelDeleteChatHistory(chat.id)}
                    />
                  </div>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div>
          <div
            style={{ ...flexStyle, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <IoHomeSharp />
            <p>Back Home</p>
          </div>

          <div style={flexStyle}>
            <MdLogout />
            <p>Logout</p>
          </div>
        </div>
      </div>
      <div className={`main-content ${sidebarActive ? "active" : ""}`}>
        {chatMessage.length > 0 &&
          chatMessage.map((chat, index) => (
            <div key={index}>
              <div className="userQuestion-container">
                <div className="userName">You</div>
                <p>{chat.userInput}</p>
              </div>

              <div className="chatBootRecommandation-container">
              <img src="image-31@2x.png" className="logo" alt="logo" />

                <div className="recommandation-container">
                  <div className="recipe-basicInfo">
                    <img
                      src={chat.response.recepieImage}
                      alt={chat.response.name}
                    />
                    <h3>{chat.response.name}</h3>
                  </div>
                  <div className="recommandation-description">
                    <ul>
                      <h3>Ingredients</h3>
                      {chat.response.ingredients.map((ing, key) => (
                        <li key={key}>{ing}</li>
                      ))}
                    </ul>
                    <div>
                      <h3>Instructions</h3>
                      <p>{chat.response.instructions}</p>
                    </div>
                  </div>
                  <h3 style={{ textAlign: "center" }}>
                    Total time {chat.response.totalTime}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        <div className="input-container">
          <textarea ref={userInputRef} placeholder="describe your recipe" />
          <VscSend className="send-arrow" onClick={handelRequest} />
        </div>
      </div>

      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div className={`line ${sidebarActive ? "active" : ""}`}></div>
        <div className={`line ${sidebarActive ? "active" : ""}`}></div>
        <div className={`line ${sidebarActive ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default ChatBoot;
