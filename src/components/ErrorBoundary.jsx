import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.warn('[ErrorBoundary]', error.message, info?.componentStack);
  }

  render() {
    if (this.state.error) {
      // 出错时只渲染 fallback（默认 null = 隐藏），让其他 Section 正常显示
      if (typeof this.props.fallback === 'function') {
        return this.props.fallback(this.state.error);
      }
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}