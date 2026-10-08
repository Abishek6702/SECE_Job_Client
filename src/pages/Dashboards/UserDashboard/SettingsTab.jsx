import React from 'react';
import { Settings } from "lucide-react";

const SettingsTab = () => (
  <div className="flex-1 bg-[#F9FAFC] rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 h-full w-full">
    <Settings size={48} className="mb-4 text-gray-300" />
    <h2 className="text-2xl font-semibold text-gray-800">Profile Settings</h2>
    <p className="text-lg font-medium mt-2">Settings content will go here</p>
  </div>
);

export default SettingsTab;
