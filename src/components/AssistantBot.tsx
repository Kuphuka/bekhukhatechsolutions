import { useState, type FormEvent, type ChangeEvent } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import { sendToChatApi } from "@/lib/chat";

const defaultMessages = [
  { role: "assistant", text: "Hi there! I’m Bekhukha’s digital assistant. Ask me about websites, mobile apps, animations, or how to get started." },
];

const suggestions = [
  "Tell me about your website packages",
  "How much are Android/iOS apps?",
  "Do you do web animations?",
];

const getAutoReply = (message: string) => {
  const normalized = message.toLowerCase();
  if (normalized.includes("website")) {
    return "We build polished business websites from R2,000 with smooth animations, responsive design, and fast loading."
  }
  if (normalized.includes("app") || normalized.includes("android") || normalized.includes("ios")) {
    return "Yes — we build Android and iOS apps starting at R3,500, including app store-ready setup and mobile-first UX."
  }
  if (normalized.includes("animation") || normalized.includes("animated") || normalized.includes("motion")) {
    return "We can add modern web animations to your site — subtle transitions, interactive hover effects, and smooth content reveals."
  }
  if (normalized.includes("price") || normalized.includes("cost") || normalized.includes("fee")) {
    return "Our current rates: websites from R2,000, mobile apps from R3,500, logos from R450, and maintenance from R290/month."
  }
  if (normalized.includes("contact") || normalized.includes("chat") || normalized.includes("whatsapp")) {
    return "You can reach us directly on WhatsApp at +27799844222, or use the enquiry form on the website to get personalized help."
  }
  return "I’m here to help! Tell me what you need — website development, mobile apps, animations, or support for your business."
};

const AssistantBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(defaultMessages);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input.trim()) {
      return;
    }

    const userMessage = input.trim();
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMessage },
    ]);
    setInput("");
    setLoading(true);

    const apiReply = await sendToChatApi(userMessage);
    const assistantReply = apiReply ?? getAutoReply(userMessage);

    setMessages((prev) => [
      ...prev,
      { role: "assistant", text: assistantReply },
    ]);
    setLoading(false);
  };

  const handleQuickReply = async (reply: string) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", text: reply },
    ]);

    const apiReply = await sendToChatApi(reply);
    const assistantReply = apiReply ?? getAutoReply(reply);

    setMessages((prev) => [
      ...prev,
      { role: "assistant", text: assistantReply },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[325px] sm:w-[360px] rounded-3xl border border-border/70 bg-white/95 shadow-2xl backdrop-blur-xl overflow-hidden">
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Bekhukha Assistant</p>
              <p className="text-xs text-primary-foreground/80">Ask questions about services, pricing, or next steps.</p>
            </div>
            <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 hover:bg-white/20">
              <X size={16} />
            </button>
          </div>
          <div className="max-h-[420px] overflow-y-auto px-4 py-4 space-y-4 bg-surface">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === "assistant" ? "rounded-3xl bg-white p-3 text-sm text-foreground shadow-sm" : "self-end rounded-3xl bg-primary text-primary-foreground p-3 text-sm shadow-sm"}>
                <p>{message.text}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-border/70 bg-white px-4 py-4">
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => handleQuickReply(suggestion)}
                  className="rounded-full border border-border px-3 py-1 text-xs text-foreground hover:bg-primary/10 transition"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <label className="sr-only" htmlFor="assistant-input">Type a message</label>
              <input
                id="assistant-input"
                value={input}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
                className="flex-1 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Ask me anything"
              />
              <button type="submit" disabled={loading} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-60">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-2xl hover:scale-105 transition-transform"
        aria-label="Toggle assistant chat"
      >
        {loading ? <span className="text-sm font-semibold">...</span> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default AssistantBot;
