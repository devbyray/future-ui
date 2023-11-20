# ft-toggle

```html
<p>
  <ft-toggle label="Default toggle" customId="quality"></ft-toggle>
</p>
<p>
  <ft-toggle id="toggleQuality" label="Quality toggle" customId="quality"></ft-toggle>
</p>

<script>
  const toggle = document.querySelector('#toggleQuality');
  toggle.values = ['good', 'bad'];
</script>
```

## Properties

| Property      | Attribute     | Description             | Type       | Default     |
| ------------- | ------------- | ----------------------- | ---------- | ----------- |
| `values`      | `values`      | The custom values       | `string[]` | `undefined` |
| `customValue` | `customValue` | The current value       | `any`      | `null`      |
| `label`       | `label`       | The label before toggle | `string`   | `undefined` |

---

_Built with [StencilJS](https://stenciljs.com/)_
