"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm SmartEdge AI Tutor. Ask me anything about WAEC, NECO, JAMB subjects, or SmartEdge Academy services. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setMessages([
        ...newMessages,
        { role: "assistant", content: data.response },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again or reach out on WhatsApp: 08109015332",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-40 bg-deep-blue hover:bg-deep-blue/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Open AI Chat Tutor"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </button>

      {open && (
        <div className="fixed bottom-20 left-3 right-3 sm:left-6 sm:right-auto z-40 w-auto sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col max-h-[70vh] sm:max-h-[500px]">
          <div className="bg-deep-blue text-white p-4 rounded-t-2xl flex items-center gap-3">
            <div className="w-8 h-8 bg-bright-yellow rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5 text-deep-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">SmartEdge AI Tutor</h3>
              <p className="text-xs text-white/70">Ask me anything about your exams</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="shrink-0 w-6 h-6 bg-deep-blue/10 rounded-full flex items-center justify-center mt-1">
                    <Bot className="h-3.5 w-3.5 text-deep-blue" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-deep-blue text-white rounded-br-md"
                      : "bg-gray-100 text-gray-700 rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="shrink-0 w-6 h-6 bg-forest-green/10 rounded-full flex items-center justify-center mt-1">
                    <User className="h-3.5 w-3.5 text-forest-green" />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex gap-2">
                <div className="shrink-0 w-6 h-6 bg-deep-blue/10 rounded-full flex items-center justify-center mt-1">
                  <Bot className="h-3.5 w-3.5 text-deep-blue" />
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                  <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
                </div>
              </div>
            )}
            <div ref={messagesEnd} />
          </div>

          <div className="p-3 border-t border-gray-100">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/30 focus:border-deep-blue"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="bg-deep-blue text-white p-2.5 rounded-full hover:bg-deep-blue/90 transition-colors disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
