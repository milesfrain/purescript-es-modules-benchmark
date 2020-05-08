# PureScript ES Modules benchmark

```
ls -lS dist | awk '{print $5, $9}' | column -t
12902  webpack4-bundle.js
10487  webpack5-bundle.js
9276   parcel-bundle.js
8326   rollup-bundle.js
5355   webpack4-bundle.min.js
4437   webpack5-bundle.min.js
4308   webpack4-dce-bundle.js
3965   parcel-bundle.min.js
2169   rollup-bundle.min.js
1979   webpack5-dce-bundle.js
1149   webpack4-dce-bundle.min.js
773    purs-bundle.js
658    parcel-dce-bundle.js
530    purs-bundle.min.js
338    webpack5-dce-bundle.min.js
320    rollup-dce-bundle.js
297    parcel-dce-bundle.min.js
150    rollup-dce-bundle.min.js
```
