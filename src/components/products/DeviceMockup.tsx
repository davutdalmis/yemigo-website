"use client";

import { type ReactNode } from "react";

interface DeviceMockupProps {
  type: "desktop" | "phone" | "browser";
  color: string;
  children?: ReactNode;
}

export default function DeviceMockup({ type, color, children }: DeviceMockupProps) {
  if (type === "phone") {
    return (
      <div className="mx-auto w-[260px] md:w-[300px]">
        <div className="relative rounded-[2.5rem] border-[6px] border-gray-800 bg-gray-800 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-800 rounded-b-2xl z-10" />
          {/* Screen */}
          <div
            className="relative overflow-hidden rounded-[2rem] aspect-[9/19.5]"
            style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)` }}
          >
            {children || (
              <div className="flex items-center justify-center h-full">
                <div
                  className="w-16 h-16 rounded-2xl opacity-30"
                  style={{ backgroundColor: color }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (type === "browser") {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white rounded-md px-3 py-1.5 text-xs text-gray-400 border border-gray-200">
                app.yemigo.com
              </div>
            </div>
          </div>
          {/* Content */}
          <div
            className="aspect-[16/10] overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${color}10, ${color}05)` }}
          >
            {children || (
              <div className="flex items-center justify-center h-full">
                <div
                  className="w-20 h-20 rounded-2xl opacity-20"
                  style={{ backgroundColor: color }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Desktop
  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-xl border border-gray-200 bg-gray-800 shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-3 text-xs text-gray-500">YemiGO POS</span>
        </div>
        {/* Screen */}
        <div
          className="aspect-[16/10] overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${color}12, ${color}05)` }}
        >
          {children || (
            <div className="flex items-center justify-center h-full">
              <div
                className="w-24 h-24 rounded-3xl opacity-20"
                style={{ backgroundColor: color }}
              />
            </div>
          )}
        </div>
      </div>
      {/* Stand */}
      <div className="mx-auto w-24 h-4 bg-gray-300 rounded-b-lg" />
      <div className="mx-auto w-40 h-2 bg-gray-200 rounded-b-lg" />
    </div>
  );
}
