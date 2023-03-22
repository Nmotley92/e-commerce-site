import "../../chats.css";

const UserChat = () => {
    return (
        <>
        <input type="checkbox" id="check" />
        <label className="chat-btn" for="check">
        <i className="bi bi-chat-dots comment"></i>
        <i className="bi bi-x-circle close"></i>
        </label>
        <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Questions? We are Here to Help</h6>
        </div>
      </div>
        </>
    );
};

export default UserChat;