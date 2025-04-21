
export interface Position {
  x: number;
  y: number;
}

export interface WindowType {
  id: string;
  title: string;
  content: string;
  width: number;
  height: number;
  isMinimized: boolean;
  isMaximized: boolean;
  position: Position;
}

export interface DesktopIconType {
  id: string;
  title: string;
  icon: string;
  window: WindowType;
}

export interface TaskbarItemType {
  id: string;
  title: string;
  isActive: boolean;
}
