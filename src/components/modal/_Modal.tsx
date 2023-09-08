import { FC, ReactNode, useEffect } from "react"

import { ModalPortal } from "./fragments"

interface IModal {
  children: ReactNode
  isOpen: boolean
  setOpen: () => void
}

export const Modal: FC<IModal> = ({ children, isOpen, setOpen }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
  }, [isOpen])

  if (!isOpen) return null

  return (
    <ModalPortal>
      <div
        onClick={setOpen}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-3.5 backdrop-blur-lg"
      >
        {children}
      </div>
    </ModalPortal>
  )
}
