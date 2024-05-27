"use client";

import React, { useEffect, useState } from "react";
import { analyticsApp } from "@/shared";

export const HomeScreen: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    if (analyticsApp) {
      console.log("Firebase Analytics initialized");
      analyticsApp.logEvent("add_payment_info");
    }
  }, []);

  return (
    <div>
      <h1>Cogito</h1>
    </div>
  );
};
