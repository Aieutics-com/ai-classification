"use client";

import type { ReactNode } from "react";
import React from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // Keep UI safe. Errors will show in dev overlay.
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-md w-full rounded-xl border border-[var(--color-grey-light)] bg-[var(--color-white)] p-6">
            <p className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">
              Something went wrong
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] leading-relaxed">
              Refresh the page. If the problem persists, copy the URL and share
              it with us.
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

