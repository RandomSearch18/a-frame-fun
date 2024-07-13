import { Feature } from "./featuresTo3D"
import { element, Position2D } from "./utilities"

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
      return element("a-plane", {
        position: `${start[0]} 0.01 ${start[1]}`,
        rotation: "-90 0 0",
        width: 0.2,
        height: 0.2,
        color: "#000",
      })
    })

    console.log(lines)
    return element("a-entity", {}, lines)
  }
}
