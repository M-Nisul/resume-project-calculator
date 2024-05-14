/*global document*/

const memory = (() => {
    let memory = 0;
    const display = document.getElementById('memory');

    const displayMemory = () => {
        display.innerHTML = memory.toString();
    }

    const addMemory = (num) => {
        memory += num;
    }

    const removeMemory = (num) => {
        memory -= num;
    }

    const clearMemory = () => {
        memory = 0;
    }

    const recallMemory = (dis) => {
        dis.innerHTML = memory.toString();
    }

    return {displayMemory, addMemory, removeMemory, clearMemory, recallMemory}
})();

export default memory;

