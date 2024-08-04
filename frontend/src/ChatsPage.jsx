import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
    <div style={{ height: '100vh'}}>
        <PrettyChatWindow
            projectId='586dd18e-adb3-46e6-b636-f491243e5559'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100vh'}}
        />
    </div>
    )
}

export default ChatsPage