import React from 'react';
import drawCircle from '../../utilities/canvasLoadAnimation';

function Mem(props){
    const {totalMem, usedMem, memUseage,freeMem} = props.memData;
    const canvas = document.querySelector(`.${props.memData.memWidgetId}`);
    drawCircle(canvas,memUseage*100);
    const totalMemInGB = (totalMem/Math.pow(1024, 3));
    const freeMemInGB = Math.floor(freeMem/Math.pow(1024, 3));
    return(
        <div class="col-sm-3 mem">
            <h3>Memory Useage</h3>
            <div className="canvas-wrapper">
                <canvas className={props.memData.memWidgetId} width="200" height="200"></canvas>
                <div className="mem-text">
                    {memUseage*100}%
                </div>
            </div>
            <div>
                Total Memory: {totalMemInGB}gb
            </div>
            <div>
                Free Memory: {freeMemInGB}gb
            </div>
        </div>
        
    )
}

export default Mem;