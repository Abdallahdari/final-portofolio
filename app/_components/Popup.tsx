"use client";

import { Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SendMassege } from "../_lib/action";
import { toast, ToastContainer } from "react-toastify";
export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Track current route [^1]

  // Close popup when route changes
  useEffect(() => {
    console.log("Route changed to:", pathname);
    setIsOpen(false);
  }, [pathname]);
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      SendMassege(formData);
      toast.success("Message sent successfully!", {
        autoClose: 1500,
        onClose: () => {
          window.location.href = "/"; // Redirect to homepage
        },
      });
      setIsOpen(false);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };
  return (
    <div className="relative">
      <ToastContainer />
      <button
        className="fixed bottom-7 right-14 z-50 cursor-pointer hover:scale-110 transition-all duration-300 py-4 px-4 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle contact form"
      >
        <Mail className="h-6 w-6" />
      </button>
      {isOpen && (
        <form name="_next" onSubmit={handlesubmit}>
          <Card className="fixed bottom-28 right-14 z-50 w-[calc(100vw-4rem)] max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-xl animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="your@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="Phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full cursor-pointer" type="submit">
                Send Message
              </Button>
            </CardFooter>
          </Card>
        </form>
      )}
    </div>
  );
}
