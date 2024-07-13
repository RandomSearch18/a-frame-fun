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
