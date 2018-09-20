import * as React from 'react';

declare namespace F7Popup {
  interface Props {
    slot? : string
    id? : string | number
    className? : string
    style? : React.CSSProperties
    tabletFullscreen? : boolean
    opened? : boolean
    closeByBackdropClick? : boolean
    backdrop? : boolean
    animate? : boolean
    color? : string
    colorTheme? : string
    textColor? : string
    bgColor? : string
    borderColor? : string
    rippleColor? : string
    themeDark? : boolean
    onPopupOpen? : (event?: any) => void
    onPopupOpened? : (event?: any) => void
    onPopupClose? : (event?: any) => void
    onPopupClosed? : (event?: any) => void
  }
}
declare class F7Popup extends React.Component<F7Popup.Props, {}> {
  onOpen(event? : any) : unknown
  onOpened(event? : any) : unknown
  onClose(event? : any) : unknown
  onClosed(event? : any) : unknown
  open(animate? : any) : unknown
  close(animate? : any) : unknown
}
export default F7Popup;