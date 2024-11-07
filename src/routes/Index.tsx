import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Index() {
    const navigate = useNavigate();
    
    return (
        <div>
            <Button variant="secondary" onClick={() => navigate("/login")}>Login</Button>
            <Button onClick={() => navigate("/chat")}>Go to chat</Button>
        </div>
    );
}