"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold uppercase">Error</h1>
          <p className="py-6">
            <span className="loading loading-infinity loading-lg text-primary"></span>
            <span className="loading loading-infinity loading-lg text-secondary"></span>
            <span className="loading loading-infinity loading-lg text-accent"></span>
            <span className="loading loading-infinity loading-lg text-neutral"></span>
            <span className="loading loading-infinity loading-lg text-info"></span>
            <span className="loading loading-infinity loading-lg text-success"></span>
            <span className="loading loading-infinity loading-lg text-warning"></span>
            <span className="loading loading-infinity loading-lg text-error"></span>
          </p>
          <button className="btn btn-primary uppercase">
            <Link href="/">Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
