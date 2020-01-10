################################################################
format:
	@deno --allow-read --allow-write https://deno.land/std/prettier/main.ts

ci:
	@deno --allow-read test/test.ts