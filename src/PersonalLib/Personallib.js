
/**
 * @param {number} duration 
 * @param {(progress : number) => {}} onUpdate
 * @param {() => {}} onComplete
 * @description Animate is a function that provides a animation timeline (non-breakable);
 */
export const Animate = (duration , onUpdate , onComplete) => {
    var start = performance.now() ;
    function step(data){
        var elapsedtime = (data - start) / 1000 ;
        var progress = Math.max(0 , Math.min(1 , elapsedtime / duration));

        onUpdate(progress);
        if(progress < 1){
            requestAnimationFrame(step)
        }else{
            onComplete()
        }
    }
    requestAnimationFrame(step);
}

/**
 * @param {string} Selector
 * @returns {HTMLElement}
 */
export const $Get = (Selector) => {
    return document.querySelector(Selector)
}

/**
 * @param {string} Selector
 * @returns {NodeListOf<HTMLElement>}
 */
export const $GetAll = (Selector) => {
    return document.querySelectorAll(Selector);
}

/**
 * @param {string} Id
 * @returns {HTMLElement}
 */
export const $GetById = (Id) => {
    return document.getElementById(Id) ;
}

/**
 * @param {HTMLElement} El 
 * @param {string} Value
 * @param {"add" | "remove" | "toggle"} Operation
 */

export const $AlterClass = (El , Value , Operation) => {
    El.classList[Operation](Value);
}

/**
 * @param {HTMLElement} Parent
 * @param {HTMLElement} ToInsertNode
 * @param {HTMLElement} ReferenceNode
 */
export const $InsertBefore = (Parent , ReferenceNode , ToInsertNode) => {
    Parent.insertBefore(ToInsertNode , ReferenceNode);
}

/**
 * @param {HTMLElement} Parent 
 * @param {HTMLElement} ToInsertNode
 * @param {number} Index
 */
export const $InsertAtIndex = (Parent , ToInsertNode , Index) => {
    Parent.insertBefore(ToInsertNode , Parent.children[Index]);
}


