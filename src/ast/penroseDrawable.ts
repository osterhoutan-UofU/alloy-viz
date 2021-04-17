/**
 * @author Andrew Osterhout (osterhoutan)
 * 
 * Basic interface for ensuring items can be drawn with penrose (https://github.com/penrose/penrose).
 */

/**
 * This object can be converted to a penrose 
 */
export interface PenroseDrawable {
    
    /**
     * The label to use for visualizing the element.
     */
    label: string;

    /**
     * Output an penrose style string, 
     *  for use in a penrose substance file.
     *  based off of the provided penrose command schema.
     */
    toPenrose(style:PenroseStyleSchema): string;
}


/**
 * An interface for defining different command schemas to use when compiling the penrose substance file,
 * based off of an associated style file.
 */
export interface PenroseStyleSchema {
    
    /**
     * file path to the style file associated with this schema
     */
    style_file:string;

    /**
     * Command to draw a set.
     *  `style_file` needs to be defined to take 1 strings (w/ no space chars), to label the set.
     */
    set:string;

    /**
     * Command to make one set a subset of another.
     *  `style_file` needs to be able to take 2 strings (w/ no internal space chars), 
     *  to be associated w/ the two sets.
     * 
     * ORDER MATTERS !!
     *  + first parameter will be the subset (using previously provided labels)
     *  + second parameter will be the superset (using previously provided labels)
     */
    subset:string;

    /**
     * Command to draw a relation between two sets (usually a line).
     *  `style_file` needs to be able to take 3 string inputs (w/ no internal space chars)
     * 
     * ORDER MATTERS !!
     *  + first parameter will be the label for the relation.
     *  + second parameter will be the label of first set (source set in a pre-order) linked by the relation.
     *  + third parameter will be the label of the second set (dest set in a pre-order) linked by the relation.
     *      (important if one-way associative)
     */
    relation:string;

    /**
     * Command to designate a relation as oen way associative.
     *  `style_file` needs to be able to take 1 string input (w/ no internal space chars),
     *  that will be the label of the relation that needs to be set as one way associative.
     */
    oneWayAssoc:string;

    /**
     * Command to designate a relation to a set where the relation maps
     *   an element from the first set to a "subset"
     *   of elements in the second set.
     */
    sample:string;


    /**
     * Command to draw a singleton.
     * Must be able to take 1 string parameter as a label.
     */
    singleton:string;
} 