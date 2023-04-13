import React from "react";

export function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
  }