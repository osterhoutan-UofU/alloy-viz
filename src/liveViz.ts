/**
 * <brief>
 * 
 * @file liveViz
 * @author Andrew Osterhout (osterhoutan)
 * 
 */

'use strict';
import { FSWatcher } from 'fs';
import { stringify } from 'querystring';
import * as vscode from 'vscode'; 
import { TextDocument, Uri } from 'vscode';
import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	Executable,
	ExecutableOptions,
	StreamInfo,
	Middleware,
	Command,
	CancellationToken,
	ProvideCodeLensesSignature,
	ProvideDocumentLinksSignature,
	DocumentLink,
	SymbolKind
} from 'vscode-languageclient';



export class liveViz {

    // - Class members ----
    vizs: Record<string, visualizer>;
    curEditor: TextDocument;

    /**
     * Set up the live viz panel.
     * including registering handlers for events and the like
     */
    constructor() {
        this.vizs = {};
    }

    
    //* =====================
    //*       Methods
    //* =====================

    /**
     * Update teh visualizations in the webview to match what is specified in the 
     *   {@code fileName} file.
     * @param fileName the file to read from when drawing the visualizations.
     */
    updateViz() : void {

    }


    


    //* =====================
    //*    Event Handlers
    //* =====================

    OnWebViewMsg(event:Event) : void {
        let msg: vizCmd = event.data;
        switch (msg.command) {
            case "update":
                this.updateViz();
                break;
            default:
                break;
        }
    };


    OnEditorChange() : void {

    }
}

class visualizer {
    fileName: string;
    viz: string;

    constructor(_fileName:string) {
        this.fileName = _fileName;
        this.viz = "";
    }
}

class vizCmd {
    command: string;
    args: Array<string>;
    attachment: any;

    constructor(_command:string, _args:Array<string>) {
        this.command = _command;
        this.args = _args;
    }
}

