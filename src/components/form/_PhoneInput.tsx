import React, {
  ChangeEvent,
  ClipboardEvent,
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  KeyboardEvent,
  useCallback, useMemo,
} from "react"

export interface IInputPhoneProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string
  name?: string
  type?: string
}

export const InputPhone = forwardRef(
  ({ className, name, type, ...rest }: IInputPhoneProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const PATTERN = useMemo(() => /\D/g, []);

    const getInputNumbersValue = useCallback((value: string) => {
      return value.replace(PATTERN, "")
    }, [PATTERN])

    const handlePhoneInput = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.target
        let inputNumbersValue = getInputNumbersValue(input.value)
        let formattedInputValue = ""
        const selectionStart = input.selectionStart

        if (!inputNumbersValue) {
          return (input.value = "")
        }

        if (input.value.length !== selectionStart) {
          return
        }

        if (["7", "8", "9"].includes(inputNumbersValue[0])) {
          if (inputNumbersValue[0] === "9") {
            inputNumbersValue = "7" + inputNumbersValue
          }

          const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7"
          formattedInputValue = firstSymbols + " "

          if (inputNumbersValue.length > 1) {
            formattedInputValue += "(" + inputNumbersValue.substring(1, 4)
          }
          if (inputNumbersValue.length >= 5) {
            formattedInputValue += ") " + inputNumbersValue.substring(4, 7)
          }
          if (inputNumbersValue.length >= 8) {
            formattedInputValue += "-" + inputNumbersValue.substring(7, 9)
          }
          if (inputNumbersValue.length >= 10) {
            formattedInputValue += "-" + inputNumbersValue.substring(9, 11)
          }
        } else {
          formattedInputValue = "+" + inputNumbersValue.substring(0, 16)
        }

        input.value = formattedInputValue
      },
      [getInputNumbersValue]
    )

    const handlePhoneKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      const input = event.target as HTMLInputElement
      if (event.key === "Backspace" && getInputNumbersValue(input.value).length === 1) {
        input.value = ""
      }

      return input
    }

    const handlePhonePaste = (event: ClipboardEvent<HTMLInputElement>) => {
      const pasted = event.clipboardData
      const input = event.target as HTMLInputElement
      const inputNumbersValue = getInputNumbersValue(input.value)

      if (pasted) {
        const pastedText = pasted.getData("Text")
        if (PATTERN.test(pastedText)) {
          input.value = inputNumbersValue
        }
      }
    }

    return (
      <>
        <input
          className={className}
          name={name}
          type={type}
          ref={ref}
          maxLength={18}
          onInput={handlePhoneInput}
          onKeyDown={handlePhoneKeyDown}
          onPaste={handlePhonePaste}
          {...rest}
        />
      </>
    )
  }
)

InputPhone.displayName = "FormInput"
