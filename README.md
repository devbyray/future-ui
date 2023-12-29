![](./futureui-icon.png)

# @futureui/core

Future UI Core is a Web Component library. We focus on:
- Un-styled web components
- Accessible web components
- Extendable web components
- Minimal to no dependencies

## Installation

```bash
npm install @futureui/core
```
or

```bash
yarn add @futureui/core
```

## Usage

For example, if you want to use the accordion component. Import it in your JavaScript or TypeScript.
```ts
import '@futureui/core-ui/accordion';
```

After that you can use the component like this:

```html
<fu-core-accordion>
    <fu-core-accordion-item>
        <fu-core-accordion-header><h2>Accordion Header 1</h2></fu-core-accordion-header>
        <fu-core-accordion-content>Accordion Content 1</fu-core-accordion-content>
    </fu-core-accordion-item>
    <fu-core-accordion-item>
        <fu-core-accordion-header><h2>Accordion Header 2</h2></fu-core-accordion-header>
        <fu-core-accordion-content>Accordion Content 2</fu-core-accordion-content>
    </fu-core-accordion-item>
    <fu-core-accordion-item>
        <fu-core-accordion-header><h2>Accordion Header 3</h2></fu-core-accordion-header>
        <fu-core-accordion-content>Accordion Content 3</fu-core-accordion-content>
    </fu-core-accordion-item>
    <fu-core-accordion-item>
        <fu-core-accordion-header><h2>Accordion Header 4</h2></fu-core-accordion-header>
        <fu-core-accordion-content>Accordion Content 4</fu-core-accordion-content>
    </fu-core-accordion-item>
</fu-core-accordion> 
```

## Components

- **Accordion**: [documentation](https://future-ui-core.vercel.app/?path=/docs/core-accordion--documentation).
- More to come 👍

## How To's
If you want to read more on how to use or extend our components, please check out the [documentation section](./docs/index.md).