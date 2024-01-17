import TypingText from "../TypingText";

const Success = ({ message }) => {
  return (
    <div className="success">
      <p className="thumbs-up">👍</p>
      <h1 className="success__big">Success!</h1>
      <TypingText text={message} intervalDuration={50} className="success__message" />
    </div>
  );
};

export default Success;