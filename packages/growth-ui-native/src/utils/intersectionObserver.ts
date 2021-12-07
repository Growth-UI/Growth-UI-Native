import { Dimensions } from "react-native";
import { RefObject } from "react";

class IntersectionObserver {
  private callback;
  private options;
  private interval: NodeJS.Timer | undefined;
  private visible: boolean = false;

  constructor(
    callback: IntersectionObserverCallback,
    options: IntersectionObserverOptions = { rootMargin: 0, thresholds: 0 }
  ) {
    this.callback = callback;
    this.options = options;
  }

  private isIntersecting(
    x: number,
    y: number,
    width: number,
    height: number,
    pageX: number,
    pageY: number
  ) {
    const window = Dimensions.get("window");
    const { rootMargin, thresholds } = this.options;
    const rectTop = pageY;
    const rectBottom = pageY + height;

    const prev = this.visible;

    this.visible = rectTop + rootMargin + height * (thresholds / 100) <= window.height;

    if (prev !== this.visible) {
      this.callback({
        isIntersecting: this.visible,
        rect: {
          top: rectTop,
          bottom: rectBottom,
        },
      });
    }
  }

  observe(node: RefObject<any>) {
    if (this.interval || !node.current || typeof node.current.measure !== "function") {
      return;
    }

    this.interval = setInterval(() => {
      node.current.measure(this.isIntersecting.bind(this));
    }, 100);
  }

  unobserve() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

type Rect = {
  top: number;
  bottom: number;
};

type IntersectionObserverEntry = {
  isIntersecting: boolean;
  rect: Rect;
};

type IntersectionObserverCallback = (entry: IntersectionObserverEntry) => void;

type IntersectionObserverOptions = {
  rootMargin: number;
  thresholds: number;
};

export default IntersectionObserver;
