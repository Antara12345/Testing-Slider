import {render,screen,fireEvent} from "@testing-library/react"
import Slider from "./Slider"

describe("Slider Testing",function(){
    it("question should be inside the Slider component",function(){
        render(<Slider/>)

        let qn=screen.getByTestId("slider")
        expect(qn).toBeInTheDocument()
    })
    it("should have a next button",function(){
        render(<Slider/>)

        let next=screen.getByText("Next")
        expect(next).toBeInTheDocument()
    })

    it("should have a prev button",function(){
        render(<Slider/>)
        let next=screen.getByText("Next")
        fireEvent.click(next)
        let prev=screen.getByText("Prev")
        expect(prev).toBeInTheDocument()
    })
    // it("Prev button should be disabled if on the first question",function(){
    //     render(<Slider/>)
    //     let next=screen.getByText("Next")
    //     fireEvent.click(next)
    //     let prev=screen.getByText("Prev")
    //     fireEvent.click(prev)
        
    //     expect(prev).toBe(true)
    // })
    // it.only("Next button should be disabled if on the last question",function(){
    //     render(<Slider/>)
    //     let next=screen.getByText("Next")
    //     fireEvent.click(next)
    //     fireEvent.click(next)
    //     fireEvent.click(next)
    //     fireEvent.click(next)
    //     fireEvent.click(next)
    //     expect(next).toBeUndefined()
    // })
    it("Should Update Question by Clicking Next or Prev Buttons", () => {
        render(<Slider />)
        let next = screen.getByText("Next")
        let question = screen.getByTestId("question")
        expect(question).toHaveTextContent("first Slide")
        fireEvent.click(next)
        expect(question).toHaveTextContent("second Slide")
    })
    it("Should Update Answer by Clicking Next or Prev Buttons", () => {
        render(<Slider />)
        let next = screen.getByText("Next")
        let answer = screen.getByTestId("answer")
        expect(answer).toHaveTextContent("hello welcome to masai school")
        fireEvent.click(next)
        expect(answer).toHaveTextContent("hello welcome to masai school-1")
    })
    
    

})