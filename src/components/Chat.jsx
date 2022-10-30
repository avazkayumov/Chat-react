import styled from "styled-components";
import Logo from "../assets/chat-logo.png";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, fetchMessages } from "../store/actions";
import moment from "moment";

import searchIcon from "../assets/search-ic.svg";
import messageIcon from "../assets/message-ic.svg";
import moreIcon from "../assets/more-ic.svg";
import emojiIcon from "../assets/emoji=ic.svg";
import selectimgIcon from "../assets/selectimg-ic.svg";
import sendIcon from "../assets/send-ic.svg";
import voiceIcon from "../assets/voiceIcon.svg";
import arrowbackIcon from "../assets/arrowback-ic.svg";
import Loader from "../components/Loader";

function Chat(props) {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.messages.data);
  const addedMessage = useRef();
  const scrollRef = useRef();
  const [toggleIcon, setToggleIcon] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchMessages());
    }, 3000);
    return () => clearInterval(interval);
  }, [dispatch]);

  // useEffect(() => {
  //   if (scrollRef.current.scrollTop === 0) {
  //     scrollRef.current.scrollIntoView();
  //   }
  // }, [count]);

  function addMessageHandler(event) {
    setCount({ count: count + 1 });
    event.preventDefault();
    const data = {
      message: addedMessage.current.value,
    };

    dispatch(addMessage(data));
    addedMessage.current.value = "";
  }

  window.addEventListener("click", () => {
    if (addedMessage.current.value === "") {
      setToggleIcon(true);
    }
  });

  return (
    <Wrapper>
      <div className="chat-header">
        <div className="left-side">
          <img
            className="arrowback-icon"
            src={arrowbackIcon}
            alt=""
            onClick={() => props.setShowChat(false)}
          />
          <img src={Logo} alt="" />
          <h3>Pdp Group</h3>
        </div>
        <div className="right-side">
          <img src={searchIcon} alt="" />
          <img src={messageIcon} alt="" />
          <img className="moreicon" src={moreIcon} alt="" />
        </div>
      </div>

      <div className="chat-messages">
        {messages?.map((message) => (
          <div key={message.id} className="message">
            <p className="createdby">{message.createdBy} </p>
            <p className="message-text">{message.message}</p>
            <p className="createddate">
              {moment(message.createdDate).format("LT")}
            </p>
          </div>
        )) || <Loader />}
        <div className="scroll-div" ref={scrollRef}></div>
      </div>

      <div className="input-container">
          <div className="left-side">
            <img className="selectimg-icon" src={selectimgIcon} alt="" />
            <form onSubmit={(e) => addMessageHandler(e)} action="">
              <input
                onChange={() => setToggleIcon(false)}
                ref={addedMessage}
                type="text"
                placeholder="Write a message..."
              />
            </form>
          </div>

          <div className="icons-container">
            <img className="emoji-icon" src={emojiIcon} alt="" />
            {toggleIcon ? (
              <img className="voice-icon" src={voiceIcon} alt="" />
            ) : (
              <img
                className="send-icon"
                src={sendIcon}
                alt=""
                onClick={addMessageHandler}
              />
            )}
          </div>
      </div>
    </Wrapper>
  );
}

export default Chat;

const Wrapper = styled.div`
  width: 100%;
  background: #1a1c26;

  .chat-header {
    width: 100%;
    height: 58px;
    border-radius: 7px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 44px;
    border-bottom: 2px solid #213040;

    .left-side {
      display: flex;
      gap: 20px;
      align-items: center;

      .arrowback-icon {
        cursor: pointer;
      }

      h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 21px;
        color: #ffffff;
        border-radius: 2px;
      }
    }

    .right-side {
      display: flex;
      align-items: center;
      gap: 10px;

      @media(max-width: 500px) {
        display: none;
      }

      img {
        padding: 13px;
        background: rgba(255, 255, 255, 0.07);
        border-radius: 34px;
        cursor: pointer;
      }
      .moreicon {
        padding: 13px 18px;
      }
    }
  }

  .chat-messages {
    padding: 0 40px;
    background-color: #1a1c26;
    overflow: scroll;
    overflow-x: hidden;
    width: 100%;
    height: calc(100vh - 111px);

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 3px grey; 
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: grey;
      border-radius: 10px;
    }

    .message {
      padding: 10px;
      border-radius: 4px 14px 14px 14px;
      background-color: #213040;
      color: white;
      margin-bottom: 7px;
      width: 60%;

      @media(max-width: 500px) {
        width: 100%;
      }

      .createdby {
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #7b61ff;
        margin-bottom: 3px;
      }

      .createddate {
        font-style: normal;
        font-weight: 350;
        font-size: 12px;
        line-height: 14px;
        text-align: right;
        color: #a1aab3;
      }
    }
  }

  .input-container {
    width: 100%;
    padding: 0 40px;
    background-color: #1a1c26;
    border-top: 2px solid #213040;
    width: inherit;
    border-radius: 8px;
    padding: 0 15px;
    background: #1a1c26;
    display: flex;
    justify-content: space-between;
    align-items: center;

      .left-side {
        display: flex;
        align-items: center;
      }
      
      input {
        width: 100%; 
        height: 50px;
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        font-size: 14px;
        letter-spacing: 1px;
      }

      .selectimg-icon {
        margin-right: 20px;
        cursor: pointer;
      }

      .send-icon {
        cursor: pointer;
      }

      .emoji-icon {
        margin-right: 20px;
        cursor: pointer;
      }

      .voice-icon {
        cursor: pointer;
      }
    }
  
`;
