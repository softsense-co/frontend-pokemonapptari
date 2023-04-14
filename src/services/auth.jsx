import React from "react";

export function isLoggedIn() {
    console.log("authToken:", localStorage.getItem("authToken"));
    return localStorage.getItem('authToken') !== null;
  }