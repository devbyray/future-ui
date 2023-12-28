# Accordion

Every component library has a accordion component. This is ours. This one is unstyled, so you can style it however you want.

## Installation

```bash
npm i @futureui/core-ui
```

## Usage

### When you install via NPM
Import the library in your JavaScript and your good to go. The library is written in TypeScript, so you get full type support.

```ts
import '@futureui/core-ui/accordion';
```

### When you use a CDN
```ts
import "https://esm.sh/@futureui/core-ui/accordion";
```

### CodePen
Check the example on [CodePen](https://codepen.io/devbyray/pen/WNmvoov)

### Storybook
Check the [documentation](https://future-ui-core.vercel.app/?path=/docs/core-accordion--documentation) on Storybook.



## Default

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

## Multiple Open

```html
<fu-core-accordion allow-multiple="true">
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

## Custom styling

You can style the accordion by setting the following css variables:

```css	
:root {
	--core-accordion-content-closed-padding: 0;
	--core-accordion-content-closed-margin: 0;
	--core-accordion-content-closed-background-color: transparent;
	--core-accordion-content-open-padding: 0;
	--core-accordion-content-open-margin: 0;
	--core-accordion-content-open-background-color: transparent;

	--core-accordion-item-margin: 0;
	--core-accordion-item-padding: 1rem;
	--core-accordion-item-background-color: #f1f1f1;
	--core-accordion-item-border-radius: 0;

	--core-accordion-item-border-top: none;
	--core-accordion-item-border-right: none;
	--core-accordion-item-border-bottom: none;
	--core-accordion-item-border-left: none;

	--core-accordion-item-margin-open: 0;
	--core-accordion-item-padding-open: 1rem;
	--core-accordion-item-background-color-open: #f1f1f1;
}
```