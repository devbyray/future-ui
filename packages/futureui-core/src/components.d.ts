/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FtContainer {
    }
    interface FtPage {
    }
    interface FtToggle {
        /**
          * The custom id
         */
        "customId": string;
        /**
          * The custom value
         */
        "customValue": any;
        /**
          * The debug state This will show a pre tag in the HTML to visualize the value
         */
        "debug": boolean;
        /**
          * The label name
         */
        "label": string;
        /**
          * The values
         */
        "values": string[];
    }
    interface FtToolbar {
        "text": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface FtToggleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFtToggleElement;
}
declare global {
    interface HTMLFtContainerElement extends Components.FtContainer, HTMLStencilElement {
    }
    var HTMLFtContainerElement: {
        prototype: HTMLFtContainerElement;
        new (): HTMLFtContainerElement;
    };
    interface HTMLFtPageElement extends Components.FtPage, HTMLStencilElement {
    }
    var HTMLFtPageElement: {
        prototype: HTMLFtPageElement;
        new (): HTMLFtPageElement;
    };
    interface HTMLFtToggleElementEventMap {
        "toggleChange": boolean;
    }
    interface HTMLFtToggleElement extends Components.FtToggle, HTMLStencilElement {
        addEventListener<K extends keyof HTMLFtToggleElementEventMap>(type: K, listener: (this: HTMLFtToggleElement, ev: FtToggleCustomEvent<HTMLFtToggleElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLFtToggleElementEventMap>(type: K, listener: (this: HTMLFtToggleElement, ev: FtToggleCustomEvent<HTMLFtToggleElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLFtToggleElement: {
        prototype: HTMLFtToggleElement;
        new (): HTMLFtToggleElement;
    };
    interface HTMLFtToolbarElement extends Components.FtToolbar, HTMLStencilElement {
    }
    var HTMLFtToolbarElement: {
        prototype: HTMLFtToolbarElement;
        new (): HTMLFtToolbarElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "ft-container": HTMLFtContainerElement;
        "ft-page": HTMLFtPageElement;
        "ft-toggle": HTMLFtToggleElement;
        "ft-toolbar": HTMLFtToolbarElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface FtContainer {
    }
    interface FtPage {
    }
    interface FtToggle {
        /**
          * The custom id
         */
        "customId"?: string;
        /**
          * The custom value
         */
        "customValue"?: any;
        /**
          * The debug state This will show a pre tag in the HTML to visualize the value
         */
        "debug"?: boolean;
        /**
          * The label name
         */
        "label"?: string;
        "onToggleChange"?: (event: FtToggleCustomEvent<boolean>) => void;
        /**
          * The values
         */
        "values"?: string[];
    }
    interface FtToolbar {
        "text"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "ft-container": FtContainer;
        "ft-page": FtPage;
        "ft-toggle": FtToggle;
        "ft-toolbar": FtToolbar;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ft-container": LocalJSX.FtContainer & JSXBase.HTMLAttributes<HTMLFtContainerElement>;
            "ft-page": LocalJSX.FtPage & JSXBase.HTMLAttributes<HTMLFtPageElement>;
            "ft-toggle": LocalJSX.FtToggle & JSXBase.HTMLAttributes<HTMLFtToggleElement>;
            "ft-toolbar": LocalJSX.FtToolbar & JSXBase.HTMLAttributes<HTMLFtToolbarElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}