import useToggle from "../useToggle";
import { renderHook, act } from '@testing-library/react';
import { it, expect, describe } from "vitest";

describe("useToggle Hook", () => {
    it("should initialize with default value as false", () => {
        const { result } = renderHook(() => useToggle());

        expect(result.current.isToggled).toBe(false)
    })
    it("should initialize with the provided initial value", () => {
        const {result} = renderHook(() => useToggle(true))

        expect(result.current.isToggled).toBe(true)
    })
    it("should toggle the state when the toggle function is called", () => {
        const {result} = renderHook(() => useToggle())
        act(() => {
            result.current.toggle()
        })
        expect(result.current.isToggled).toBe(true) 
    })
    it("should return to false when toggled twice", () => {
        const {result} = renderHook(() => useToggle())

        act(() => {
            result.current.toggle()
            result.current.toggle()
        })

        expect(result.current.isToggled).toBe(false)
    })
})