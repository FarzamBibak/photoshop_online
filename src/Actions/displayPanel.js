// displayPanel.js

function displayPanel(count) {
    return {
        type:
            "displayPanel",

        payload:
        {
            "display": count
        }
    }
}

export default displayPanel;
