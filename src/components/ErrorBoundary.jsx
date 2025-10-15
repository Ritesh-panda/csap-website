// src/components/ErrorBoundary.jsx
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("Uncaught error:", error, info);
    this.setState({ info });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-2xl bg-white/90 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
            <p className="text-sm text-gray-700 mb-4">
              The app hit an unexpected error. The console has more details.
            </p>
            <details className="text-xs text-gray-600 whitespace-pre-wrap">
              {String(this.state.error)}
              {this.state.info ? `\n\n${this.state.info.componentStack}` : ""}
            </details>
            <div className="mt-4">
              <button onClick={() => window.location.reload()} className="px-4 py-2 rounded bg-blue-600 text-white">
                Reload
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
