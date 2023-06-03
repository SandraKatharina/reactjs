import React from "react";
import "./style.css";
import { Link, Route } from "wouter";

export default function App() {
  return (
    <>
      <div>
        <h1>Something</h1>
      </div>
      <Link href="/about">ABOUT ME</Link>
      <Route path="/about">
        <h1>About Page</h1>
        <p>
          <Link href="/">go home</Link>
        </p>
      </Route>
    </>
  );
}
