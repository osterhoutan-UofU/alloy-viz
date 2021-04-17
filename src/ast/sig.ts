/**
 * @author Andrew Osterhout
 * 
 * Basic representation of a an alloy signature "sig" in ts for use in visualizations. 
 */

import {svgDrawable, createSVGElement} from './svgDrawable';

export class sig implements svgDrawable  {

    constructor(name:string, parent:string, )


    toSVG() : SVGElement {
        return createSVGElement("circle");
    }
}