declare global {
  interface Window {
    Vue: any
  }
}

export interface InterfaceLayout {
  width: string
  height: string
  background?: string
  backgroundImage?: string
}

export interface InterfaceImgload {
  type: string
  message: string
}

export interface InterfaceLayoutStyle {
  width: number
  height: number
}

export interface InterfaceModeHandle {
  contain: () => {}
  cover: () => {}
  default: () => {}
}

export interface InterfaceRenderImgLayout {
  scale: number
  imgStyle: InterfaceLayoutStyle
  layoutStyle: InterfaceLayoutStyle
}

export interface InterfaceMessageEvent {
  type: string
  event?: Event
  change?: InterfaceAxis
}

export interface InterfaceAxis {
  x: number
  y: number
}

export interface InterfaceImgAxis extends InterfaceAxis {
  scale: number
  rotate: number
}

export interface InterfaceTransformStyle {
  width: string
  height: string
  transform: string
}
