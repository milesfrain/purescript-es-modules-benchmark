SHELL=/bin/bash

PATH := $(shell npm bin):$(PATH)
.DEFAULT_GOAL := bundles

.PHONY: node_modules
node_modules:
	npm install

.PHONY: install
install: node_modules

.PHONY: output
output: node_modules
	psc-package build -- --codegen js,corefn

.PHONY: dce-output
dce-output: output
	zephyr Main --dce-foreign

.PHONY: purs-bundles
purs-bundles: output
	mkdir -p dist

	purs bundle output/*/{foreign,index}.js --module Main | \
		tee dist/purs-bundle.js | terser > dist/purs-bundle.min.js

.PHONY: webpack4-bundles
webpack4-bundles: dce-output
	cd webpack-4 && WEBPACK_VERSION=4 npx webpack --config ../webpack.config.js

.PHONY: webpack5-bundles
webpack5-bundles: dce-output
	cd webpack-5 && WEBPACK_VERSION=5 npx webpack --config ../webpack.config.js

.PHONY: webpack-bundles
webpack-bundles: webpack4-bundles webpack5-bundles

.PHONY: rollup-bundles
rollup-bundles: dce-output
	rollup --config

.PHONY: parcel-bundles
parcel-bundles: dce-output
	parcel build output/Main/index.js --out-file parcel-bundle.js \
		--no-source-maps --experimental-scope-hoisting --no-minify
	parcel build output/Main/index.js --out-file parcel-bundle.min.js \
		--no-source-maps --experimental-scope-hoisting

	parcel build dce-output/Main/index.js --out-file parcel-dce-bundle.js \
		--no-source-maps --experimental-scope-hoisting --no-minify
	parcel build dce-output/Main/index.js --out-file parcel-dce-bundle.min.js \
		--no-source-maps --experimental-scope-hoisting

.PHONY: clean
clean:
	rm -rf dist output dce-output

.PHONY: bundles
bundles: clean purs-bundles webpack4-bundles webpack5-bundles rollup-bundles parcel-bundles
	ls -lS dist | awk '{print $$5, $$9}' | column -t
