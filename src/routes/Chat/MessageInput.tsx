import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Send, Trash, Upload } from "lucide-react";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Form, useNavigation, useSubmit } from "react-router-dom";

export default function MessageInput() {
  const navigation = useNavigation();
  const isLoading =
    navigation.state == "submitting" || navigation.state == "loading";
  const [message, setMessage] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [images, setImages] = useState<File[]>([]);
  const submit = useSubmit();

  const handleFilesInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const input = e.target;
    const files = input.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files.item(i);
        if (!file) break;
        images.push(file);
        setImages([...images]);
      }
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key == "Enter") {
      if (e.shiftKey) return;
      e.preventDefault();
      const textarea = e.target as HTMLTextAreaElement;
      submitForm(textarea.form);
    }
  };

  const handleRemoveFile = (index: number) => {
    images.splice(index, 1);
    setImages([...images]);
  };

  const handleSubmitButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button = e.target as HTMLButtonElement;
    submitForm(button.form);
  };

  const submitForm = (form: HTMLFormElement | null) => {
    if (message != "") {
      submit(form);
      setMessage("");
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <div className="p-4">
      <Form method="post">
        <div className="flex flex-col gap-2">
          <Separator className="mb-1" />
          <div className="flex gap-3">
            {images.map((item, index) => (
              <div key={index} className="relative">
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute -right-2 -top-2 p-0 w-6 h-6"
                  onClick={() => handleRemoveFile(index)}
                >
                  <Trash className="w-3 h-3" />
                </Button>
                <img src={URL.createObjectURL(item)} className="h-20 rounded" />
              </div>
            ))}
          </div>
          <div className="flex gap-2 items-end">
            <input name="action" value="put-message" type="hidden" />
            <Textarea
              ref={textareaRef}
              rows={1}
              name="text"
              placeholder="Input message..."
              className="resize-none min-h-[40px] max-h-[120px]"
              onKeyDown={handleKeyDown}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isLoading}
            />
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="secondary"
                asChild
                disabled={isLoading}
              >
                <div className="flex">
                  <Label htmlFor="messageFiles" className="cursor-pointer">
                    <Upload />
                  </Label>
                  <Input
                    className="hidden"
                    id="messageFiles"
                    name="attactments"
                    type="file"
                    multiple
                    onChange={handleFilesInput}
                    disabled={isLoading}
                  />
                </div>
              </Button>
              <Button
                size="icon"
                onClick={handleSubmitButton}
                disabled={isLoading}
              >
                <Send />
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
