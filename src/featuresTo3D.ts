/** Converts map features into 3D A-Frame objects */

export function element(
  tag: string,
  attributes: Record<string, string | number>
) {
  const result = document.createElement(tag)
  Object.entries(attributes).forEach(([key, value]) => {
    result.setAttribute(key, value)
  })
  return result
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
  //   console.log(groundPlane)
  targetElement.childNodes.forEach((child) => child.remove())
  targetElement.appendChild(groundPlane)
}
