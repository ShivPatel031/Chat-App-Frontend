import { useChatStore } from "../store/useChatStore.js";
import { Sidebar } from "../Component/Slidebar.jsx";
import { NoChatSelected } from "../Component/NoChatSelected.jsx";
import { ChatContainer } from "../Component/ChatContainer.jsx";

function HomePage()
{
    const {selectedUser} = useChatStore();

    return <>
        <div className="min-h-screen bg-base-200">
            <div className="flex items-center justify-center pt-16">
                <div className="bg-base-100 rounded-lg shadow-cl w-full h-[calc(100vh-4rem)]">
                    <div className="flex h-full rounded-lg overflow-hidden">
                        <Sidebar /> 

                        {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
                    </div>
                </div>
            </div>

        </div>
    </>
}

export {HomePage};