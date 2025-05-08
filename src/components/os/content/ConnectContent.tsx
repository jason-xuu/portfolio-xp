import React from "react";
import emailjs from "emailjs-com";
import { toast } from "@/components/ui/use-toast"; 
import { useClickSound } from "@/utils/sfx";
import Turnstile from "react-turnstile";       

const ConnectContent: React.FC = () => {
  const { playClickSound } = useClickSound();
  const [turnstileToken, setTurnstileToken] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    playClickSound();
    if (!turnstileToken) {
      toast({
        title: "⚠️ Verification Required",
        description: "Please complete the CAPTCHA before sending.",
        variant: "destructive",
      });
      return;
    }    
    setIsSending(true);
  
    emailjs
      .sendForm(
        "service_usgr7ev",
        "template_gjoigzn",
        e.currentTarget,
        "NhszpOYLhIuvx_c-U"
      )
      .then(() => {
        toast({
          title: "✅ Message Sent!",
          description: "I'll get back to you as soon as I can.",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: "❌ Failed to send",
          description: "Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => setIsSending(false));
      e.currentTarget.reset();
  };
  
  const socialLinks = [
    {
      id: "github",
      name: "GitHub",
      icon: "🐱",
      url: "https://github.com/jason-xuu",
      description: "Check out my code and projects",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/jsonxuu",
      description: "Connect with me professionally",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-blue-800 mb-4">Connect With Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-700 mb-4">Find Me Online</h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl mr-3">
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700">{link.name}</h4>
                    <p className="text-sm text-gray-500">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h3 className="font-semibold text-blue-700 mb-2">Let's Connect!</h3>
            <p className="text-gray-600">
              I'm always interested in discussing new projects, opportunities,
              or just chatting about tech. Don't hesitate to reach out through
              any of the channels above or the contact form.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-700 mb-4">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="title"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            
            <Turnstile
              sitekey="0x4AAAAAABadcfc17kKDaj6Q"
              onSuccess={(token) => setTurnstileToken(token)}
              className="my-4"
            />

            <div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full font-medium py-2 px-4 rounded-md transition-colors ${
                isSending
                  ? "bg-blue-300 text-white cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConnectContent;
