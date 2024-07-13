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
      return element("a-entity", {
        line: `start: ${start[0]} 0 ${start[1]}; end: ${end[0]} 0 ${end[1]}; color: #333`,
      })
    })

    console.log(lines)
    return element("a-entity", {}, lines)
  }
}
