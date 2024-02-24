enum StackingIndex {
    None = 0,
    DropDown = 1000,
    Overlay = 2000
}

const mySelecBoxStacking: StackingIndex = StackingIndex.DropDown;

console.log(JSON.stringify(mySelecBoxStacking));