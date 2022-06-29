This is an experiment to break within the for await of.

```typescript
for await (const _ of stream()) {
  break;
}
```

`next@12.2.0` ... works!
