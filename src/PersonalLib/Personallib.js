
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