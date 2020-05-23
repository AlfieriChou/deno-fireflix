################################################################
format:
	@deno run --allow-read --allow-write https://denolib.com/denolib/prettier/main.ts

ci:
	@deno run --allow-read test/**/*.ts
