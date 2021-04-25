---
import {} from './'
---
/**
 * @author Andrew Osterhout (osterhoutan)
 * Basic alloy parser for quick and dirty parsing 
 *  of alloy .als files into a penrose friendly .sub file of simmilar meaning.
 */


/* ========================================================================== */
/*                            MAIN / STARTING RULE                            */
/* ========================================================================== */

 r_file := r_statement r_file $ | r_command r_file $ | $




/* ========================================================================== */
/*                               COMMAND RULE(S)                              */
/* ========================================================================== */
//? for now will be parsed but mostly ignored

r_command := 'lsit of command rules' '\n' | 'seperated by or bars' '\n'
            | 'with \n after to terminate cmd' '\n'






/* ========================================================================== */
/*                              STATEMENT RULE(S)                             */
/* ========================================================================== */
//? for now data from these will be parsed but only sigs and posisbly facts used

// r_statements := r_statement r_statements | ''

r_statement := r_sig | 'tmp'


/* ============================ Signature Rule(s) =========================== */



r_sig := r_sig_def '\n'
        | r_sig_def '{' r_sig_relation_defs '}'
        | r_sig_def '{' '}' '{' r_sig_facts '}'
        | r_sig_def '{' r_sig_relation_defs '}' '{' r_sig_facts '}'



r_sig_def := r_sig_mod? 'sig' r_name r_extend?



r_sig_relation_defs := 

