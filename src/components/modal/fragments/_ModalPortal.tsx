import { FC, ReactNode, useLayoutEffect, useRef } from "react"
import { createPortal } from "react-dom"

interface IModalPortal {
  children: ReactNode
}

export const ModalPortal: FC<IModalPortal> = ({ children }) => {
  let modalRootElement = document.getElementById("modal-root")

  if (!modalRootElement) {
    modalRootElement = document.createElement("div")
    modalRootElement.setAttribute("id", "modal-root")
    document.body.appendChild(modalRootElement)
  }

  const modalContainer = useRef(document.createElement("div"))

  useLayoutEffect(() => {
    const currentEle = modalContainer.current
    modalRootElement?.appendChild(currentEle)

    return () => {
      modalRootElement?.removeChild(currentEle)
    }
  })

  return createPortal(children, modalContainer.current)
}
