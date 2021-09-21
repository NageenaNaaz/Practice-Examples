const rewire = require("rewire")
const build = rewire("./build")
const printErrors = build.__get__("printErrors")
const copyPublicFolder = build.__get__("copyPublicFolder")
// @ponicode
describe("printErrors", () => {
    test("0", () => {
        let callFunction = () => {
            printErrors("deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125", "Mock Error Message")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            printErrors("invoice transaction at O'Connell, Beahan and Gerhold using card ending with ***6715 for ARS 840.46 in account ***86953668", "No error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            printErrors("deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125", "invalid option")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            printErrors("deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125", "Grader id does not match submission id that was passed in")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            printErrors("deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125", ["Message box: foo; bar\n", "ValueError", "multiple errors occurred", "too many arguments", "invalid choice", "error\n", "error"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            printErrors(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("copyPublicFolder", () => {
    test("0", () => {
        let callFunction = () => {
            copyPublicFolder()
        }
    
        expect(callFunction).not.toThrow()
    })
})
