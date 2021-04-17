/**
 * @author Andrew Osterhout
 * 
 * basic interface for typing, just lets me enure anything I work with for visualizing 
 *  is able to be converted to svg.
 */

//! waisted time trying to create an svg grammar for type checking output, but templates do not allow recursion 🙄
// export type SVGElement = `${SPACE}<svg${SPACE}${Attributes}>${SPACE}${SVGInternalElements}${SPACE}</svg>${SPACE}`;
// type Attributes = `${AttributeName}="${AttributeValue}"${SPACE}${Attributes}`|'';
// type AttributeName = `${LETTER}${AttributeName}`|`-${AttributeName}`|'';
// type AttributeValue = `${LETTER}${AttributeValue}`|`${NUMBER}${AttributeValue}`|`${SYMBOL}${AttributeValue}`|'';
// type SPACE = `${SPACE}${SPACE}`|''|' '|'\n'|'\t';
// type LETTER = 'a'|'b'|'c'|'d'|'e'|'f'|'g'|'h'|'i'|'j'|'k'|'l'|'m'|'n'|'o'|'p'|'q'|'r'|'s'|'t'|'u'|'v'|'w'|'x'|'y'|'z'|'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'X'|'Y'|'Z';
// type NUMBER = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9';
// type SYMBOL = '\''|'"'|'`'|'~'|':'|';'|'_'|'-'|'+'|'='|'$'|'.'|','|'*'|'/'|'\\'|'%'|'^'|'#'|'@'|'('|')'|'['|']'|'{'|'}'|'?'|'!'|'<'|'>'|'&'|'|';

export function createSVGElement(kind: string): SVGElement {
    return document.createElementNS("http://www.w3.org/2000/svg", kind);
}

export interface svgDrawable {
    label:string;
    toSVG(): SVGElement;
}