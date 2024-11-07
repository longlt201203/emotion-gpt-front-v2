import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginBasic } from "@/services/auth.service";
import { loginBasicSchema } from "@/types";
import { AxiosError } from "axios";
import { ActionFunctionArgs, Form, redirect, useActionData } from "react-router-dom";
import { zx } from "zodix";

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const params = await zx.parseForm(formData, loginBasicSchema);
    try {
        const data = await loginBasic(params);
        localStorage.setItem("token", data.token);
        localStorage.setItem("authScheme", "Basic");
        return redirect("/");
    } catch (err) {
        if (err instanceof AxiosError && err.response?.status === 401) {
            return new Error("Wrong username or password");
        }
        return new Error("Unknown Error");
    }
}

export default function Login() {
    const error = useActionData() as Error | undefined;

    return (
        <div className="min-h-screen bg-secondary flex items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">
                        Login to Emotional GPT
                    </CardTitle>
                    {error && <CardDescription className="text-center text-destructive">{error.message}</CardDescription>}
                </CardHeader>
                <CardContent>
                    <Form method="post" className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="usernameInput">Username</Label>
                            <Input id="usernameInput" type="text" placeholder="Username" name="username" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="passwordInput">Password</Label>
                            <Input
                                id="passwordInput"
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                        </div>
                        <Button className="w-full" type="submit">Sign In</Button>
                        <Button className="w-full" variant="outline">
                            Sign In with Google
                        </Button>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}