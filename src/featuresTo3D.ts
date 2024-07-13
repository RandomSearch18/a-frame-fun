/** Converts map features into 3D A-Frame objects */

import { element } from "./utilities"

export abstract class Feature {
  abstract renderToElement(): HTMLElement
}

export function renderScene(
  features: Feature[],
  size: [number, number],
  targetElement: HTMLElement
) {
  const groundPlane = element("a-plane", {
    position: "0 0 0",
    rotation: "-90 0 0",
    width: size[0],
    height: size[1],
    color: "#516B33",
  })

  targetElement.childNodes.forEach((child) => child.remove())
  targetElement.appendChild(groundPlane)
  features.forEach((feature) => {
    targetElement.appendChild(feature.renderToElement())
  })
}
