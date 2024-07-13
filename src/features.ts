import { THREE } from "aframe"
import { Feature } from "./featuresTo3D"
import { distanceBetween, element, Position2D } from "./utilities"

interface LineOptions {
  parts: [Position2D, Position2D][]
}

interface RoadOptions extends LineOptions {}

export class RoadFeature extends Feature {
  data: RoadOptions

  constructor(options: RoadOptions) {
    super()
    this.data = options
  }

  renderToElement(): HTMLElement {
    const lines = this.data.parts.map(([start, end]) => {
      const midpoint: Position2D = [
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
      ]

      return element("a-box", {
        position: midpoint.join(" "),
        width: 5,
        height: 0.05,
        depth: distanceBetween(start, end),
        rotation: `0 ${THREE.MathUtils.radToDeg(
          Math.atan2(end[0] - start[0], end[1] - start[1])
        )} 0`,
        color: "#333",
      })
    })

    console.log(lines)
    return element("a-entity", {}, lines)
  }
}
