################################################################
format:
	@deno run --allow-read --allow-write https://deno.land/std/prettier/main.ts

ci:
	@deno run --allow-read test/**/*.ts