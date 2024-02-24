var StackingIndex;
(function (StackingIndex) {
    StackingIndex[StackingIndex["None"] = 0] = "None";
    StackingIndex[StackingIndex["DropDown"] = 1000] = "DropDown";
    StackingIndex[StackingIndex["Overlay"] = 2000] = "Overlay";
})(StackingIndex || (StackingIndex = {}));
var mySelecBoxStacking = StackingIndex.DropDown;
console.log(JSON.stringify(mySelecBoxStacking));
