"use client";
import { motion } from "framer-motion";

function BG1() {
  return (
    <>
      {/* 1 */}
      <div className="fixed top-[-150px] left-[-150px] h-[700px] w-[700px] rounded-full bg-orange-500/10 blur-[180px]" />
      <div className="fixed top-[25%] right-[-100px] h-[500px] w-[500px] rounded-full bg-orange-300/8 blur-[160px]" />
      <div className="fixed bottom-[-150px] left-[30%] h-[450px] w-[450px] rounded-full bg-amber-400/8 blur-[140px]" />
    </>
  );
}

function BG2() {
  return (
    <>
      {/* 2 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="bg-[linear-gradient(to_right,#f5f5f510_1px,transparent_1px), linear-gradient(to_bottom,#f5f5f510_1px,transparent_1px)] fixed inset-0 bg-[size:64px_64px]" />
        <div className="fixed top-[-100px] left-[-200px] h-[700px] w-[700px] rounded-full bg-orange-500/8 blur-[180px]" />
        <div className="fixed right-[-150px] bottom-[-100px] h-[600px] w-[600px] rounded-full bg-orange-300/8 blur-[160px]" />
      </div>
    </>
  );
}

function BG3() {
  return (
    <>
      {/* custome */}
      <div className="fixed top-0 left-0 h-[700px] w-[700px] rounded-full bg-orange-300/20 blur-[180px]" />
      <div className="fixed top-[30%] right-0 h-[600px] w-[600px] rounded-full bg-amber-400/20 blur-[180px]" />
      <div className="fixed bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[180px]" />
    </>
  );
}

export function BGAnimated() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          x: [0,   50,0],
          y: [0, 300, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 0, 200, 0],
          y: [0, -200, -300, 0],
          scale: [0.7, 1.1, 0.7],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2/3 -right-10 h-[600px] w-[600px] rounded-full bg-red-500/20 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 300, 0],
          y: [0, -80, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-300px] left-[10%] h-[600px] w-[600px] rounded-full bg-pink-500/20 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 300, 0],
          y: [0, -80, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-300px] right-[10%] h-[600px] w-[600px] rounded-full bg-yellow-500/20 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 300, 0],
          y: [0, -80, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-300px] left-50%] h-[600px] w-[600px] rounded-full bg-green-500/20 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 300, 0],
          y: [0, -80, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[30%] h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[100px]"
      />
    </div>
  );
}
export function Background() {
  return (
    <div className="pointer-events-none relative inset-0 -z-10 overflow-hidden">
      <BGAnimated />
    </div>
  );
}
