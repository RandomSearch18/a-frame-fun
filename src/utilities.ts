export type Position2D = [number, number]

export function element(
  tag: string,
  attributes: Record<string, string | number>,
  children: Node[] = []
): HTMLElement {
  const result = document.createElement(tag)
  Object.entries(attributes).forEach(([key, value]) => {
    result.setAttribute(key, value)
  })
  children.forEach((child) => result.appendChild(child))
  return result
}

export function distanceBetween(a: Position2D, b: Position2D): number {
  const [x1, y1] = a
  const [x2, y2] = b
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}
