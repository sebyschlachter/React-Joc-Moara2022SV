const Message = ({ messages }) => {
    return (
        <>
            {messages.map((message, index) => (
                <p style={{ padding: 5 }} key={`message-${index}`}>{message}</p>
            ))}
        </>
    )
}
export default Message;